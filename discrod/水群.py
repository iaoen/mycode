# -*- coding: utf-8 -*-
import requests
import json
import random
import time
import threading
import os

session = requests.Session()
proxies = {
    'http': 'http://127.0.0.1:7890',
    'https': 'http://127.0.0.1:7890',
}


def get_context(Auth, chid):
    r"""获取聊天室上下文"""
    headr = {
        "Authorization": Auth,
        "Content-Type": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62"
    }
    url = f"https://discord.com/api/v9/channels/{chid}/messages?limit=1"
    res = requests.get(url=url, headers=headr, proxies=proxies)
    result = json.loads(res.content)
    print(result)


def chat(authorization_list, channel_list, chid, msg=None, proxies=proxies):
    r"""发送消息"""
    for authorization in authorization_list:
        header = {
            "Authorization": authorization,
            "Content-Type": "application/json",
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36 Edg/97.0.1072.62"
        }
        for channel_id in channel_list:
            msg = {
                # 随机选取一条内容
                "content": get_context(authorization, chid) if msg is None else msg,
                "nonce": f"82329451214{random.randrange(0, 100000)}232234",
                "tts": False
            }
            url = f'https://discord.com/api/v9/channels/{channel_id}/messages'
            try:
                res = requests.post(url=url, headers=header, data=json.dumps(msg), proxies=proxies).json()
                print(f"{res['timestamp']} => {channel_id} => {res['content']}")
            except Exception as e:
                print('error', e)
        # time.sleep(random.randrange(30, 50))


def main():
    while True:
        try:
            chat(authorization_list, [random.choice(channel_list)], None, msg=random.choice(msg_arr))
            time.sleep(random.randrange(int(time_s[0]), int(time_s[1])))
        except Exception as e:
            print(e)


if __name__ == '__main__':
    authorization_list = [""]
    channel_list = [""]

    time_s = input("输入聊天间隔 如10,20 10到20s中随机时间发言  \n").split(',')
    msg_arr = open("./discrod/内容.txt").read().split("\n")
    main()
