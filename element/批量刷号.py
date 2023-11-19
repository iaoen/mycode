import hmac
import random
import time
from hashlib import sha256

import requests
from eth_account.messages import encode_defunct
from web3 import HTTPProvider, Web3

w3 = Web3(HTTPProvider("https://rpc.ankr.com/eth/2bbae0b60f397fef2a82619bdcc86fe033b16e02238ce7eaccdd367a79dca1cd"))

http = requests.Session()


def encrypt(key, data):
    result = hmac.new(key.encode(), data.encode(), sha256).hexdigest()
    return result


def createAccount():
    account = w3.eth.account.create()
    return account.address.lower(), account.privateKey.hex()


def signData(account, key):
    timeT = int(time.time() * 1000)
    text = f'This message signature is for daily check-in only, no transaction fee cost.\n\nWallet address:\n{account}\n\nTimestamp:\n{timeT}'
    message = encode_defunct(text=text)
    sign = w3.toHex(w3.eth.account.sign_message(message, private_key=key)["signature"])
    data = {
        "accountAddress": account,
        "timeStamp": timeT,
        "bindSign": sign
    }
    return data


def signHeaders(account):
    tt = int(time.time())
    rand09 = random.randint(1000, 9999)
    en_msg = encrypt("UqCMpfGn3VyQEdsjLkzJv9tNlgbKFD7O", f"zQbYj7RhC1VHIBdWU63ki5AJKXloamDT{rand09}{tt}")
    headers = {
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1",
        "x-api-key": "zQbYj7RhC1VHIBdWU63ki5AJKXloamDT",
        "x-api-sign": f"{en_msg}.{rand09}.{tt}",
        "x-viewer-addr": account
    }
    return headers


def signin(ak):
    data = signData(ak[0], ak[1])
    headers = signHeaders(ak[0])
    res = http.post("https://api.element.market/mapi/tasks/signin/commit", json=data, headers=headers).json()
    if res["code"] == 0:
        print(ak[0], "签到成功")
    else:
        print(ak[0], "签到失败. 错误信息:", res)


def main():
    ak = createAccount()
    print(ak)
    signin(ak)


if __name__ == "__main__":
    main()
