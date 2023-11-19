const tools = require("./tools")

const tokens = [
    "",
    ""
]

async function main() {
    for (i in tokens) {
        await usersign(tokens[i])
    }
}

async function usersign(auth) {
    var tt = new Date().getTime().toString()
    var url = "https://int.oushangstyle.changan.com.cn/user/clickSignUp"
    var headers = {
        "Accept-Language": "zh-CN,zh;q=0.8",
        "User-Agent": "android-OStyle",
        "token": auth,
        "zh-sign": "",
        "os": "Android",
        "timeStamp": tt,
        "channel": "huawei",
        "version": "20440",
        "uuid": "",
        "brand": "Xiaomi",
        "model": "Mi 10 Pro",
        "deviceSDK": "30",
        "operatorName": "dx",
        "networkState": "WIFI",
        "manuFacture": "Xiaomi"
    }
    var options = {
        uri: url,
        method: "POST",
        body: {},
        json: true,
        headers: headers
    }
    var res = await tools.http(options)
    console.log(JSON.stringify(res))
}

module.exports = main