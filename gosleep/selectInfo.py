import base64
import binascii
import hashlib
import json
import random
import re
import threading
import time
import datetime

import requests
from Crypto.Cipher import AES


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
            return warp(*args)
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


@ec
def get_user_info(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/user_api/get_user_info", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = json.loads(aes.decrypt(res_content))
    invitation_code = res["data"]["invitation_code"]
    ntoken = res["data"]["ntoken"]
    print("get_user_info", uid, ntoken/10000,invitation_code)
    return invitation_code

@ec
def invite_info(key, iv, device_id, authorization, uid):
    tt, tt_hex = getTime()
    aes = AESUtil(binascii.a2b_hex(key), binascii.a2b_hex(f"{iv}{tt_hex}"))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={}&platform=10&time_zone=Asia/Shanghai&uid='+uid+'&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":'+uid+',"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/invite_api/invite_info", data, headers=getHeaders(tt, authorization, uid), stream=True).content
    res = json.loads(aes.decrypt(res_content))
    print("invite_info", uid,res)


def main(i):
    email, uid,_, key_b64, iv_b64, device_id, authorization = zh_list[i].split("|")
    key, iv = base64.b64decode(key_b64).hex(), base64.b64decode(iv_b64).hex()
    invitation_code = get_user_info(key, iv, device_id, authorization, uid)
    # open(f"./gosleep/zh2.txt", "a").write(f"{email}|{uid}|{invitation_code}|{key_b64}|{iv_b64}|{device_id}|{authorization}\n")


zh_list = open("./gosleep/zh2.txt").read().split("\n")
ranges = range(0, 3)
for i in ranges:
    print(f"------------------------------{i+1}------")
    threading.Thread(target=main, args=(i,)).start()
    time.sleep(1)

    # nftlist = nft_list(device_id, authorization, uid)
    # nft_used(device_id, authorization, uid, nftlist[0][0])
    # login_token(device_id, authorization, uid)
