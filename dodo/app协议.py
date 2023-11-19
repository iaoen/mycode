import base64
import hmac
import random
import time
import os
from concurrent.futures import ThreadPoolExecutor
from hashlib import sha1
from urllib.parse import unquote

import requests

http = requests.Session()


def ec(func):
    def warp(*args):
        try:
            return func(*args)
        except BaseException:
            return warp(*args)
    return warp


def hamc_sha1(message):
    key = "8rsMx2wfLgPI8DXGKP8cLOLZ1hsErlQY3tMBzdmU".encode()
    result = hmac.new(key, message.encode(), sha1).digest()
    _sig = base64.b64encode(result).decode()
    return _sig


def toData(msg):
    sign = hamc_sha1(unquote(msg))
    a_list = msg.split("&")
    data = {}
    for i in a_list:
        c = i.split("=")
        data[c[0]] = c[1]
    data["sig"] = sign
    return data


def custom_time(timestamp):
    time_local = time.localtime(timestamp)
    dt = time.strftime("%Y-%m-%d %H:%M:%S", time_local)
    return dt


def getHeaders():
    headers = {
        "deviceid": "",
        "clienttype": "2",
        "apptype": "3",
        "clientversion": "4.5.5.02",
        "clientbuild": "405050002",
        "marketchannel": "official",
        "packagename": "com.dodolive.app",
        "user-agent": ""
    }
    return headers


def update(token, uid, a, b):
    r"""更换名字头像"""
    tt = int(time.time()*1000)
    data = toData('accountJson={"backgroundUrl":"","regionStatus":1,"province":"","avatarUrl":"'+a+'","city":"","nickName":"'+b+'","sex":'+str(random.randint(-1, 1))+',"sign":""}'+f"&apikey=xD7nN1kuFwI&clientBuild=405000010&clientTime={custom_time(tt)}&clientType=2&clientVersion=4.5.0.10&marketChannel=official&productId=2&timestamp={tt}&token={token}&uid={uid}&version=1.0")
    res = http.post('https://apis.imdodo.com/account/update', data=data, headers=getHeaders()).json()
    print("update", res["data"]["nickName"], res["data"]["avatarUrl"])


def ubind(token, uid):
    r"""解除bilibili绑定"""
    tt = int(time.time()*1000)
    data = toData(f"apikey=xD7nN1kuFwI&clientBuild=405000010&clientTime={custom_time(tt)}&clientType=2&clientVersion=4.5.0.10&marketChannel=official&productId=2&timestamp={tt}&token={token}&uid={uid}&version=1.0")
    res = http.post("https://apis.imdodo.com/account/unbindBilibili", data=data, headers=getHeaders()).json()
    print("ubind", res["message"], res["status"])
    return res


def getUserInfoByToken(token, uid):
    r"""获取账户信息"""
    tt = int(time.time()*1000)
    data = toData(f"apikey=xD7nN1kuFwI&clientBuild=405000010&clientTime={custom_time(tt)}&clientType=2&clientVersion=4.5.0.10&marketChannel=official&productId=2&timestamp={tt}&token={token}&uid={uid}&version=1.0")
    res = http.post("https://apis.imdodo.com/account/getUserInfoByToken", data=data, headers=getHeaders()).json()
    nickName = res["data"]["accountInfo"]["nickName"]
    mobile = res["data"]["accountInfo"]["mobile"]
    print("getUserInfoByToken", nickName, mobile, token, uid)
    return res


def getMqttApplyToken(token, uid):
    r"""获取mqttToken用于后续wss连接获取聊天消息"""
    tt = int(time.time()*1000)
    data = toData(f"apikey=xD7nN1kuFwI&clientBuild=405000010&clientTime={custom_time(tt)}&clientType=2&clientVersion=4.5.0.10&marketChannel=official&productId=2&timestamp={tt}&token={token}&uid={uid}&version=1.0")
    res = http.post("https://apis.imdodo.com/api/getMqttApplyToken", data=data, headers=getHeaders()).json()
    Token = res["data"]["token"]
    print("getMqttApplyToken", Token, uid)
    return res


def joinLand(token, uid, qunnum):
    r"""加入群聊"""
    tt = int(time.time()*1000)
    data = toData(f"apikey=xD7nN1kuFwI&clientBuild=405000010&clientTime={custom_time(tt)}&clientType=2&clientVersion=4.5.0.10&islandId={qunnum}&marketChannel=official&productId=2&timestamp={tt}&token={token}&uid={uid}&version=1.0")
    res = http.post(f"https://apis.imdodo.com/island/v4/islands/{qunnum}/join", data=data, headers=getHeaders()).json()
    print(res)
