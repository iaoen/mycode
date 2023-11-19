```python
# app(signature)逆向-难度低
tt = str(int(time.time() * 1000))#获取时间戳13位
sign = sha1(f'{tt}500000hHacFKN5DxR5sPwyc1ns52M168rdoe3AGrWaseN3zYd2XoKaxYhYQTqDXvCtMkwz')#sha1加密
headers = {
    "time": tt,
    "nonce": "500000",#可固定
    "signature": sign
}
```