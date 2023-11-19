import base64
import hashlib
import hmac
import random
import time
import uuid
from datetime import datetime

import requests


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest()


def randStr(num=16):
    ranstr = '0123456789abcde'
    returnStr = ''.join(random.choice(ranstr) for _ in range(num))
    return returnStr


def toData(msg):
    a_list = msg.split("&")
    data = {}
    for i in a_list:
        c = i.split("=")
        data[c[0]] = c[1]
    return data


def hmac_sha256(key, msg):
    hmac_code = hmac.new(key.encode(), msg.encode(), hashlib.sha256)
    return base64.b64encode(hmac_code.digest()).decode()


def postData(url, data):
    tt = str(int(time.time()*1000))
    datet = datetime.utcnow().strftime('%a, %d %b %Y %H:%M:%S GMT')
    nonce = str(uuid.uuid4())
    url_after = url.replace("https://apifast.qiyou.cn", "")
    msg = f'''POST
    application/json; charset=utf-8

    application/x-www-form-urlencoded; charset=utf-8
    {datet}
    x-ca-key:25825871
    x-ca-nonce:{nonce}
    x-ca-timestamp:{tt}
    {url_after}?{data}'''.replace("    ", "")
    sign = hmac_sha256("5c0f74c173370422fbe7254977bf2081", msg)
    # print(sign)

    devid = randStr(16)
    rands = randStr(8)
    date_tom = datetime.now().strftime("%Y%m%d%H%M%S")
    trace_id = f"{date_tom}-{md5(devid)}-{rands}-{random.randint(9000,9999)}-0000-00"

    headers = {
        "date": datet,
        "x-ca-signature": sign,
        "cookie": "session=7f2eb632-af90-4a03-ba23-a12fe8070a2f",
        "x-ca-nonce": nonce,
        "x-ca-key": "25825871",
        "ca_version": "1",
        "accept": "application/json; charset=utf-8",
        "trace-id": trace_id,
        "x-ca-timestamp": tt,
        "x-ca-signature-headers": "x-ca-nonce,x-ca-timestamp,x-ca-key",
        "user-agent": f"Mi 12/android/12/QEEYOU/accelerator/3.1.3/{devid}",
        "content-type": "application/x-www-form-urlencoded; charset=utf-8"
    }
    res = requests.post(url, data=toData(data), headers=headers).json()
    print(res)


def exchange_cdk(token, cdk_key):
    tt = str(int(time.time()*1000))
    nonce = str(uuid.uuid4())
    devid = randStr(16)
    msg = f'''POST
    application/json; charset=utf-8

    application/x-www-form-urlencoded; charset=UTF-8

    login-credential:{token}
    x-ca-key:203709035
    x-ca-nonce:{nonce}
    x-ca-stage:RELEASE
    x-ca-timestamp:{tt}
    /api/common_bll/v1/members/cdk/exchange?cdk_key={cdk_key}'''.replace("    ", "")
    sign = hmac_sha256("75vlseo89af3ip6cc8vvlxee9pcxg6a3", msg)
    # print(sign)

    headers = {
        "accept": "application/json; charset=utf-8",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        "user-agent": f"Mi 12/android/12/QEEYOU/accelerator/3.1.3/{devid}",
        "login-credential": token,
        "x-ca-key": "203709035",
        "x-ca-nonce": nonce,
        "x-ca-signature": sign,
        "x-ca-signature-headers": "login-credential,x-ca-key,x-ca-nonce,x-ca-stage,x-ca-timestamp",
        "x-ca-stage": "RELEASE",
        "x-ca-timestamp": tt
    }
    res = requests.post("https://api.qiyou.cn/api/common_bll/v1/members/cdk/exchange", data={"cdk_key": cdk_key}, headers=headers).json()
    print(res)


# postData("https://apifast.qiyou.cn/api/common_bll/v1/sms_captcha", "mobile=18888888888")
# postData("https://apifast.qiyou.cn/api/common_bll/v2/action/captcha_login", "sms_code=333333&access_code=&referral_code=&mobile=18888888888&channel_id=761")
exchange_cdk("token", "QY1618")
