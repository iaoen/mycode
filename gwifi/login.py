import base64
import hashlib
import json
import threading
import time
from urllib.parse import quote_plus, unquote_plus
from uuid import uuid4

import requests
from Crypto.Cipher import AES
from Crypto.Util.Padding import pad


class EncryptDate:
    def __init__(self, key):
        # 初始化密钥
        self.key = key
        # 初始化数据块大小
        self.length = AES.block_size
        # 初始化AES,ECB模式的实例
        self.aes = AES.new(self.key.encode("utf-8"), AES.MODE_ECB)
        # 截断函数，去除填充的字符
        self.unpad = lambda date: date[0:-ord(date[-1])]

    def fill_method(self, aes_str):
        '''pkcs7补全'''
        pad_pkcs7 = pad(aes_str.encode('utf-8'), AES.block_size, style='pkcs7')

        return pad_pkcs7

    def encrypt(self, encrData):
        # 加密函数,使用pkcs7补全
        res = self.aes.encrypt(self.fill_method(encrData))
        # 转换为base64
        msg = str(base64.b64encode(res), encoding="utf-8")

        return msg

    def decrypt(self, decrData):
        # base64解码
        res = base64.decodebytes(decrData.encode("utf-8"))
        # 解密函数
        msg = self.aes.decrypt(res).decode("utf-8")

        return self.unpad(msg)


def md5(str: str):
    return hashlib.md5(str.encode()).hexdigest()


def main(ip):
    a = f"apMac=&appUuid={uuid4()}&btype=1&nasIp=&nasName=gzhjjx&passwd={pwd}&ssid=&staType=phone&timestamp={int(time.time())}&userFirstUrl=&userIp={ip}&userName={phone}&vlan=1"
    b = a+"5447c08b53e8dac47f81269f98cfeada"
    c = a+"5607800502&vlan=1&sign="+md5(b)

    res = requests.post("http://1.117.215.40/gportal/app/authLogin", {"data": aes.encrypt(c)}, headers=headers)
    print(ip, json.loads(aes.decrypt(unquote_plus(res.json()["data"]))))
    # print(ip, res.status_code)


headers = {"Content-Type": "application/x-www-form-urlencoded", "User-Agent": "okhttp/3.3.0"}
aes = EncryptDate("5447c08b53e8dac4")

ip = ""
phone, pwd = "", ""
main(ip)
