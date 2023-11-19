from datetime import datetime
import json
import random
import requests
import time
import threading
import execjs

js = execjs.compile(open("./塞波尔/index.js").read())

http = requests.Session()
http.headers.update({
    "Accept-Encoding": "identity",
    "encrypt": "1",
    "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 10; Mi 10 Pro MIUI/20.6.18)"
})


def notice(title, msg, group=None, level="active"):
    data = {"level": level}
    if group is not None:
        data["group"] = group
    http.get(f"https://api.day.app/x/{title}/{msg}", params=data)


def domain(data):
    tt = str(int(time.time()*1000))
    data = js.call("e.encrypt", '{"_common":{"did":"3JMT6PSL3ODVT6FH1KI5LDSXO9N0CIME","imei":"GNGL5N8UPWX5AGOAGKEORF26EQ5ZGB6E","mac":"NIYOX6MIIBX1KQ813XFXREZAB87DVF7P","net":1,"plat":1,"vos":"11","vapp":"1.0.0","vcode":1,"brand":"xiaomi","factory":"xiaomi","abid":"","uid":"","token":"'+token+'","time":"'+tt+'"},"params":'+data+'}')
    return data


def pkstart():
    data = domain('{"storyId":'+str(step1)+',"stageId":'+str(step2)+',"isForcibly":false}')
    res = http.post("https://sapi.yygamefi.com/api/stage/stage-pk-start", data)
    res = json.loads(js.call("e.decrypt", res.text))
    # {"code":0,"msg":"OK","data":{"pk":{"pkId":"b1ff4353-7b98-43db-966a-93220219ed48","storyId":1,"stageId":7,"roundsLimited":20,"totalMonsterHp":725,"totalRoleHp":178,"status":1,"pkInfo":[{"roundId":1,"type":1,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":115,"criticalDamage":0,"totalDamage":115},"roleHp":178,"monsterHp":610},{"roundId":1,"type":2,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":39,"criticalDamage":0,"totalDamage":39},"roleHp":178,"monsterHp":571},{"roundId":1,"type":3,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":36,"criticalDamage":0,"totalDamage":36},"roleHp":142,"monsterHp":571},{"roundId":2,"type":1,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":114,"criticalDamage":0,"totalDamage":114},"roleHp":142,"monsterHp":457},{"roundId":2,"type":2,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":39,"criticalDamage":0,"totalDamage":39},"roleHp":142,"monsterHp":418},{"roundId":2,"type":3,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":37,"criticalDamage":0,"totalDamage":37},"roleHp":105,"monsterHp":418},{"roundId":3,"type":1,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":118,"criticalDamage":0,"totalDamage":118},"roleHp":105,"monsterHp":300},{"roundId":3,"type":2,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":39,"criticalDamage":0,"totalDamage":39},"roleHp":105,"monsterHp":261},{"roundId":3,"type":3,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":34,"criticalDamage":0,"totalDamage":34},"roleHp":71,"monsterHp":261},{"roundId":4,"type":1,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":118,"criticalDamage":0,"totalDamage":118},"roleHp":71,"monsterHp":143},{"roundId":4,"type":2,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":39,"criticalDamage":0,"totalDamage":39},"roleHp":71,"monsterHp":104},{"roundId":4,"type":3,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":34,"criticalDamage":0,"totalDamage":34},"roleHp":37,"monsterHp":104},{"roundId":5,"type":1,"stageId":7,"damage":{"ADDamage":0,"APDamage":0,"normalDamage":115,"criticalDamage":0,"totalDamage":115},"roleHp":37,"monsterHp":0}],"pkTimestamp":1693663796}}}
    if res["code"] != 0:
        print(res["msg"])
        return
    return res["data"]["pk"]["pkId"]


def pkend(pkid):
    data = domain('{"pkId":"'+pkid+'"}')
    res = http.post("https://sapi.yygamefi.com/api/stage/stage-pk-end", data)
    res = json.loads(js.call("e.decrypt", res.text))
    print(res)
    # {"code":0,"msg":"OK","data":{"Annex":[{"isTrans":false,"transFromID":0,"name":"","type":3,"entityId":11,"level":0,"pkgNum":1,"image":"zhuangbei_5","fineness":1,"summary":"","props":null}],"level":7,"experience":838,"nextExperience":3000,"addExperience":166,"stageId":7,"myRankingInfo":null}}


def roleinfo():
    data = domain('{}')
    res = http.post("https://sapi.yygamefi.com/api/user/role-info", data)
    res = json.loads(js.call("e.decrypt", res.text))
    print(res)


def login(mobile, pwd):
    data = domain('{"mobile":"'+mobile+'","password":"'+pwd+'"}')
    res = http.post("https://sapi.yygamefi.com/api/basic/login", data)
    res = json.loads(js.call("e.decrypt", res.text))
    print(res)
    return res["data"]["token"]


def main():
    roleinfo()
    for _ in range(3):
        pkid = pkstart()
        if pkid is None:
            return
        # time.sleep(random.randint(29, 35))
        pkend(pkid)


# 第1章节 第7关
step1, step2 = 1, 7
token = ""
token = login("", "")

main()
