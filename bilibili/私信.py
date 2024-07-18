import hashlib
import time
from uuid import uuid4

import requests

dev_id = str(uuid4()).upper()

params = {
    "w_sender_uid": "x",  # 发送者uid
    "w_receiver_id": "xx",  # 接受者uid
    "w_dev_id": dev_id,
}

OE = [46, 47, 18, 2, 53, 8, 23, 32, 15, 50, 10, 31, 58, 3, 45,
      35, 27, 43, 5, 49, 33, 9, 42, 19, 29, 28, 14, 39, 12, 38,
      41, 13, 37, 48, 7, 16, 24, 55, 40, 61, 26, 17, 0, 1, 60,
      51, 30, 4, 22, 25, 54, 21, 56, 59, 6, 63, 57, 62, 11, 36,
      20, 34, 44, 52]
headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36",
    "Cookie": ""
}
info = requests.get("https://api.bilibili.com/x/web-interface/nav", headers=headers).json()
print(info)
img_val = info['data']['wbi_img']['img_url'].split('/')[-1].split('.')[0]
sub_val = info['data']['wbi_img']['sub_url'].split('/')[-1].split('.')[0]
val = img_val + sub_val
request_token = ''.join([val[v] for v in OE])[:32]
print("request_token", request_token)

wts = int(time.time())
params["wts"] = wts
data = dict(sorted(params.items()))
data_str = "&".join([f"{k}={v}" for k, v in data.items()]) + request_token
md5 = hashlib.md5(data_str.encode("utf-8")).hexdigest()
params["w_rid"] = md5

print(params)

data = {
    "msg[sender_uid]": "x",  # 发送者uid
    "msg[receiver_id]": "xx",  # 接受者uid
    "msg[receiver_type]": "1",
    "msg[msg_type]": "1",
    "msg[msg_status]": "0",
    "msg[content]": "{\"content\":\"发送内容\"}",
    "msg[timestamp]": str(wts),
    "msg[new_face_version]": "0",
    "msg[dev_id]": dev_id,
    "from_firework": "0",
    "build": "0",
    "mobi_app": "web",
    "csrf_token": "xxx",  # ck里面的bili_jct字段
    "csrf": "xxx"  # ck里面的bili_jct字段
}

res = requests.post("https://api.vc.bilibili.com/web_im/v1/web_im/send_msg", headers=headers, params=params, data=data)
print(res.text)
