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


username = "你的账号"
password = "你的密码"

# bf7dddc7c9cfe6f7
# POST&%2Fservice%2Fauth2%2Ftoken&1709367546
# HmacSHA1
udid = randhex(40)
tt = str(int(time.time()))
sign = hash_hmac('bf7dddc7c9cfe6f7', f'POST&%2Fservice%2Fauth2%2Ftoken&{tt}')
data = {
    "client_id": "0dad551ec0f84ed02907ff5c42e8ec70",
    "apikey": "0dad551ec0f84ed02907ff5c42e8ec70",
    "client_secret": "bf7dddc7c9cfe6f7",
    "redirect_uri": "frodo%3A%2F%2Fapp%2Foauth%2Fcallback%2F",
    "disable_account_create": "false",
    "grant_type": "password",
    "username": username,
    "password": password,
    "channel": "Xiaomi_Market",
    "udid": "f5ac45da699eb1c75e67daba3686278b4ca0b194",
    "os_rom": "miui6",
    "_sig": sign,
    "_ts": tt
}
headers = {
    "User-Agent": "api-client/1 com.douban.frodo/7.70.1(284) Android/34 product/manet vendor/Xiaomi model/23117RK66C brand/Redmi  rom/miui6  network/wifi  udid/f5ac45da699eb1c75e67daba3686278b4ca0b194  platform/mobile nd/1",
    "Content-Type": "application/x-www-form-urlencoded"
}
res = requests.post("https://frodo.douban.com/service/auth2/token?timezone=Asia%2FShanghai", data=data, headers=headers)
print(res.status_code)
print(res.headers)
print(res.json())
