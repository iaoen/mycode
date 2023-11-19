const tools = require("./tools")

const phones = [
    ["账号", "密码"],
    ["账号", "密码"],
]

async function main() {
    var tokens = []
    for (i in phones) {
        token = await login(phones[i][0], phones[i][1])
        if (token != null){
            tokens.push(token)
        }
    }
    console.log(tokens)

    for (i in tokens) {
        await tools.sleep(2000)
        await usersign(tokens[i])
        for (let ii = 0; ii < 6; ii++) {
            await tools.sleep(2000)
            await share(tokens[i])
        }
    }
}

function md5(message) {
    return tools.md5(message).toUpperCase()
}

async function login(phone, pwd) {
    var uuid = tools.uuid()
    var tt = new Date().getTime().toString()
    var sign = 'WDNH' + md5("4.2.9") + 'SEOB' + md5("1") + 'WEBV' + md5("1.0") + 'ZXOYX' + md5(uuid) + 'OHJHQ' + md5(tt) + 'BGJM'
    var url = "https://scrm.changan.com.cn/app-m/prod-api/auth/cac/appLogin"
    var data = {
        "picKey": "null",
        "code": "null",
        "a": "1.0",
        "b": "1",
        "c": "4.2.9",
        "d": tt,
        "e": uuid,
        "f": md5(sign),
        "id": "9999999723755" + tools.random(30, 36),
        "smsCode": "null",
        "pageSize": "null",
        "type": "0",
        "pageNum": "null",
        "picCode": "null",
        "labelList": "null",
        "biz": "0",
        "password": pwd,
        "csrfToken": "null",
        "registrationId": "2c8735c5a6f753229aec45789dcd3a1f4",
        "tel": "null",
        "modulus": "null",
        "username": phone
    }
    var headers = {
        "authorization": "",
        "user-agent": "okhttp/4.9.1"
    }
    var options = {
        uri: url,
        method: "POST",
        json: true,
        body: data,
        headers: headers
    }
    try {
        var res = await tools.http(options)
        if (res.code == 200){
            console.log(phone, "登陆成功")
            return res.data.access_token
        }else{
            console.log(phone,res.msg)
            if(res.msg == "内部服务器错误"){
                await tools.sleep(1000)
                return await login(phone, pwd)
            }
            return null
        }
    } catch (e) {
        await tools.sleep(1000)
        return await login(phone, pwd)
    }
}

async function share(auth) {
    var uuid = tools.uuid()
    var tt = new Date().getTime().toString()
    var sign = 'WDNH' + md5("4.2.9") + 'SEOB' + md5("1") + 'WEBV' + md5("1.0") + 'ZXOYX' + md5(uuid) + 'OHJHQ' + md5(tt) + 'BGJM'
    var url = "https://scrm.changan.com.cn/app-m/prod-api/cms/article/app/share"
    var data = {
        "a": "1.0",
        "b": "1",
        "c": "4.2.9",
        "d": tt,
        "e": uuid,
        "f": md5(sign),
        "id": "9999999723755" + tools.random(30, 36)
    }
    var headers = {
        "authorization": auth,
        "user-agent": "okhttp/4.9.1"
    }
    var options = {
        uri: url,
        method: "POST",
        json: true,
        body: data,
        headers: headers
    }
    try {
        var res = await tools.http(options)
        console.log(JSON.stringify(res))
    } catch (e) {
        return await share(auth)
    }
}

async function usersign(auth) {
    var uuid = tools.uuid()
    var tt = new Date().getTime().toString()
    var sign = 'WDNH' + md5("4.2.9") + 'SEOB' + md5("1") + 'WEBV' + md5("1.0") + 'ZXOYX' + md5(uuid) + 'OHJHQ' + md5(tt) + 'BGJM'
    var url = "https://scrm.changan.com.cn/app-m/prod-api/scrm/marketing/signUsersign"
    var data = {
        "a": "1.0",
        "b": "1",
        "c": "4.2.9",
        "d": tt,
        "e": uuid,
        "f": md5(sign),
    }
    var headers = {
        authorization: auth,
        "user-agent": "okhttp/4.9.1"
    }
    var options = {
        uri: url,
        method: "POST",
        body: data,
        json: true,
        headers: headers
    }
    try{
        var res = await tools.http(options)
        console.log(JSON.stringify(res))
    } catch (e) {
        return await usersign(auth)
    }
}

module.exports = main