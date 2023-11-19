import base64
import json
import os
import random
import time
from io import BytesIO

import requests
from Crypto.Cipher import DES
from ddddocr import DdddOcr
from PIL import Image
from flask import Flask, request

app = Flask(__name__)


class newDES:
    def __init__(self, key):
        self.length = DES.block_size
        self.des = DES.new(key.encode("utf8"), DES.MODE_ECB)
        self.unpad = lambda date: date[0:-ord(date[-1])]

    def pad(self, text):
        count = len(text.encode('utf8'))
        add = self.length - (count % self.length)
        entext = text + ("\x00" * add)
        return entext

    def encrypt(self, encrData):
        res = self.des.encrypt(self.pad(encrData).encode("utf8"))
        msg = base64.b64encode(res).decode("utf8")
        return msg

    def decrypt(self, decrData):
        res = base64.decodebytes(decrData.encode("utf8"))
        msg = self.des.decrypt(res).decode("utf8")
        return self.unpad(msg)


def get_ua():
    first_num = random.randint(55, 62)
    third_num = random.randint(0, 3200)
    fourth_num = random.randint(0, 140)
    os_type = ['(Windows NT 6.1; WOW64)', '(Windows NT 10.0; WOW64)', '(Macintosh; Intel Mac OS X 10_15_3)', '(Macintosh; Intel Mac OS X 10_12_6)']
    chrome_version = 'Chrome/{}.0.{}.{}'.format(first_num, third_num, fourth_num)
    ua = ' '.join(['Mozilla/5.0', random.choice(os_type), 'AppleWebKit/537.36', '(KHTML, like Gecko)', chrome_version, 'Safari/537.36'])
    return ua


def randStr(code_len=18):
    a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    b = random.choices(a, k=code_len)
    c = "".join(_ for _ in b)
    return c


def custom_time(timestamp):
    time_local = time.localtime(timestamp)
    dt = time.strftime("%Y%m%d%H%M%S", time_local)
    return dt


def randchioce(a, b):
    c = random.choice(a)
    if c in b:
        return randchioce(a, b)
    else:
        return c


def get_yz():
    http = requests.Session()
    tt = int(time.time()*1000)-6000
    captchaUuid = custom_time(tt/1000)+randStr(18)

    res = http.get(f'https://captcha.fengkongcloud.cn/ca/v1/register?sdkver=1.1.3&callback=sm_{tt}&captchaUuid={captchaUuid}'+'&organization=dLmNYoSLfTcetGyhtYyP&appId=default&lang=zh-cn&model=select&channel=DEFAULT&data={}&rversion=1.0.4', headers={"user-agent": get_ua()}).text[17:-1]
    res = json.loads(res)
    rid = res["detail"]["rid"]

    order = res["detail"]["order"]
    # print(order)

    bgparam = res["detail"]["bg"]
    bghost = res["detail"]["domains"][0]
    bgurl = "https://" + bghost + bgparam
    # print(bgurl)

    bgContent = requests.get(bgurl).content
    poses = DET.detection(bgContent)

    zx = []
    zx2 = {}
    for i in poses:
        img_byte = BytesIO()
        img = Image.open(BytesIO(bgContent)).crop((i[0], i[1], i[2], i[3]))
        img.save(img_byte, 'png')
        img.close()
        word = OCR.classification(img_byte.getvalue())
        x = (i[2]-i[0])/2+i[0]
        y = (i[3]-i[1])/2+i[1]
        zx.append([float(f'{x/600:.16f}')+0.0000000007902019, float(f'{y/300:.16f}')+0.0000000007902019])
        zx2[word] = [float(f'{x/600:.16f}')+0.0000000007902019, float(f'{y/300:.16f}')+0.0000000007902019]

    zx3 = [0, 0, 0, 0]

    for o in order:
        if o in zx2:
            zx3[order.index(o)] = zx2[o]

    for i in range(len(zx3)):
        if zx3[i] == 0:
            zx3[i] = randchioce(zx, zx3)
        tt += random.randint(600, 1500)
        zx3[i].append(tt)

    # print("zx1", zx)
    # print("zx2", zx2)
    # print("zx3", zx3)

    zx3 = str(zx3).replace(" ", "")
    data = {
        "callback": f"sm_{int(time.time()*1000)}",
        "protocol": "169",
        "wy": "gkk+/9hsB2E=",
        "jz": "mvmW7bXEYrQ=",
        "rid": rid,
        "sg": sg.encrypt(zx3),
        "cp": "GThsaevbQos=",
        "dq": "Zs1wbSzhjeY=",
        "act.os": "web_pc",
        "captchaUuid": captchaUuid,
        "ostype": "web",
        "sdkver": "1.1.3",
        "dn": "uWvGbfvj3jU=",
        "rversion": "1.0.4",
        "ws": "cqyNf5Ax/1w=",
        "pp": "TUEu8tSCGBg=",
        "oi": "13iQnFToWVI=",
        "organization": "dLmNYoSLfTcetGyhtYyP",
        "bb": bb.encrypt(zx3),
        "wx": "EV3QVqPr880=",
        "qm": "vSI4rj9MfkA="
    }
    res = http.get("https://captcha.fengkongcloud.cn/ca/v2/fverify", params=data, headers={"user-agent": get_ua()}).text[17:-1]
    res = json.loads(res)
    http.close()
    print(rid, res["riskLevel"])


if __name__ == '__main__':
    DET = DdddOcr(det=True, show_ad=False)
    OCR = DdddOcr(beta=True, show_ad=False)
    sg = newDES("c762fb99")
    bb = newDES("a999da37")
    res = get_yz()
    print(res)
