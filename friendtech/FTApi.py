from TwiApi import addTwiInfo
import requests
import time


def custom_time(timestamp: int) -> str:
    time_local = time.localtime(timestamp/1000)
    dt = time.strftime("%m-%d %H:%M:%S", time_local)
    return dt


def getInfo(ad):
    res = requests.get(f"https://prod-api.kosetto.com/users/{ad}").json()
    # print(datetime.now(),res)
    if "message" in res:
        return {}
    del res["twitterPfpUrl"]
    res["displayPrice"] = float(res["displayPrice"])/(10**18)
    res["lastOnline"] = custom_time(int(res["lastOnline"]))
    try:
        info = addTwiInfo(res)
    except:
        return {}
    return info
