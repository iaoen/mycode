from config import *
from web3 import Web3, HTTPProvider
from datetime import datetime


class Web3Api():
    def __init__(self):
        self.rpc = 'https://base-mainnet.blastapi.io/fe9c30fc-3bc5-4064-91e2-6ab5887f8f4d'
        self.web3 = Web3(HTTPProvider(self.rpc))
        self.contractAdd = "0xCF205808Ed36593aa40a44F10c7f7C2F67d4A4d4"
        self.CAKE_BSC_ABI = [{"anonymous": False, "inputs": [{"indexed": True, "internalType": "address", "name": "previousOwner", "type": "address"}, {"indexed": True, "internalType": "address", "name": "newOwner", "type": "address"}], "name": "OwnershipTransferred", "type": "event"}, {"anonymous": False, "inputs": [{"indexed": False, "internalType": "address", "name": "trader", "type": "address"}, {"indexed": False, "internalType": "address", "name": "subject", "type": "address"}, {"indexed": False, "internalType": "bool", "name": "isBuy", "type": "bool"}, {"indexed": False, "internalType": "uint256", "name": "shareAmount", "type": "uint256"}, {"indexed": False, "internalType": "uint256", "name": "ethAmount", "type": "uint256"}, {"indexed": False, "internalType": "uint256", "name": "protocolEthAmount", "type": "uint256"}, {"indexed": False, "internalType": "uint256", "name": "subjectEthAmount", "type": "uint256"}, {"indexed": False, "internalType": "uint256", "name": "supply", "type": "uint256"}], "name": "Trade", "type": "event"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "buyShares", "outputs": [], "stateMutability": "payable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getBuyPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getBuyPriceAfterFee", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "supply", "type": "uint256"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "pure", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getSellPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "getSellPriceAfterFee", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "protocolFeeDestination", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "protocolFeePercent", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "sharesSubject", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "sellShares", "outputs": [], "stateMutability": "payable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "_feeDestination", "type": "address"}], "name": "setFeeDestination", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "_feePercent", "type": "uint256"}], "name": "setProtocolFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "uint256", "name": "_feePercent", "type": "uint256"}], "name": "setSubjectFeePercent", "outputs": [], "stateMutability": "nonpayable", "type": "function"}, {"inputs": [{"internalType": "address", "name": "", "type": "address"}, {"internalType": "address", "name": "", "type": "address"}], "name": "sharesBalance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "", "type": "address"}], "name": "sharesSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [], "name": "subjectFeePercent", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"}, {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"}]
        self.CAKE_BSC_ADDRESS = Web3.toChecksumAddress(self.contractAdd)
        self.token_contract = self.web3.eth.contract(address=self.CAKE_BSC_ADDRESS, abi=self.CAKE_BSC_ABI)

    def getBalance(self, address):
        balance = self.web3.fromWei(self.web3.eth.getBalance(address), "ether")
        print(balance)
        return balance

    def getContractBalance(self, address):
        balance = self.web3.fromWei(self.token_contract.functions.balanceOf(address).call(), "ether")
        print(balance)
        return balance

    def transfer(self, private_key, address, to_address, amount, gas_price=5, gas_limit=21000):
        nonce = self.web3.eth.getTransactionCount(address)
        params = {
            'nonce': nonce,
            'to': to_address,
            'value': self.web3.toWei(amount, 'ether'),
            'gas': gas_limit,
            'gasPrice': self.web3.toWei(gas_price, 'gwei'),
            'from': address,
        }
        signed_tx = self.web3.eth.account.signTransaction(params, private_key=private_key)
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction).hex()
        print(tx_hash)
        return tx_hash

    def transferContract(self, private_key, address, to_address, amount, gas_price=5, gas_limit=500000):
        params = {
            "from": address,
            "value": 0,
            'gasPrice': self.web3.toWei(gas_price, 'gwei'),
            "gas": gas_limit,
            "nonce": self.web3.eth.getTransactionCount(address),
        }
        func = self.token_contract.functions.transfer(to_address, self.web3.toWei(amount, "ether"))
        tx = func.buildTransaction(params)
        signed_tx = self.web3.eth.account.sign_transaction(tx, private_key=private_key)
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction).hex()
        print(amount, tx_hash)
        return tx_hash

    def getTransaction(self, tx_hash):
        txn_info = self.web3.eth.getTransaction(tx_hash)
        print(txn_info)
        return txn_info

    def buyShares(self, buyAddress: str, amount: int, gasLimit=99900, gasPrice=0.11):
        buyAddress = Web3.toChecksumAddress(buyAddress)
        value = self.getBuyPrice(buyAddress, amount)
        print(datetime.now(), "购买", buyAddress, Web3.fromWei(value, "ether"))
        if Web3.fromWei(value, "ether") >= 0.0001:
            print(datetime.now(), "购买", buyAddress, "金额大于0.0001,非初始key,跳过")
            return
        params = {
            "from": MyAddress,
            "value": value,
            'gasPrice': Web3.toWei(gasPrice, 'gwei'),
            "gas": gasLimit,
            "nonce": self.web3.eth.getTransactionCount(MyAddress),
        }
        tx = self.token_contract.functions.buyShares(buyAddress, amount).buildTransaction(params)
        signed_tx = self.web3.eth.account.sign_transaction(tx, PrivateKey)
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction).hex()
        print(datetime.now(), "购买hash:", tx_hash)

    def sellShares(self, sellAddress: str, amount: int, gasLimit=99900, gasPrice=0.11):
        sellAddress = Web3.toChecksumAddress(sellAddress)
        value = self.getSellPrice(sellAddress, amount)
        print(datetime.now(), "出售", sellAddress, Web3.fromWei(value, "ether"))
        params = {
            "from": MyAddress,
            "value": value,
            'gasPrice': Web3.toWei(gasPrice, 'gwei'),
            "gas": gasLimit,
            "nonce": self.web3.eth.getTransactionCount(MyAddress),
        }
        tx = self.token_contract.functions.sellShares(sellAddress, amount).buildTransaction(params)
        signed_tx = self.web3.eth.account.sign_transaction(tx, PrivateKey)
        tx_hash = self.web3.eth.sendRawTransaction(signed_tx.rawTransaction).hex()
        print(datetime.now(), "出售hash:", tx_hash)

    def getBuyPrice(self, address, amount):
        address = Web3.toChecksumAddress(address)
        return w3.token_contract.functions.getBuyPriceAfterFee(address, amount).call()

    def getSellPrice(self, address, amount):
        address = Web3.toChecksumAddress(address)
        return w3.token_contract.functions.getSellPriceAfterFee(address, amount).call()


web3 = Web3(Web3.HTTPProvider("https://base.publicnode.com"))
w3 = Web3Api()
