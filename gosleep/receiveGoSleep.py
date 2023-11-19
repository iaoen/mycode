import base64
import binascii
import hashlib
import json
import logging
import random
import re
import threading
import time
import datetime

import requests
from Crypto.Cipher import AES
logging.captureWarnings(True)


class dyProxy:
    def __init__(self, orderno, secret):
        self.orderno = orderno
        self.secret = secret
        self.proxy = {"http": "http://dtan.xiongmaodaili.com:8088", "https": "http://dtan.xiongmaodaili.com:8088"}

    def getPA(self):
        timestamp = str(int(time.time()))
        sign = hashlib.md5(("orderno=" + self.orderno + "," + "secret=" + self.secret + "," + "timestamp=" + timestamp).encode()).hexdigest().upper()
        return "sign=" + sign + "&" + "orderno=" + self.orderno + "&" + "timestamp=" + timestamp + "&change=true"

    def post(self, url, data={}, headers={}):
        headers["Proxy-Authorization"] = self.getPA()
        res = requests.post(url, data=data, headers=headers, proxies=self.proxy, verify=False, timeout=10)
        return res


class AESUtil(object):
    __BLOCK_SIZE_16 = BLOCK_SIZE_16 = AES.block_size

    def __init__(self, key, iv):
        self.key = key
        self.iv = iv

    def encryt(self, str):
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        x = AESUtil.__BLOCK_SIZE_16 - (len(str) % AESUtil.__BLOCK_SIZE_16)
        if x != 0:
            str = str + chr(x)*x
        msg = cipher.encrypt(str.encode("utf8"))

        return msg

    def decrypt(self, decryptByts):
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        msg = cipher.decrypt(decryptByts).decode()
        paddingLen = ord(msg[len(msg)-1])
        return msg[0:-paddingLen]


def ec(func):
    def warp(*args):
        try:
            return func(*args)
        except BaseException:
            pass
    return warp


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest()


def randDevice_id():
    ranstr = '0123456789abcde'
    returnStr = ''.join(random.choice(ranstr) for _ in range(16))
    return returnStr


def random09(lin):
    returnStr = ''
    for _ in range(lin):
        returnStr += str(random.randint(0, 9))
    return returnStr


def rand_email(code_len=8):
    e = ["@teml.net", "@tmpbox.net", "@moakt.cc", "@disbox.net", "@tmpmail.org", "@tmpmail.net", "@tmails.net", "@disbox.org", "@moakt.co", "@moakt.ws", "@tmail.ws", "@bareed.ws"]
    a = '0123456789abcdefghijklmnopqrstuvwxyz'
    b = random.choices(a, k=code_len)
    c = "".join(_ for _ in b)
    return c + random.choice(e)


def getHeaders(tt, authorization="", uid="0"):
    headers = {
        "Accept-Language": "zh",
        "User-Agent": "Android",
        "equipment": "Xiaomi  Mi 10 Pro  10",
        "authorization": authorization,
        "version": "202",
        "TIMESTAMP": tt,
        "UID": uid,
        "LANGUAGE": "HK"
    }
    return headers


def getTime():
    tt = int(time.time())
    return str(tt), hex(tt)[2:].rjust(12, '0')


def getInfo(res):
    lp = ["data", "datb", "datc", "datd", "date", "datg", "dath", "dati", "datj", "datk", "datl", "datm", "datn", "dato", "datp", "datq", "datr", "dats", "datt", "datu", "datv", "datw", "datx", "daty", "datz", "dat~", "dat1", "dat2", "dat3", "dat4", "dat5", "dat6", "dat7", "dat8", "dat9", "dat0", "dat-", "dat+", "dat_", "dat=", "dat)", "dat(", "dat^", "dat%", "dat#", "dat!", "dat.", "dat,", "dat>", "dat<", "dat|", "dat*", "dat/", "dat`"]
    for i in lp:
        if i in res:
            key_b64 = res[i]["access_01"]
            iv_b64 = res[i]["access_02"]
            email = res[i]["email"]
            authorization = res[i]["token"]
            uid = res[i]["uid"]
    print(key_b64, iv_b64, email, authorization, uid)
    return key_b64, iv_b64, email, authorization, uid


def login_token(device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil("/login_api/token".encode(), binascii.a2b_hex(f'{tt_hex}00000000000000000000'))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"access_token":"'+authorization+'"}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"access_token":"'+authorization+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/login_api/token_login", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = json.loads(aes.decrypt(res_content))
    key_b64, iv_b64, email, authorization, uid = getInfo(res)
    return key_b64, iv_b64, email, authorization, uid


def bind_invite_code(key, iv, device_id, authorization, uid, inviter_code):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"inviter_code":"'+inviter_code+'"}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"inviter_code":"'+inviter_code+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.pro/invite_api/bind_invite_code", data, headers=getHeaders(tt, authorization, uid)).content
    print(aes.decrypt(res))


def gosleep(key, iv, device_id, authorization, uid, i):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"sleep_end_target":"06:00","sleep_start_target":"20:00"}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"sleep_end_target":"06:00","sleep_start_target":"20:00"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.pro/sleep_nft/sleep_update_goals", data, headers=getHeaders(tt, authorization, uid)).content
    print(i, "gosleep", uid, aes.decrypt(res))


@ec
def receive(key, iv, device_id, authorization, uid, reward_id, i):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"currency_type":1,"reward_list":['+reward_id+']}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"currency_type":1,"reward_list":['+reward_id+']},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = proxy.post("https://app.gosleep.pro/sleep_nft/sleep_reward_receive", data, headers=getHeaders(tt, authorization, uid)).content
    print(i, "receive", uid, aes.decrypt(res))


@ec
def reward(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    tt_start = str(int(time.mktime(time.strptime(f"2023-5-{datetime.datetime.today().day-1} 22:{random.randint(10,59)}:{random.randint(10,59)}", "%Y-%m-%d %H:%M:%S"))))
    tt_stop = str(int(time.mktime(time.strptime(f"2023-5-{datetime.datetime.today().day} 08:{random.randint(10,59)}:{random.randint(10,59)}", "%Y-%m-%d %H:%M:%S"))))
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"sleep_time_list":[{"end":'+tt_stop+',"start":'+tt_start+',"state":0}]}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"sleep_time_list":[{"end":'+tt_stop+',"start":'+tt_start+',"state":0}]},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.pro/sleep_nft/new_sleep_reward", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = aes.decrypt(res)
    print("reward-----",res)
    id = re.findall("\d{7}", res)[0]
    print("reward", uid, id, res)
    return id


def nft_list(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"page_no":0,"page_size":10,"quality_order":-10}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"page_no":0,"page_size":10,"quality_order":-10},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/sleep_nft/nft_list", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = json.loads(aes.decrypt(res_content))
    # {"data":{"all_cjunt":1,"nft_list":[{"chain":"arbitrum","comfort_base":100,"comfort_growth":"0.05","comfort_num":5,"coordinate":"","db_id":138754,"durability":120,"earn_state_switch_time":0,"efficiency_base":100,"image":"sleep_nft_image/grace/out/image/discover/2.c.png","level":1,"loss":0,"luck":5,"luck_base":100,"luck_growth":"0.05","max_attribute":{"comfort_num":100,"luck":100,"max_durable":120,"max_level":30,"max_loss":700,"max_mint_times":0,"max_quality":40,"max_quality_name":"Myth","n_output_max":333500.0,"new_max_durability":120,"productivity":100,"s_output_max":9000.0},"module_image":[{"module_token_type":10,"url":"sleep_nft_image/grace/res/1_wall/2-1.png"},{"module_token_type":50,"url":"sleep_nft_image/grace/res/5_bed/2.png"},{"module_token_type":60,"url":"sleep_nft_image/grace/res/6_pillow/2.png"},{"module_token_type":70,"url":"sleep_nft_image/grace/res/7_bedside_table/2.png"},{"module_token_type":90,"url":"sleep_nft_image/grace/res/9_table/2.png"}],"n_output":179000.0,"new_durability":120,"next_level_attribute":{"comfort_num":0,"luck":0,"n_output_next":4500.0,"productivity":0,"s_output_next":0.0},"next_level_function":[],"next_quality_function":[],"next_quality_name":"Rare","page_image":"sleep_nft_image/grace/out/image/cover/2.c.png","prev_quality_name":"Common","productivity":5,"productivity_growth":"0.05","quality":10,"quality_name":"Common","s_output":0.0,"source":106,"source_type":2,"spawn_times":0,"special_skill":20,"state":20,"token_id":1131143,"token_type":0,"wear_degree":"0.00"}],"page_num":0,"page_size":10},"ret":0,"time":1681702062}
    nftlist = []
    for i in res["data"]["nft_list"]:
        nftlist.append([i["db_id"], i["level"], i["luck"], i["loss"]])
    return nftlist


def nft_used(key, iv, device_id, authorization, uid, nft_id):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"nft_id":'+str(nft_id)+'}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"nft_id":'+str(nft_id)+'},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/sleep_nft/nft_used", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = aes.decrypt(res_content)
    print(res)


def main(i):
    _, uid, _, key_b64, iv_b64, device_id, authorization = zh_list[i].split("|")
    key, iv = base64.b64decode(key_b64).hex(), base64.b64decode(iv_b64).hex()
    reward_id = reward(key, iv, device_id, authorization, uid)
    if reward_id[0:3] == "600":
        return
    receive(key, iv, device_id, authorization, uid, reward_id, i)
    # gosleep(key, iv, device_id, authorization, uid, i)


# proxy = dyProxy("", "")
proxy = requests.Session()
zh_list = open("./gosleep/zh2.txt").read().split("\n")
for i in range(0, 3):
    threading.Thread(target=main, args=(i,)).start()
    time.sleep(0.3)

    # nftlist = nft_list(device_id, authorization, uid)
    # nft_used(device_id, authorization, uid, nftlist[0][0])
    # login_token(device_id, authorization, uid)
