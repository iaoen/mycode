# encoding=utf-8
import requests as http
import random
import time
import base64

from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_PKC

key = """-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArmmQqZGhnufKLU2EqGjUSccBGRfuf99m
ZlctQCa0/w4sIs2drFp5ZN1VWVHxLNhBbYw9Rc34C3wIQ0HXJKpJy9NBDqsjtRQFLr4Qel4xBVxD
3I4qDzGLjac16Z5nG9EwqIIJ2Dwsa+xPHgHwwWEz12e7l0g4U/LGmHAtGeG2p8dwJKBQwOdkFcP0
IiVlfZPXzVuPyOflNsagoxNpBMoSBhz51eRtZ/yl12er/yzVcxlMPBDy3MVMD1pmHtOJEqDWhy0o
uUwA7L8P6hlVyBBSmMhpeFf03Nid86uWM9wGkzspIimCOz0URRsxHOnWlsrtR7hSON14789ABACA
sRe7nQIDAQAB
-----END PUBLIC KEY-----"""

rsa_key = RSA.import_key(key)
cipher_rsa = Cipher_PKC.new(rsa_key)


def encrypt(plaintext):
    en_data = cipher_rsa.encrypt(plaintext.encode("utf-8"))
    base64_text = base64.b64encode(en_data)
    return base64_text.decode()


def randDevice_id():
    ranstr = '0123456789abcde'
    returnStr = ''.join(random.choice(ranstr) for _ in range(16))
    return returnStr


def sendMsg(phone, device_id):
    headers = {
        "app_channel": "official",
        "device_mac": "",
        "app_version": "1.0.3",
        "device_id": device_id,
        "device_imei": "",
        "os_version": "Android_11",
        "package_name": "com.client.poptown",
        "app_system": "android11",
        "device_type": "2",
        "Accept-Language": "zh-CN"
    }
    tt = str(int(time.time()*1000))
    data = {
        "phone": phone,
        "rsa_code": encrypt(tt)
    }
    res = http.post("https://app.poptown.club/account/phone/captcha", json=data, headers=headers).json()
    print(res)
    if res["status"] != 200:
        return None
    else:
        return True


def signup(phone, yzm, device_id):
    headers = {
        "app_channel": "official",
        "device_mac": "",
        "app_version": "1.0.3",
        "device_id": device_id,
        "device_imei": "",
        "os_version": "Android_11",
        "package_name": "com.client.poptown",
        "app_system": "android11",
        "device_type": "2",
        "Accept-Language": "zh-CN"
    }
    data = {
        "inviteeChannel": "poptown",
        "code": yzm,
        "inviteeUid": invite,
        "phone": phone,
        "loginType": "sms"
    }
    res = http.post(f"https://app.poptown.club/account/login", json=data, headers=headers).json()
    print(phone, yzm)


def main():
    device_id = randDevice_id()

    phone = input("请输入手机号：")
    # 发送验证码 已注册拉黑
    sendstatus = sendMsg(phone, device_id)
    print(sendstatus)

    code = input("请输入验证码:")
    # 注册
    signup(phone, code, device_id)


if __name__ == "__main__":
    invite = ""
    main()
