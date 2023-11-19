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


class HuaiKuaiGuiJi:
    @staticmethod
    def get_x_list(dis):
        stride = dis / 80
        x_list = []
        for i in range(79):
            x = random.uniform(i * stride, (i + 1) * stride)
            x_list.append(int(x))
        x_list.append(dis)
        return x_list

    @staticmethod
    def get_x_list_new(dis):
        v = 50  # 初速度
        t = 0.1  # 单位时间为0.02s来统计轨迹，轨迹即0.02内的位移
        tracks = []  # 位移/轨迹列表，列表内的一个元素代表0.02s的位移
        current = 0  # 当前的位移
        mid = dis * 3 / 5  # 到达mid值开始减速
        while current < dis:
            if current < mid:
                a = 50  # 加速度越小，单位时间的位移越小,模拟的轨迹就越多越详细
            else:
                a = -75  # 初速度
            v0 = v
            # 0.02秒时间内的位移
            s = v0 * t + 0.5 * a * (t ** 2)
            # 当前的位置
            current += s
            # 添加到轨迹列表
            tracks.append(round(current))
            # 速度已经达到v,该速度作为下次的初速度
            v = v0 + a * t
        tracks[-1] = dis
        return tracks

    @staticmethod
    def get_y_list(num):
        # 上下浮动值，设置几个比较小的备选值
        # y_option = [0, 1, 2, 3, 4, 5, 6, 7, -7, -6, -5, -4, -3, -2, -1]
        change_point = num // 5
        y_list = []
        # 先不考虑负值
        for i in range(num):
            if i <= change_point:
                y_list.append(random.randint(0, 1))
            elif change_point < i <= change_point*2:
                y_list.append(random.randint(1, 2))
            elif change_point*2 < i <= change_point*3:
                y_list.append(random.randint(2, 3))
            elif change_point*3 < i <= change_point*4:
                y_list.append(random.randint(3, 4))
            elif i > change_point*4:
                y_list.append(random.randint(4, 5))
        return y_list

    @staticmethod
    def get_time_list(num):
        # 开始滑动的时间，设置几个随机值(单位毫米)
        init_times = [87, 75, 91, 103, 116, 121, 137, 140, 154]
        # 预计滑动需要的时间，设置几个随机值(单位毫秒)
        # total_time = [1020, 1234, 1106, 988, 1356, 1407]
        # 随机每步增长的时间大小
        stride_time = [101, 103, 106, 99, 97, 95]
        init_time = random.choice(init_times)
        time_list = [init_time]
        for i in range(num - 1):
            init_time += random.choice(stride_time)
            time_list.append(init_time)
        return time_list

    def get_tracks(self, dis):
        dis = round(dis)  # 据观察，实际缺口的位置与滑动距离相差10
        x_list = self.get_x_list_new(dis)
        y_list = self.get_y_list(len(x_list))
        time_list = self.get_time_list(len(x_list))
        # traces = [[0,random.uniform(-5,0),0]]
        traces = [[0, random.uniform(-5, 5), 0]]
        for x, y, t in zip(x_list, y_list, time_list):
            traces.append([float(x)+random.uniform(-0.1, 0.1), float(y)+random.uniform(-0.1, 0.1), t])
        # print(traces)
        return traces


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
        res = base64.b64decode(decrData)
        msg = self.des.decrypt(res).hex()
        return msg


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


def get_yz():
    http = requests.Session()
    tt = int(time.time()*1000)-1000
    captchaUuid = custom_time(tt/1000)+randStr(18)

    res = json.loads(http.get(f'https://captcha.fengkongcloud.cn/ca/v1/register?sdkver=1.1.3&callback=sm_{tt}&captchaUuid={captchaUuid}'+'&organization=ajY4ydKuNWQLKHpxQSMk&appId=default&lang=zh-cn&model=slide&channel=DEFAULT&data={}&rversion=1.0.4', headers={"user-agent": get_ua()}).text[17:-1])
    # print(res)
    rid, bgparam, fgparam, imghost = res["detail"]["rid"], res["detail"]["bg"], res["detail"]["fg"], res["detail"]["domains"][0]
    bgurl, fgurl = "https://" + imghost + bgparam, "https://" + imghost + fgparam
    # print(bgurl, fgurl)

    bgContent, fgContent = http.get(bgurl).content, http.get(fgurl).content

    x1 = slide.slide_match(fgContent, bgContent)["target"][0]/2
    tracks = huakuaiguiji.get_tracks(x1)
    ru_str = str(x1/312)
    tracks_str = str(tracks).replace(" ", "")

    data = {
        "ostype": "web",
        "oi": "O8O3pJUAULw=",
        "callback": f"sm_{int(time.time()*1000)}",
        "zp": "jBkoDR8Ee5c=",
        "id": "fYBOhvyWKpE=",
        "np": "Q9RGlYE66no=",
        "ug": "MFJ0S5cL4uM=",
        "organization": "ajY4ydKuNWQLKHpxQSMk",
        "pf": "TVOCUpnLT80=",
        "act.os": "web_mobile",
        "da": "eci+LZYfN9s=",
        "gl": "PukYNIBwXHM=",
        "protocol": "171",
        "le": "B/MnfSfbK1M=",
        "captchaUuid": captchaUuid,
        "sdkver": "1.1.3",
        "ru": ru.encrypt(ru_str),
        "rversion": "1.0.4",
        "fa": "sDJWdVcg6HE=",
        "rid": rid,
        "ep": ep.encrypt(tracks_str)
    }
    res = json.loads(http.get("https://captcha.fengkongcloud.cn/ca/v2/fverify", params=data, headers={"user-agent": get_ua()}).text[17:-1])
    # print(res.text)
    http.close()
    print(rid, res["riskLevel"])


if __name__ == '__main__':
    slide = DdddOcr(det=False, ocr=False, show_ad=False)
    huakuaiguiji = HuaiKuaiGuiJi()
    ep = newDES("2838a287")
    ru = newDES("10abe72a")
    get_yz()
