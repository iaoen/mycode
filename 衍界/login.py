import time
import execjs
import threading
import requests
import json

http = requests.Session()
js = execjs.compile(open("./衍界/index.js").read())

data = js.call("encryptData", {"phone": "18888888888", "code": "111111", "typeCode": 1, "captchaId": "054a29844f754634b32524e833e033e1", "neCaptchaValidate": ""},"0302277d3a326bf9d3f4b622aa04bfdd06188cc95c2b66273b4d7a47edd09f2a6b")
headers = {
    "UserMeta": "{'appType':'APP','plaform':'android'}",
    "Version": "1.0.7(204)",
    "DeviceCode": "BB34D14CD91EFFE5EEE818AC18CCC45C",
    "Token": "",
    "user-agent": "Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.14 Mobile Safari/537.36"
}

res = requests.post("https://api.yanjie.art/api/app/login/phone", json=data, headers=headers).json()
print(res)
