import random
import time
import requests
import httpx
from eth_account.messages import encode_defunct
from web3 import HTTPProvider, Web3
from uuid import uuid4

w3 = Web3(HTTPProvider("https://arb1.arbitrum.io/rpc"))


def randStr(code_len=16):
    a = 'abcdef0123456789'
    b = random.choices(a, k=code_len)
    c = "".join(_ for _ in b)
    return c


def getHeaders(token=""):
    headers = {
        "user-agent": "Chatfi android 1.0.1.9",
        "authorization": "Bearer "+token,
        "x-instance-id": randStr(32)
    }
    return headers


def custom_time(timestamp):
    time_local = time.localtime(timestamp)
    dt = time.strftime("%Y-%m-%d %H:%M:%S %z", time_local)
    return dt


def ethcall(data, fromadd, toadd, id):
    x = {"id": id, "jsonrpc": "2.0", "method": "eth_call", "params": [{"data": data, "from": fromadd, "to": toadd}, "latest"]}
    print(http.post("https://arb1.arbitrum.io/rpc", json=x).json())


def ethcall_all(account):
    ethcall("0x06fdde03", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 0)
    ethcall("0x06fdde03", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 1)
    ethcall("0x95d89b41", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 2)
    ethcall("0x95d89b41", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 3)
    ethcall("0x313ce567", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 4)
    ethcall("0x313ce567", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 5)

    ethcall("0x06fdde03", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 6)
    ethcall("0x06fdde03", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 7)
    ethcall("0x95d89b41", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 8)
    ethcall("0x95d89b41", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 9)
    ethcall("0x313ce567", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 10)
    ethcall("0x313ce567", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 11)

    ethcall("0x06fdde03", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 12)
    ethcall("0x06fdde03", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 13)
    ethcall("0x95d89b41", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 14)
    ethcall("0x95d89b41", account, "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8", 15)
    ethcall("0x313ce567", account, "0x6c567C9d4522A35cc8a5e5cA29A6BFdb2beA8628", 16)


def verifyCustomToken(token):
    '''return newToken,err => None'''
    request_ref = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyDupsMLomorwit8o1dTLd7-vSyqoNHqgBY"
    headers = {"content-type": "application/json; charset=UTF-8"}
    data = {"returnSecureToken": True, "token": token}
    try:
        request_object = http.post(request_ref, headers=headers, json=data).json()
        return request_object["idToken"]
    except:
        return None


def createAccount():
    account = w3.eth.account.create()
    return account.address, account._private_key.hex()


def signData(account, key):
    dateTime = custom_time(int(time.time())+60)
    aa = f'By signing this message, you allow us to use your wallet to authorize the login.\nSignature expiry: <{dateTime}>'
    message = encode_defunct(text=aa)
    sign = w3.to_hex(w3.eth.account.sign_message(message, private_key=key)["signature"])
    data = {"expiry": dateTime, "signature": sign, "wallet": account}
    return data


def signin(publicKey, privateKey):
    data = signData(publicKey, privateKey)
    res = http.post("https://arbitrum.api.chatfi.ai/v1/sign", json=data, headers=getHeaders())
    print(res.status_code, res.json()["new_profile"])
    return res.json()["token"]


def bindInv(token):
    data = {"code": inviteCode}
    res = http.post("https://arbitrum.api.chatfi.ai/v1/bind_referral", json=data, headers=getHeaders(token)).text
    if res == "{}":
        print("bindInv成功")


def sendMes(token, message="hello"):
    data = {"message": message}
    res = http.post(f"https://arbitrum.api.chatfi.ai/v1/conversation/{uuid4()}/completion", json=data, headers=getHeaders(token)).text
    print(res)


def main():
    publicKey, privateKey = createAccount()
    token = signin(publicKey, privateKey)
    token = verifyCustomToken(token)
    if token is None:
        print("verifyCustomToken 失效")
        return
    bindInv(token)
    for _ in range(random.randint(3, 5)):
        sendMes(token)
    sendMes(token, "why so serious")
    # open(f"./chatfi/{inviteCode}.txt", "a").write(f"{publicKey}|{privateKey}|{token}\n")


inviteCode = ""

http = httpx.Client(http2=True, verify=False)
main()
http.close()
