import requests


def getBiliAuthCode(biliCookie):
    http = requests.Session()
    res = http.get("https://passport.bilibili.com/qrcode/getLoginUrl").json()
    oauthKey = res["data"]["oauthKey"]
    print("oauthKey", oauthKey)

    data = {"oauthKey": oauthKey}
    headers = {
        "user-agent": "Mozilla/5.0 (Linux; Android 12; Mi 10 Pro Build/SKQ1.220303.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/103.0.5060.129 Mobile Safari/537.36 os/android model/Mi 10 Pro build/7050300 osVer/12 sdkInt/31 network/2 BiliApp/7050300 mobi_app/android channel/yingyongbao Buvid/XX67AB56A7DF1FDAE70B708576BA4DE0DA1C7 sessionID/e39309ee innerVer/7050300 c_locale/zh_CN s_locale/zh_CN disable_rcmd/0",
        "origin": "https://passport.bilibili.com",
        "cookie": biliCookie

    }
    res = http.post("https://passport.bilibili.com/qrcode/login/confirm", data=data, headers=headers).json()
    print("san", res)

    data = {
        "oauthKey": oauthKey,
        "source": "oauth2"
    }
    res = http.post("https://passport.bilibili.com/qrcode/authorize/poll", data=data).json()
    tmp_token = res["data"]["tmp_token"]
    print("tmp_token", tmp_token)

    data = {
        "client_id": "0c95e37758534eb7",
        "scopes": "NFT_BASE,USER_INFO",
        "tmp_token": tmp_token,
        "state": "1",
        "session_id": "1671337800386buvid3=7B16224C-D4D0-C772-02FF-122E2149AC7D32539infoc; _uuid=B108DF9E9-2D3C-10285-E7A10-B3D4C87717DB33273infoc; buvid4=146FC998-7EEB-E06B-6872-66203443BD9903715-022031816-CYYvSephsrOgonUdtOFiLA%3D%3D; buvid_fp_plain=undefined; b_nut=100; nostalgia_conf=-1; fingerprint=eb9a9e23e188a06e5b213dda66422546; i-wanna-go-back=-1; DedeUserID=247004494; DedeUserID__ckMd5=0496578841d424ca; LIVE_BUVID=AUTO6316635027273791; b_ut=5; CURRENT_QUALITY=80; buvid_fp=eb9a9e23e188a06e5b213dda66422546; CURRENT_FNVAL=4048; PVID=1; rpdid=|(J|Y|lY)~mm0J'uY~ | JmYm |); bili_jct=16060c9b0402344494628e2a84f10f59; sid=7eyt43oi; b_lsid=10DE9159C_185236F4562; bsource_origin=login_download_bili; bsource=login_download_bili10",
        "return_url": "https://www.imdodo.com/thirdLogin/biliLogin",
        "csrf": "16060c9b0402344494628e2a84f10f59"
    }
    res = http.post("https://api.bilibili.com/x/account-oauth2/v1/authorize", data=data).json()
    code = res["data"]["code"]
    print("code", code)
    http.close()
    return code


getBiliAuthCode("")
