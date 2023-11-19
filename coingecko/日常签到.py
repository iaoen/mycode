import re
import time
import datetime
import httpx


def signin(u, p):
    headers = {
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36"
    }
    response = client.get("https://www.coingecko.com/account/sign_in", headers=headers)
    s = re.findall(r'authenticity_token\" value=\"(.*?)\" />', response.text)[0]
    print(s)
    data = {
        "utf8": "✓",
        "authenticity_token": s,
        "user[email]": u,
        "user[password]": p,
        "user[redirect_to]": "",
        "user[remember_me]": "1",
        "commit": "Log in"
    }
    responsee = client.post("https://www.coingecko.com/account/sign_in?locale=en", data=data, headers=headers)
    if responsee.status_code == 302:
        print('登录成功')
        return responsee.cookies['_session_id'], responsee.cookies['remember_user_token']


def zh(c2, c3):
    try:
        headers = {
            'cookie': 'remember_user_token='+str(c3)+'; _session_id='+str(c2),
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
        response = client.get("https://www.coingecko.com/account/candy?locale=zh", headers=headers)
        s = re.findall(r'authenticity_token\" value=\"(.*?)\" />', response.text)[0]
        data = {
            'authenticity_token': s
        }
        responsee = client.post("https://www.coingecko.com/account/candy/daily_check_in?locale=zh", headers=headers, data=data, allow_redirects=False)
        if responsee.status_code == 302:
            return '领取成功'
    except:
        return "已经签到"


def main():
    accounts = ["账号"]
    print(accounts)
    for account in accounts:
        global client
        client = httpx.Client(http2=True, verify=False)
        msg = signin(account, "密码")
        if msg is None:
            exit(print('登录失败'))
        status = zh(msg[0], msg[1])
        print("coingecko签到", account[:3]+status)
        client.close()


if __name__ == "__main__":
    main()
