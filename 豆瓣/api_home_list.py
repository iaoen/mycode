from hashlib import sha1
import base64
import hmac
import random
import time
import uuid
import requests


def randhex(length):
    characters = "abcdef1234567890"
    random_string = ''.join(random.choices(characters, k=length))
    return random_string


def hash_hmac(key, code):
    hmac_code = hmac.new(key.encode(), code.encode(), sha1)
    return base64.b64encode(hmac_code.digest()).decode()


def getHomeList(token):
    tt = str(int(time.time()))
    sign = hash_hmac('bf7dddc7c9cfe6f7', f'GET&%2Fapi%2Fv2%2Felendil%2Frecommend_feed&{token}&{tt}')
    data = {
        "start": "0",
        "count": "20",
        "ad_ids": "250995",
        "screen_width": "1440",
        "boot_mark": "",
        "screen_height": "3080",
        "wx_api_ver": "671099959",
        "opensdk_ver": "638058496",
        "webview_ua": "Mozilla%2F5.0%20%28Linux%3B%20Android%2014%3B%2023117RK66C%20Build%2FUKQ1.230804.001%3B%20wv%29%20AppleWebKit%2F537.36%20%28KHTML%2C%20like%20Gecko%29%20Version%2F4.0%20Chrome%2F117.0.0.0%20Mobile%20Safari%2F537.36",
        "sugar": "46011",
        "update_mark": "1709367521.782845443",
        "miui_ver": "V816.0.8.0.UNMCNXM",
        "network": "wifi",
        "enable_sdk_bidding": "1",
        "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
        "channel": "Xiaomi_Market",
        "udid": "f5ac45da699eb1c75e67daba3686278b4ca0b194",
        "os_rom": "miui6",
        "oaid": "36sFKJVW%2B5vUy25XV08KuwBFn8qZlfyUaaALVyDOP8A%3D%0A",
        "timezone": "Asia%2FShanghai",
        "_sig": sign,
        "_ts": tt
    }

    headers = {
        "User-Agent": "api-client/1 com.douban.frodo/7.70.1(284) Android/34 product/manet vendor/Xiaomi model/23117RK66C brand/Redmi  rom/miui6  network/wifi  udid/f5ac45da699eb1c75e67daba3686278b4ca0b194  platform/mobile nd/1",
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Bearer " + token
    }
    res = requests.get("https://frodo.douban.com/api/v2/elendil/recommend_feed", params=data, headers=headers)
    print(res.status_code)
    print(res.json())


getHomeList("你的token")
