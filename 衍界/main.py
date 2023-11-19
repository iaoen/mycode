import time
import execjs
import threading
import requests
import json

js = execjs.compile(open("./衍界/index.js").read())


def main():
    data = js.call("encryptData", {"productId": "469490260380876805"}, "03c1f319481676b43fe9668ed554313bb8002f5879efda76c8050485367f80894f")
    headers = {
        "UserMeta": "{'appType':'APP','plaform':'android'}",
        "Version": "1.0.7(204)",
        "DeviceCode": "767425D2EE7A52003DDC5967EA1F79AC",
        "Token": "B42C4C5AEB952D6D9D80DB642FD18658I51E",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; Mi 10 Pro Build/QKQ1.200419.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/114.0.5735.14 Mobile Safari/537.36"
    }

    res = requests.post("https://api.yanjie.art/nft/order/createQuickOrder", json=data, headers=headers)
    print(res.text)
