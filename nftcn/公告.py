# coding=utf-8
import base64
import hashlib
import os
import random
import threading
import time
import pandas as pd
import requests as http
from Crypto.Hash import SHA256
from Crypto.PublicKey import RSA
from Crypto.Signature import pkcs1_15

DIRNAME = os.path.dirname(__file__)


PRIVATE_KEY = """-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCgeDeLV31/6mXa
iBY2aFjwyomZbfcJ7x1cjGY6wenpta9vJ3z1vTbPxDoaz3wFMzwPG6Grl2eYIUjv
4bvr3O6+//e0yOul7owzftx9vXIBS375nejn/XeR0HR0AnRRsuL6UKrmg7V/TmUS
+e3fje7DmVo1AvoHSpO/o+SZemXlBExxYhLwXyDfW3Adv+dmZ7ybjObrnpwTS5qq
1KNhlcDlbu3YpmD5igVR9Bez/jjqriM0MIeO3G0I4NC2lBr+QHsOvCi8f2n24vsR
LsFQAm/+AUJNAyMSB0PUM3wwbTd+grUNlQXZtd1ByhuJZyWjpslfU4z6vy12UQaB
2imDuQ3pAgMBAAECggEAATKEb5S6if7MvcGwML28lCdeuXdZlYhkNrGRfbS+sxC4
+2JXC1pbE1fKezK7ISrNsuso3KfnjPoKmkeb6FmgqmoshfvNzlImV6gFqyaDuEDA
9MnZ2AlLIBpnFAqEpatpCCcb71ZiP03tcSPOQ5HCi1EUnDqmdPF4gsCNTxvbsMbB
aN3PPn6j7X8Tqi70d1dIAfnd/Ds9TtMSb1T7NWt8iG2Zpv4WGMNQgzMH1NRojsG9
eZ08eWdb/JEcN7ONLSie3bIpas25f+Qfb5AXFDMvK46Fx1JD+Ko5grpCOGlMtbEd
FNVlBLwFMIa7u9i/pcbXjRo5GqfrILdfi2/KBuvldQKBgQDNtmr29o6Bk7QRGr9v
n8vurDcTOh+hisFuaoaHDCF/dTgf3jWw4Hpr/GAnTbAnVLMHfmK00F4KjL4OQi5t
NfLGf4o4uXM5fobQTgDwJeMM0mu8P8c+gwwu1c88H+PdDitYfel/BPjMsBzS6M33
q13dXqW60IGGditzq4Cm40YRRwKBgQDHsnloQAbYz5Pqp5XakNGLUEBiCdpP1UxD
ExCTfFqgw2I25Rzg3SondkZxQg6FMltQZmFoqJfVLIKtFs74Rg3SwfYyhEg8ME/0
ey6HMlxx9t6j+VE0K2jtwULFu/peoaT1+r3tX3NJ3qyfwEfGj9k9s1EM3L+ZDor/
1BSvzPz/TwKBgQDNmK+3PByZbOHe5njGO1M6q2wwDztl3KQOkvD5MCqalLEPSKso
qHIyUv5WydJwvLphlvNX+5jBuoCJB6QXCoAl23ptzwtWPxrGPe+6FGOkgPmkH6om
1BrtBEwmr0ixumOgAdfIV1PCX5GvSXXxPpiFkv7Yg2Ow25H5/UKLiUKSKQKBgEuZ
8sKX8r+kHmCo31+mkd4HHMjA6ChvHPcLwavEWV8heQ5FQOCUekAEU/jOxEaC4PUY
PWps4UZwGmzDBMoTY2pVygon8FzxAWQSOnQuibcPegxj9+0jPg88qjXHy6qF0bja
G4tBJplhtsKn/cRbcygbueR/sf2U9uSRet9vYJybAoGAU0bN2ime2mkVEbejeZPV
qEsLp5jhgLtNkVzUm0wF5e3JFosc17mtbHr/cgWBdlphUmhJdGWR/pbLDXcsn8fD
8fE4evlDZ7jPG5G7kKYIOeXrDiikWDPpjvSZaEVLJKXI/h8xKx+o8D9BDcHwRfCj
fs0WrozttFXZ4/zl06+R02o=
-----END PRIVATE KEY-----"""

RSA_KEY = RSA.import_key(PRIVATE_KEY)


def ec(func):
    def warp(*args):
        try:
            return func(*args)
        except BaseException:
            return warp(*args)
    return warp


def md5(msg):
    return hashlib.md5(msg.encode()).hexdigest().upper()


def sha256withrsa(data):
    h = SHA256.new(data.encode())
    signature = pkcs1_15.new(RSA_KEY).sign(h)
    return base64.b64encode(signature).decode()


def rand_name(code_len=8):
    a = '0123456789abcdefghijklmnopqrstuvwxyz'
    b = random.choices(a, k=code_len)
    c = "".join(_ for _ in b)
    return c


def random09(lin):
    returnStr = ''
    for _ in range(lin):
        returnStr += str(random.randint(0, 9))
    return returnStr


def getHeaders(tt, nonce, sign, secr, token=""):
    headers = {
        "Authorization": token,
        "nftcnApiTimestamp": tt,
        "nftcnApiNonce": nonce,
        "nftcnApiSignature": sign,
        "nftcnApiAppId": "nftcn-web-h5",
        "nftcnApiAppSecret": secr,
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }
    return headers


def getList(page):
    nonce = random09(21)
    secr = md5("nftcn-web-h5"+nonce)
    tt = str(int(time.time()*1000))
    sign = sha256withrsa(f"nftcnApiAppId=nftcn-web-h5&nftcnApiAppSecret={secr}&nftcnApiNonce={nonce}&nftcnApiTimestamp={tt}&pageNum={page}&pageSize=10")
    headers = getHeaders(tt, nonce, sign, secr, "")
    data = {
        "pageNum": page,
        "pageSize": "10"
    }
    res = http.post("https://api-pro.nftcn.com.cn/nms/dubbo/hongyan/appApi/article/list", headers=headers, json=data).json()
    for i in res["result"]["list"]:
        print(i["id"], i["title"])
        id_list.append(i["id"])
        title_list.append(i["title"])
        subTitle_list.append(i["subTitle"].replace("\n", " "))
        createdAt_list.append(i["createdAt"])


id_list = []
title_list = []
subTitle_list = []
createdAt_list = []
# 获取公告
for i in range(1, 10):
    getList(i)
dataframe = pd.DataFrame({'公告ID': id_list, '发布时间': createdAt_list, '标题': title_list, '内容': subTitle_list})
dataframe.to_csv("./nftcn/公告.csv")
