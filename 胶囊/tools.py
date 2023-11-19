import base64
import requests
from Crypto.PublicKey import RSA
from Crypto.Cipher import PKCS1_v1_5 as Cipher_PKC


key = """-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAqcKXN9SC3qEpr5NKCPfz
PRUX7nbH9KCQL44TZTxNcP4bsJCDbaP+wlJqr8ZbSXZI6EX6CAwnSVMYD65AKPRf
VP+/cK3Ga7xuhfPTmXmMZVfLODpAfEGfjH1+aY308j8RERmgpPCxOfCzq67Yp9sG
P7Tgf0IOTBPj3aOtbUEKIflMdVXKWOi6LqR+6LOTgcX9ByJVsuSgyNq62As/33h7
pMXYxfSO0rYboloKjgV1pR/yiv6WfYca6MJDtn+kN8JMLtFDK3qgKjiz/f35OQ12
IKnckNWLqGsb8sEx4YzycFG+PNY3GvQKWmzlEb+5l939wd7KvOOxCEf3ogoS4m+X
OwIDAQAB
-----END PUBLIC KEY-----"""

rsa_key = RSA.import_key(key)
cipher_rsa = Cipher_PKC.new(rsa_key)


def encrypt(plaintext: str):
    r"""rsa加密"""
    en_data = cipher_rsa.encrypt(plaintext.encode())
    base64_text = base64.b64encode(en_data)
    return base64_text.decode()


def decrypt(plaintext: str):
    r"""rsa解密"""
    base64_text = base64.b64decode(plaintext)
    en_data = cipher_rsa.decrypt(base64_text, None)
    return en_data.decode()


def notice(title, msg, group=None, level="active"):
    r"""通知"""
    data = {"level": level}
    if group is not None:
        data["group"] = group
    requests.get(f"https://api.day.app/x/{title}/{msg}", params=data)
