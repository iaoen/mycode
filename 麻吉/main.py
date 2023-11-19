from tools import *
from datetime import datetime
import json
import threading
import os


http = requests.Session()


def getList(id):
    r"""获取列表"""
    res = http.get(f"https://api.majihuyu.com/artApi/saleArtAll?size=10&appType=Android&page=0&goodId={id}")
    # print(res.text)
    res_de = aes_util.decrypt(res.text)
    res_de = json.loads(res_de)
    result = []
    for i in res_de['data']:
        result.append([i['isLock'], i["salePrice"], i["goodSku"], i["userId"], i["skuId"], i["name"]])
    return result


def login(phone, pwd):
    r"""登陆"""
    data = json.dumps({"appType": "Android", "appVersion": "3.8.10", "deviceSn": f"AU{md5(str(int(time.time()*1000)))}", "deviceVersion": "OPPO K10", "password": pwd, "phone": phone, "systemVersion": "13"})
    data_en = rsa_util.encrypt(data)
    res = http.post("https://api.majihuyu.com/auth/loginbypwd", json=data_en)
    res_de = aes_util.decrypt(res.text)
    # print(datetime.now(), res_de)
    res_json = json.loads(res_de)
    if res_json["code"] != "S00001":
        print(res_json)
        os._exit(9)
    uid = res_json["data"]["personalInformation"]["id"]
    wallet = res_json["data"]["personalInformation"]["wallet"]
    token = res_json["data"]["token"]
    print("登陆", "uid:", uid, "token:", token, "余额:", wallet)
    return uid, token


print(login("", ""))

phone, myUserId, token = "", "", ""
http.headers.update({"Authorization": token})
