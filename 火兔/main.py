import time
import execjs
import threading
import requests
import json


http = requests.Session()
service_url, key = "", ""
data_update_KeyService_url = {"appid": "wx74d53a341c162bca", "data": {"qbase_api_name": "tcbapi_get_service_info", "qbase_req": "{\"client_random\":\"0.7488788853398656_1690965169229\"}", "qbase_options": {"identityless": True, "resourceAppid": "wx74d53a341c162bca", "resourceEnv": "langlige-5gatr23qb88836bd", "config": {"database": {"realtime": {"maxReconnect": 5, "reconnectInterval": 5000, "totalConnectionTimeout": None}}}, "appid": "wx74d53a341c162bca", "env": "langlige-5gatr23qb88836bd"}, "qbase_meta": {"session_id": "1690965169233", "sdk_version": "wx-web-sdk/1.3.0 (1634884237000)", "filter_user_info": False}, "cli_req_id": "1690965169707_0.5209914573389878"}}

# 初始化加密/解密方法
js = execjs.compile(open("./火兔/index.js").read())


def start_update_server():
    r"""更新一次 service_url,key"""
    global service_url, key
    response = http.post("https://servicewechat.com/wxa-qbase/jsoperatewxdata", json=data_update_KeyService_url).json()
    res = json.loads(response["data"])
    service_url, key = res["service_url"], res["key"]
    print("update_server", service_url, key)


def domain(data):
    r"""发送"""
    headers = {
        "x-wx-compression": "snappy",
        "x-wx-encryption-timestamp": str(int(time.time()*1000)),
        "x-wx-encryption-version": "2",
        "x-wx-lib-build-ts": "1634884237219",
        "x-wx-request-content-encoding": "JSON",
        "x-wx-response-content-accept-encoding": "PB, JSON",
        "x-wx-user-timeout": "30000",
    }
    res = http.post(service_url, bytes.fromhex(js.call("encodeData", key, data)), headers=headers, stream=True).content
    res_json = json.loads(js.call("decodeData", key, res.hex()))
    return res_json


def getList(seriesId):
    r"""获取列表"""
    result = []
    res = domain('{"method":"GET","header":[{"key":"x-wx-exclude-credentials","value":"unionid, cloudbase-access-token, openid"},{"key":"x-wx-region","value":"ap-shanghai"},{"key":"x-wx-gateway-id","value":"box-2gsck1rc0508476d"},{"key":"host","value":"mi-2.huotu.art"},{"key":"accept-language","value":"zh-CN"},{"key":"app-token","value":"s18d3Qng5iarqQKwKk/24V0CR+VuiaTP62l4Y58KdjY="},{"key":"trans-id","value":"3d881d36bb9e41f88fe341fd525187e2"},{"key":"x-cloudbase-phone","value":"18888888888"},{"key":"app-name","value":"m"},{"key":"content-type","value":"application/json;charset=UTF-8"},{"key":"x-wx-env","value":"langlige-5gatr23qb88836bd"},{"key":"x-wx-call-id","value":"my_call_id"},{"key":"x-wx-resource-appid","value":"wx74d53a341c162bca"},{"key":"x-wx-container-path","value":"/front/works/page?page=1&pageSize=2&sort=1&seriesId='+str(seriesId)+'&status=1&"}],"call_id":"my_call_id"}')
    print(res)
    for i in res["data"]["list"]:
        result.append([i["worksStatus"], i["priceCny"], i["worksId"], i["worksNo"]])
    return result


def getList2(seriesId):
    r"""获取列表2"""
    tt = str(int(time.time()*1000))
    data = {"appid": "wx74d53a341c162bca", "data": {"qbase_api_name": "tcbapi_call_container", "qbase_req": "{\"method\":\"GET\",\"headers\":[{\"k\":\"X-WX-EXCLUDE-CREDENTIALS\",\"v\":\"unionid, cloudbase-access-token, openid\"},{\"k\":\"X-WX-REGION\",\"v\":\"ap-shanghai\"},{\"k\":\"X-WX-GATEWAY-ID\",\"v\":\"box-2gsck1rc0508476d\"},{\"k\":\"HOST\",\"v\":\"mi-2.huotu.art\"},{\"k\":\"Accept-Language\",\"v\":\"zh-CN\"},{\"k\":\"app-token\",\"v\":\"s18d3Qng5iarqQKwKk/24V0CR+VuiaTP62l4Y58KdjY=\"},{\"k\":\"trans-id\",\"v\":\"32e90775fe2447c28153aa980e76d350\"},{\"k\":\"x-cloudbase-phone\",\"v\":\"18888888888\"},{\"k\":\"app-name\",\"v\":\"m\"},{\"k\":\"content-type\",\"v\":\"application/json;charset=UTF-8\"},{\"k\":\"X-WX-ENV\",\"v\":\"langlige-5gatr23qb88836bd\"},{\"k\":\"X-WX-CONTAINER-PATH\",\"v\":\"/front/works/page?page=1&pageSize=2&sort=1&seriesId="+str(seriesId)+"&status=1&\"}],\"call_id\":\"5380544534895535_"+tt+"\"}", "qbase_options": {"identityless": True, "resourceAppid": "wx74d53a341c162bca", "resourceEnv": "langlige-5gatr23qb88836bd", "config": {"database": {"realtime": {"maxReconnect": 5, "reconnectInterval": 5000, "totalConnectionTimeout": None}}}, "appid": "wx74d53a341c162bca", "env": "langlige-5gatr23qb88836bd"}, "qbase_meta": {"session_id": tt, "sdk_version": "wx-web-sdk/1.3.0 (1634884237000)", "filter_user_info": False}, "cli_req_id": "5380544534895535_"+tt}}
    result = []
    response = http.post("https://servicewechat.com/wxa-qbase/jsoperatewxdata", json=data, timeout=5)
    print(response.text)
    res = json.loads(json.loads(response.json()["data"])["data"])
    for i in res["data"]["list"]:
        result.append([i["worksStatus"], i["priceCny"], i["worksId"], i["worksNo"]])
    return result


start_update_server()
getList2(10141)
