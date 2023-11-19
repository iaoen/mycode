from datetime import datetime
from tools import *
import os
import random
import time
import threading


def buy2():
    r"""购买"""
    pay_ways = ["shande", "yibao"]
    # data = encrypt('{"goods_id":1006,"key":"9ca3f22f72f5454421daf067e617577f","pay_way":"yibao"}')
    data = encrypt('{"goods_id":1017,"key":"f0f661fa5184a67578a47b66745271a7","pay_way":"'+random.choice(pay_ways)+'"}')
    res = requests.post("https://api.jiaonang.art/api/order/pay/fastOrder", data=data, headers=headers, proxies=random.choice(proxys), timeout=10).json()
    print(res)
    if res["code"] == 401:
        notice("token失效了", "胶囊")
        os._exit(9)
    if res["code"] != 0:
        notice("胶囊", "胶囊")


headers = {
    "Origin": "https://www.jiaonang.art",
    "Referer": "https://www.jiaonang.art/",
    "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_1 like Mac OS X; zh-cn) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/20B82 Quark/6.3.0.1675 Mobile",
    "content-type": "form-data",
    "token": "174e69ca-812e-4f74-9524-3bdb6f8a9636"
}

# # 获取代理
# ips = requests.get("dailiUrl").text.split()
# proxys = []
# for ip in ips:
#     proxys.append({"http": ip, "https": ip})
proxys = [{}]

buy2()
