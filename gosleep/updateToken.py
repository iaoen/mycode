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

_ck = requests.post("https://www.moakt.com/zh/inbox", allow_redirects=False).headers["Set-Cookie"]
_header = {"cookie": _ck, "x-requested-with": "XMLHttpRequest"}


def ec(func):
    def warp(*args):
        try:
            return func(*args)
        except BaseException:
            return warp(*args)
    return warp


@ec
def setEmail(email):
    data = {
        "username": email
    }
    res = requests.post("https://www.moakt.com/zh/inbox/change", data=data, headers=_header).text
    if "error" in res:
        print("该邮箱已被占用或已设置")
        return False
    else:
        print("设置邮箱成功")
        return True


@ec
def getCode():
    # 获取邮件id
    res = requests.get("https://www.moakt.com/zh/inbox", headers=_header).text
    id = re.findall("\w{8}-\w{4}-\w{4}-\w{4}-\w{12}", res)
    # 没收到邮件重新获取
    if len(id) == 0:
        time.sleep(3)
        return getCode()
    else:
        # 收到根据id获取内容
        res = requests.get(f"https://www.moakt.com/zh/email/{id[0]}/content/", headers=_header).text
        # 寻找6位数验证码
        code = re.findall(re.compile("(\d{4})"), res)[1]
        print("获取到验证码 =>", code)
        return code


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


def signup_email(device_id, email, code, inviteCode):
    tt, tt_hex = getTime()
    aes = AESUtil("/login_api/email".encode(), binascii.a2b_hex(f'{tt_hex}00000000000000000000'))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"code":"'+code+'","email":"'+email+'"}&platform=10&time_zone=Asia/Shanghai&uid=0&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"code":"'+code+'","email":"'+email+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":0,"unity_version":0,"version":"2.0.2"}')
    res_content = requests.post("https://app.gosleep.pro/login_api/email_login", data=data, headers=getHeaders(tt)).content
    res = json.loads(aes.decrypt(res_content))
    key_b64, iv_b64, email, authorization, uid = getInfo(res)
    open(f"./gosleep/{lll}.txt", "a").write(f"{email}|{uid}|{inviteCode}|{key_b64}|{iv_b64}|{device_id}|{authorization}\n")


def signup_email_sendSms(device_id, email):
    tt, tt_hex = getTime()
    aes = AESUtil("/login_api/email".encode("utf8"), binascii.a2b_hex(f'{tt_hex}00000000000000000000'))
    sign = md5('channel=GPID_And_001&device_id='+device_id+'&language=HK&machine=Xiaomi-Mi 10 Pro&main_version=202&os=Android&params={"email":"'+email+'"}&platform=10&time_zone=Asia/Shanghai&uid=0&unity_version=0&version=2.0.28@j#1h@vpo#@ss4tnfz+aa^k@e2zu8kd_+ftnd)=&=r4ag6&b')
    data = aes.encryt('{"channel":"GPID_And_001","device_id":"'+device_id+'","language":"HK","machine":"Xiaomi-Mi 10 Pro","main_version":202,"os":"Android","params":{"email":"'+email+'"},"platform":"10","sign":"'+sign+'","time_zone":"Asia/Shanghai","uid":0,"unity_version":0,"version":"2.0.2"}')
    res = requests.post("https://app.gosleep.pro/login_api/email_reg_code", data, headers=getHeaders(tt), stream=True).content
    print("sendSms", aes.decrypt(res))


@ec
def main(email, device_id, inviteCode):
    status = setEmail(email)
    if status == False:
        return
    signup_email_sendSms(device_id, email)
    time.sleep(3)
    code = getCode()
    signup_email(device_id, email, code, inviteCode)


zh_list = open("./gosleep/zh2.txt").read().split("\n")
zh2 = open("./gosleep/zh2_new.txt").read()
lll = "zh2_new2"
ranges = range(0, 4563)
for i in ranges:
    email, uid, inviteCode, key_b64, iv_b64, device_id, authorization = zh_list[i].split("|")
    if email in zh2:
        continue
    main(email, device_id, inviteCode)
