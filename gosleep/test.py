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
        "version": "103",
        "TIMESTAMP": tt,
        "UID": uid,
        "LANGUAGE": "HK",
        "channel": "meta_android"
    }
    return headers


def getTime():
    tt = int(time.time())
    return str(tt), hex(tt)[2:].rjust(12, '0')


def getInfo(res):
    lp = ["datW", "data", "datb", "datc", "datd", "date", "datg", "dath", "dati", "datj", "datk", "datl", "datm", "datn", "dato", "datp", "datq", "datr", "dats", "datt", "datu", "datv", "datw", "datx", "daty", "datz", "dat~", "dat1", "dat2", "dat3", "dat4", "dat5", "dat6", "dat7", "dat8", "dat9", "dat0", "dat-", "dat+", "dat_", "dat=", "dat)", "dat(", "dat^", "dat%", "dat#", "dat!", "dat.", "dat,", "dat>", "dat<", "dat|", "dat*", "dat/", "dat`"]
    for i in lp:
        if i in res:
            key_b64 = res[i]["access_01"]
            iv_b64 = res[i]["access_02"]
            email = res[i]["email"]
            authorization = res[i]["token"]
            uid = res[i]["uid"]
    # print(key_b64, iv_b64, email, authorization, uid)
    return key_b64, iv_b64, email, authorization, uid


def login_emailcode(device_id, email, code):
    tt, tt_hex = getTime()
    aes = AESUtil("/nighttalk_api_l".encode(), binascii.a2b_hex(f'{tt_hex}00000000000000000000'))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"code":"'+code+'","email":"'+email+'"}&platform=10&time_zone=Asia/Shanghai&uid=0&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"code":"'+code+'","email":"'+email+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":0,"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.world/nighttalk_api_login_reg/email", data=data, headers=getHeaders(tt)).content
    res = json.loads(aes.decrypt(res_content))
    print(res)
    key_b64, iv_b64, email, authorization, uid = getInfo(res)
    print(key_b64, iv_b64, email, authorization, uid)


def login_emailpwd(device_id, email, pwd):
    tt, tt_hex = getTime()
    aes = AESUtil("/nighttalk_api_l".encode(), binascii.a2b_hex(f'{tt_hex}00000000000000000000'))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"email":"'+email+'","password":"'+pwd+'"}&platform=10&time_zone=Asia/Shanghai&uid=0&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"email":"'+email+'","password":"'+pwd+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":0,"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.world/nighttalk_api_login_reg/email", data=data, headers=getHeaders(tt)).content
    res = json.loads(aes.decrypt(res_content))
    print(res)
    key_b64, iv_b64, email, authorization, uid = getInfo(res)
    print(key_b64, iv_b64, email, authorization, uid)


def nft_list(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"page_no":0,"page_size":10,"quality_order":-10}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"page_no":0,"page_size":10,"quality_order":-10},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.world/nighttalk_api_card/card_list", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = json.loads(aes.decrypt(res_content))
    # print(res)
    nftlist = []
    for i in res["data"]["nft_list"]:
        nftlist.append([i["db_id"], i["level"], i["max_attribute"]])
    return nftlist


def 领取奖励(key, iv, device_id, authorization, uid, id):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"currency_type":1,"reward_list":['+id+']}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"currency_type":1,"reward_list":['+id+']},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_reward/receive_reward", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = aes.decrypt(res)
    print(res)


def stopsleep(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    a = "1693931077"
    b = "1693965731"
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=meta_android&device_id='+device_id+'&language=HK&location=&machine=Xiaomi-Mi 10 Pro&main_version=103&os=Android&params={"sleep_time_list":[{"a":'+a+',"b":'+b+',"c":0}]}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=1.0.38@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"meta_android","device_id":"'+device_id+'","language":"HK","location":"","machine":"Xiaomi-Mi 10 Pro","main_version":103,"os":"Android","params":{"sleep_time_list":[{"a":'+a+',"b":'+b+',"c":0}]},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"1.0.3"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_reward/gen_reward", data, headers=getHeaders(tt, authorization, uid)).content
    res = aes.decrypt(res)
    print(res)


def commit_sleep_record(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    # a = str(int(time.mktime(time.strptime(f"2023-9-{datetime.datetime.today().day-1} 22:{random.randint(10,59)}:{random.randint(10,59)}", "%Y-%m-%d %H:%M:%S"))))
    # b = str(int(time.mktime(time.strptime(f"2023-9-{datetime.datetime.today().day} 8:{random.randint(10,59)}:{random.randint(10,59)}", "%Y-%m-%d %H:%M:%S"))))
    a = "1693844550"
    b = "1693883730"
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"sleep_time_list":[{"end":'+b+',"start":'+a+',"state":0}]}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"sleep_time_list":[{"end":'+b+',"start":'+a+',"state":0}]},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_sleep_record/commit_sleep_record", data, headers=getHeaders(tt, authorization, uid)).content
    res = aes.decrypt(res)
    print(res)


def query_sleep_record(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=meta_android&device_id='+device_id+'&language=HK&location=&machine=Xiaomi-Mi 10 Pro&main_version=103&os=Android&params={}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=1.0.38@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"meta_android","device_id":"'+device_id+'","language":"HK","location":"","machine":"Xiaomi-Mi 10 Pro","main_version":103,"os":"Android","params":{},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"1.0.3"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_sleep_record/query_sleep_record", data, headers=getHeaders(tt, authorization, uid)).content
    res = aes.decrypt(res)
    print(res)


def updateStartTime(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    print("startTime", tt)
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"start_time":"'+tt+'"}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"start_time":"'+tt+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_sleep_record/update_state", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = aes.decrypt(res)
    print(res)


def updateEndTime(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    print("endTime", tt)
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"end_time":"'+tt+'"}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"end_time":"'+tt+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.world/nighttalk_api_sleep_record/update_state", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = aes.decrypt(res)
    print(res)


device_id = randDevice_id() + "cmiunknown"
login_emailpwd(device_id, "elrcfmr@moakt.co", "Aa123456.")

# key_b64, iv_b64, email, authorization, uid = "IaPHeNsU8/bFM+I+JJ8lVA== s4LSyKflZzN6vg== elrcfmr@moakt.co eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2OTM5OTAwOTUuOTU4MTg2OSwidWlkIjo2MDAxMzczMDIsImV4IjoxNjk0NTk0ODk1Ljk1ODE4NzN9.xTlNJIuo1RNaNfAiFGWRF81poIhNhU1M6ZIA4ZZZXBQ 600137302".split()
# key, iv = base64.b64decode(key_b64).hex(), base64.b64decode(iv_b64).hex()
# nftlist = nft_list(key, iv, device_id, authorization, uid)
# print(nftlist)
# startsleep(key, iv, device_id, authorization, uid)
# stopsleep(key, iv, device_id, authorization, uid)
# commit_sleep_record(key, iv, device_id, authorization, uid)
# updateStartTime(key, iv, device_id, authorization, uid)
# updateEndTime(key, iv, device_id, authorization, uid)
# query_sleep_record(key, iv, device_id, authorization, uid)
