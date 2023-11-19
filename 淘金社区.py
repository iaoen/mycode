import base64
import datetime
import hashlib
import requests
from Crypto.Cipher import DES3


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest().upper()


UserCode = ""
LoginPwd = ""
text = '{"DeviceType":"1","ReqContent":{"UserCode":"'+UserCode+'","CheckCode":"","LoginPwd":"'+md5(LoginPwd)+'"},"RamdomStr":"90f2c5344a2d4c1792412f6db81cfd45","Version":"AV1.7.0","DeviceId":"562a8eaa9c344c6a","AreaCode":"3701","SessionId":""}'
key = b"F734B7E634E78EBB9A467B0E"  # key是16位或者24位
aes = DES3.new(key=key, mode=DES3.MODE_ECB)
data = text.encode()
# 数据不足8位, 后面补足 0 同样16进制
data += b"\x00" * (8 - len(text) % 8)
headers = {"Content-Type": "text/x-markdown; charset=utf-8", "User-Agent": "okhttp/3.3.1"}
res = requests.post("http://mapi.sdcp.cn:8881/api/access/do/?cmd=v2_userlogin&sign=1114919A3E33E62E5986F0805DC51B24&usebase64=false", data=aes.encrypt(data), headers=headers)
print(res.text)
print(res.content)
