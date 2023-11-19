from Crypto.Cipher import AES
from Crypto.Cipher import PKCS1_v1_5 as Cipher_PKC
from Crypto.PublicKey import RSA
from io import BytesIO

import base64
import binascii
import hashlib
import time
import requests

AESKEY = ""

PUBLIC_KEY1 = """-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCvLTRi+qX4uSoxAaj2dOnoK8RW
WLEmRCa963FPaZvvVE6y3xT0xszOvY0DzIJKkuo2uDAjC0XcabY/tIaelw0PF3gx
sYQtaAc4jtokOgIEg/uT8kXGQoMy4hmz5FIiiGqSnA7o8C96YvOhGOpAWyhSWYW8
skXDuM3rV2pCgW31lwIDAQAB
-----END PUBLIC KEY-----"""

PRIVATE_KEY1 = """-----BEGIN PRIVATE KEY-----
MIICeQIBADANBgkqhkiG9w0BAQEFAASCAmMwggJfAgEAAoGBAJpLLhh0GJWEVyJt
SHb4lA5FRdJYM/wISNGL53Ad3FGAc7elG8h8O9MrtfECe8NinSEZaVeqCnhIAV09
BRI/3QnGKTu4Cx+mxAnzr8XtyHPjt8jY5UAhu/zlwIpNKM7e0uNPEsbInTaD7bFX
k1TC9FWjFR9PHOie9PRZUmFRhAHhAgMBAAECgYEAlobb/K1ewpeu7n5RYQgYYWfB
u3mjlbF7YTutWds38ydvPW3OEiTptJYDVZLHrZGKnB0PgZ/5wOj2s8DxLqGxgOsF
AwKvbG90tz9Tbsr3Sr8MbIqohmmzJ4EEsEeW2ostXfACKH01IWAT5c2YRuld+YqM
IJLfn5HZQqPpmkyZUZUCQQDsNnaQNjovcojp6S46ruwY1vm5yxexq68w04RUXcPw
cM3o/zqv7SmNX+PHF1bDYgQ48+6LpZGzGyhEoQCQy8EDAkEApzf6Z7yetoIKgFd8
mnSDXeTqLQDru6v98pHdSWRWSgu0wxl7rMA/jVRJbq7IvkqwGQHSuA3cp7E+Sd9M
XSrSSwJBAOacmY5b0tyl1nN/uymBw3DQ2MgCNqS4N/bUWlo/nN8uUmmKXNKLGUkz
995Us9lW5UZxKFBgGeohtmOiSDoVIt8CQQCAsX5QNERZ5f87AxnsrVsk+jaX6CuE
xjutYkFSaJxYZGX7+TLLozHGDWZufqoUedrJhDOuX0zA6pIrvGVDFt+9AkEAzGi0
flkIrJyCqG0A6s37HDiiyLGvC9SFNhQWQzbPR+eoguQ08WhKGHMIM3ua+DxolfXt
YzY4LW5voFXOTwmpRQ==
-----END PRIVATE KEY-----"""


class AESUtil(object):
    __BLOCK_SIZE_16 = BLOCK_SIZE_16 = AES.block_size

    def __init__(self, key, iv):
        self.key = key.encode("utf8")
        self.iv = iv.encode("utf8")

    def encryt(self, str):
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        x = AESUtil.__BLOCK_SIZE_16 - (len(str) % AESUtil.__BLOCK_SIZE_16)
        if x != 0:
            str = str + chr(x)*x
        msg = cipher.encrypt(str.encode("utf8"))
        # msg = base64.b64encode(msg).decode("utf8")
        msg = binascii.b2a_hex(msg).upper().decode("utf8")
        return msg

    def decrypt(self, enStr):
        cipher = AES.new(self.key, AES.MODE_CBC, self.iv)
        decryptByts = base64.b64decode(enStr)
        # decryptByts = binascii.a2b_hex(enStr)
        msg = cipher.decrypt(decryptByts).decode("utf8")
        paddingLen = ord(msg[len(msg)-1])
        return msg[0:-paddingLen]


class RSAUtil(object):
    def __init__(self, PUBLIC_KEY):
        self.rsa_key = RSA.import_key(PUBLIC_KEY)
        self.cipher_rsa = Cipher_PKC.new(self.rsa_key)
        self._decrypt_length = 1024 // 8
        self._encrypt_length = 1024 // 8 - 11

    def encrypt(self, text: str) -> str:
        ret = BytesIO()
        text_bytes = BytesIO(text.encode("utf-8"))
        encrypt_segment = text_bytes.read(self._encrypt_length)
        while encrypt_segment:
            ret.write(self.cipher_rsa.encrypt(encrypt_segment))
            encrypt_segment = text_bytes.read(self._encrypt_length)
        return base64.b64encode(ret.getvalue()).decode('utf-8')

    def decrypt(self, text: str, isfd=True) -> str:
        if isfd:
            ret = BytesIO()
            text_bytes = base64.b64decode(text.encode("utf-8"))
            text_byte_fragments = self._text_bytes_split(text_bytes, self._decrypt_length)
            for fragment in text_byte_fragments:
                ret.write(self.cipher_rsa.decrypt(fragment))
            return ret.getvalue().decode()
        else:
            base64_text = base64.b64decode(text)
            en_data = self.cipher_rsa.decrypt(base64_text, None)
            return en_data.decode()

    def _text_bytes_split(self, text_bytes: bytes, per_size: int) -> list:
        max_legth = len(text_bytes)
        ret = list()
        current_index = 0
        while current_index < max_legth:
            ret.append(text_bytes[current_index: current_index + per_size])
            current_index += per_size
        return ret


def md5(str):
    return hashlib.md5(bytes(str, encoding="utf8")).hexdigest()


def ec(func):
    def warp(*args):
        try:
            return func(*args)
        except BaseException as e:
            print(*args, e)
            time.sleep(1)
            return warp(*args)
    return warp


def notice(title, msg, group=None, level="active"):
    data = {"level": level}
    if group is not None:
        data["group"] = group
    requests.post("https://api.day.app/x", json={"title": title, "body": msg})


def getAESkey():
    res = requests.get("https://api.majihuyu.com/api/sale/homeAdvertise?type=1&whetherStatus=true")
    secretKey = res.headers["secretKey"]
    secretKey = rsa_util2.decrypt(secretKey, isfd=False)
    print("更新AESKEY:", secretKey)
    return secretKey


# 用于请求加密
rsa_util = RSAUtil(PUBLIC_KEY1)
# 专用于获取aeskey解密
rsa_util2 = RSAUtil(PRIVATE_KEY1)
# 更新aeskey,该key由服务端动态生成,建议5分钟更新一次key
AESKEY = getAESkey()
# 用于响应解密
aes_util = AESUtil(AESKEY, AESKEY)
