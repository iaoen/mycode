import requests as http

url = "http://c.29592.net/api/EarnUser/EarnList"


headers = {
    "Cookie": "",  # 可为空
    "Connection": "keep-alive",
    "Accept": "*/*",
    "User-Agent": "iPhone14,2(iOS/15.2) Uninview(Uninview/1.0.0) Weex/0.26.0 1170x2532"
}


def main(num):
    print(num)
    data = {
        "account": account,
        "password": password,
        "type": "-1",
        "subtype": "1",
        "keywords": "",
        "isios": "1",
        "pindex": num,
        "version": "-50"
    }
    res = http.post(url, json=data, headers=headers).json()
    for i in res:
        groupname = i["groupname"]
        title = i["title"]
        uid = i["uid"]
        print(groupname, title, uid)


account = "账号"
password = "密码"  # 密码需要md5大写处理
for i in range(10):
    main(i)
