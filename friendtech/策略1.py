from datetime import datetime
from config import *
from FTApi import getInfo
from Web3Api import web3, w3

import threading


def getBalance(address):
    balance = web3.fromWei(web3.eth.getBalance(address), "ether")
    return balance


def start(transaction):
    r"""
    主要策略逻辑:1.检测机器人特征
    2.检测新人特征,获取绑定的推特信息,比较粉丝数和关注数
    """
    txn_info = web3.eth.getTransaction(transaction)
    txBlance = float(txn_info["value"])/(10**18)
    # nonce = int(txn_info["nonce"])
    data = txn_info["input"]
    if txBlance == float(0) and data[:10] == "0x6945b123" and data[-5:] == "00001":
        open("./web3/friendtech/监控的信息.txt", "a").write(f'{txn_info["from"]}|{txn_info["to"].lower()}|{txBlance}e\n')
        info = getInfo(txn_info["from"])
        if info == {}:
            return
        followers_count = info["followers_count"]
        friends_count = info["friends_count"]
        # twitterUsername = info["twitterUsername"]
        currBalance = getBalance(txn_info["from"])
        if len(str(currBalance)) >= 6:
            print(datetime.now(), "为机器人,跳过", txn_info["from"], currBalance)
            return
        if friends_count >= 5 and followers_count >= 5:
            print(datetime.now(), "有新人入场,且符合要求", txn_info["from"], currBalance)
            w3.buyShares(txn_info["from"], 1, gasLimit=1000000, gasPrice=2)

# print(txn_info["blockNumber"], txn_info["nonce"], txn_info["from"].lower(), txn_info["to"].lower(), txBlance)
# {'id': 224406, 'address': '0xa639c4cbd310547e4df6656755e6794f5b9a0f35', 'twitterUsername': 'vaine51281', 'twitterName': 'Vaine Catherine', 'twitterUserId': '1678190442473717760', 'lastOnline': '09-20 23:02:51', 'lastMessageTime': 0, 'holderCount': 2, 'holdingCount': 0, 'watchlistCount': 0, 'shareSupply': 2, 'displayPrice': 0.00025, 'lifetimeFeesCollectedInWei': '0', 'friends_count': 3, 'followers_count': 0, 'statuses_count': 1, 'favourites_count': 0, 'media_count': 0}


def main(bl):
    # 获取交易hash列表
    transactions = web3.eth.getBlock(bl).transactions
    transactions.pop(0)
    for transaction in transactions:
        threading.Thread(target=start, args=(transaction,)).start()


if __name__ == "__main__":
    # 获取最新区块数
    newBlock = None
    while True:
        blockNumber = web3.eth.blockNumber
        if newBlock != blockNumber:
            print(datetime.now(), blockNumber)
            newBlock = blockNumber
            threading.Thread(target=main, args=(blockNumber,)).start()
