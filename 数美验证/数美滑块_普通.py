import base64
import json
import random
import time

import requests
from Crypto.Cipher import DES
from flask import Flask, request

app = Flask(__name__)


class HuaiKuaiGuiJi:
    def get_x_list_new(self, dis):
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

    def get_y_list(self, num):
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

    def get_time_list(self, num):
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
        x_list = self.get_x_list_new(dis)
        y_list = self.get_y_list(len(x_list))
        time_list = self.get_time_list(len(x_list))
        traces = [[0, random.uniform(-5, 5), 0]]
        for x, y, t in zip(x_list, y_list, time_list):
            if x != 270.4:
                x = float(x)+random.uniform(-0.1, 0.1)
            traces.append([x, float(y)+random.uniform(-0.1, 0.1), t])
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


def main(auth):
    http = requests.Session()
    tt = int(time.time()*1000)-1000
    captchaUuid = custom_time(tt/1000)+randStr(18)

    res = json.loads(http.get(f'https://captcha.fengkongcloud.cn/ca/v1/register?sdkver=1.1.3&callback=sm_{tt}&captchaUuid={captchaUuid}'+'&organization='+auth+'&appId=default&lang=zh-cn&model=auto_slide&channel=DEFAULT&data={}&rversion=1.0.4', headers={"user-agent": get_ua()}).text[17:-1])
    # print(res)
    rid = res["detail"]["rid"]

    tracks = huakuaiguiji.get_tracks(270.4)
    tracks_str = str(tracks).replace(" ", "")

    data = {
        "np": "Q9RGlYE66no=",
        "rversion": "1.0.4",
        "ep": des_ep.encrypt(tracks_str),
        "ostype": "web",
        "fa": "sDJWdVcg6HE=",
        "gl": "PukYNIBwXHM=",
        "zp": "jBkoDR8Ee5c=",
        "act.os": "web_mobile",
        "id": "fYBOhvyWKpE=",
        "ru": "BmzCXLz66yo=",
        "callback": f"sm_{int(time.time()*1000)}",
        "organization": auth,
        "sdkver": "1.1.3",
        "da": "Z3DH6L7gbhY=",
        "oi": "O8O3pJUAULw=",
        "protocol": "171",
        "rid": rid,
        "le": "B/MnfSfbK1M=",
        "ug": "MFJ0S5cL4uM=",
        "captchaUuid": captchaUuid,
        "pf": "TVOCUpnLT80="
    }
    res = json.loads(http.get("https://captcha.fengkongcloud.cn/ca/v2/fverify", params=data, headers={"user-agent": get_ua()}).text[17:-1])
    # print(res)
    http.close()
    print(rid, res["riskLevel"])

if __name__ == '__main__':
    huakuaiguiji = HuaiKuaiGuiJi()
    des_ep = newDES("2838a287")
    main("dLmNYoSLfTcetGyhtYyP")