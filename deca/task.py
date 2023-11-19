import hashlib
import random
import time
import json

import requests as http


def randStr(length, text=None):
    return "".join(
        random.sample(
            "abcdefghijklmnopqrstuvwxyz123456789" if text is None else text, length
        )
    )


def getHeaders(ck):
    headers = {
        "cookie": f"__Secure-next-auth.session-token={ck}",
        "user-agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1"
    }
    return headers


def getIp():
    orderno = ""
    secret = ""
    ip = ""
    port = ""
    timestamp = str(int(time.time()))
    txt = (
        "orderno=" + orderno + "," + "secret=" + secret + "," + "timestamp=" + timestamp
    )
    auth = f"sign={hashlib.md5(txt.encode()).hexdigest().upper()}&orderno={orderno}&timestamp={timestamp}&change=true"
    return {
        "http": "http://" + ip + ":" + port,
        "https": "http://" + ip + ":" + port,
    }, {"Proxy-Authorization": auth}


def favorites(hlid, small_ck):
    data = {"json": {"deviceId": deviceId, "recaptchaToken": None}, "meta": {"values": {"recaptchaToken": ["undefined"]}}}
    headers = getHeaders(small_ck)
    res = http.post(f"https://deca.art/api/web/gallery/{hlid}/view", json=data, headers=headers, timeout=6).text
    print(f"invite ->> {hlid} ->>", res)


def getDXP(ck):
    headers = getHeaders(ck)
    res = http.get("https://deca.art/api/web/user/experience", headers=headers).json()
    print("dxp ->>", res["json"]["status"]["availableExperience"])
    # if len(res["json"]["status"]["activeQuests"]) == 0:
    #     print("没有任务")
    return res["json"]["status"]


def getName(ck):
    headers = getHeaders(ck)
    data = {
        "query": "\n    query User {\n  me {\n    id\n    slug\n    referralCode\n    includePublic\n    showListings\n    following\n    acceptedTerms\n    validBadges\n    ownedDecagons {\n      ...FullBareAsset\n    }\n    octagonLevel\n    addresses\n    username\n    pfp {\n      ...FullBareAsset\n    }\n    discordId\n    twitterId\n  }\n}\n    \n    fragment FullBareAsset on BareAsset {\n  id\n  provider\n  contract\n  tokenId\n  mediaUrl\n  previewStorageKey\n  previewMimeType\n  previewAspectRatio\n  storageKey\n  mimeType\n  tokenUrl\n  name\n  multimediaUrl\n  aspectRatio\n  metadata\n}\n    "
    }
    res = http.post("https://deca.art/api/graphql", json=data, headers=headers).json()
    name = res["data"]["me"]["username"]
    meid = res["data"]["me"]["id"]
    return name, meid


def getGalleryList(num=30, cursor=None):
    gallList = []
    cursor = "" if cursor is None else cursor
    while len(gallList) <= num:
        res = http.get("https://deca.art/api/web/gallery?mode=global&cursor=" + cursor).json()["json"]
        cursor = res["nextCursor"]
        for x in res["galleries"]:
            if x not in gallList and len(gallList) <= num:
                # print(x)
                gallList.append(x)
    return gallList


def claim(id, ck, title):
    headers = getHeaders(ck)
    res = http.post(f"https://deca.art/api/web/quest/{id}/claim", headers=headers)
    print(title, "->>", res.text)


def follow(id, ck):
    url = f"https://deca.art/api/web/user/{id}/followers"
    data = {"json": {"deviceId": deviceId, "recaptchaToken": None}, "meta": {"values": {"recaptchaToken": ["undefined"]}}}
    headers = getHeaders(ck)
    res = http.post(url=url, headers=headers, json=data)
    print("follow ->>", res.text)
    time.sleep(0.5)
    res = http.delete(url=url, headers=headers, json=data)
    print("defollow ->>", res.text)


def like(id, ck):
    url = f"https://deca.art/api/web/gallery/{id}/reactions"
    data = {"json": {"type": "LIKE", "deviceId": deviceId, "recaptchaToken": None}, "meta": {"values": {"recaptchaToken": ["undefined"]}}}
    headers = getHeaders(ck)
    res = http.post(url, headers=headers, json=data)
    print("like ->>", res.text)
    time.sleep(0.5)
    res = http.delete(url, headers=headers, json=data)
    print("delike ->>", res.text)


def task():
    for quest in getDXP(token)["activeQuests"]:
        actions = quest["targetActions"]-quest["currentActions"]
        print("需要的次数", actions)
        claim(quest["id"], token, quest["title"]) if actions == 0 else None
        galleryList = getGalleryList(actions + 1)
        if quest["title"] == "View galleries":  # 浏览别人的gallery
            if actions > 0:
                print("浏览别人的gallery")
                for galle in galleryList:
                    favorites(galle["id"], token)
                    time.sleep(1)
                claim(quest["id"], token, quest["title"])
        elif (quest["title"] == "React to galleries" and True):  # 点赞别人的gallery
            if actions > 0:
                print("点赞别人的gallery")
                for galle in galleryList:
                    like(galle["id"], token)
                    time.sleep(10)
                claim(quest["id"], token, quest["title"])
        elif quest["title"] == "Follow users":  # 关注用户
            if actions > 0:
                print("关注用户")
                for galle in galleryList:
                    follow(galle["user"]["id"], token)
                    time.sleep(1)
                claim(quest["id"], token, quest["title"])


"""
新号.json 格式
{
    "私钥": [
        "decaToken",
        "地址",
        "私钥",
        "设备id"
    ]
}
"""

if __name__ == "__main__":
    zh_json = json.loads(open("./deca/新号.json", "r").read())
    for i in zh_json:
        token = zh_json[i][0]
        deviceId = zh_json[i][-1]
        task()
    time.sleep(60*10)  # 每10分钟检查一次
