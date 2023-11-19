const tools = require("./tools")

const tokens = [
    "",
    ""
]


const tasks = [{
    "enable": true,
    "num": 1,
    "name": "签到",
    "url": "https://api.uni.changan.com.cn/user/signIn",
    "data": '{}'
}, {
    "enable": true,
    "num": 7,
    "name": "分享帖子",
    "url": "https://api.uni.changan.com.cn/con/share/callback",
    "data": '{"bizId":"70047725","content":"{\\"bizId\\":\\"70047725\\",\\"shareDesc\\":\\"出口一辆#国产汽车 到#非洲 究竟要花多少钱。#中国制造 @\\",\\"shareImg\\":\\"base/2022/02/15/9d716aad18b6414f8f3238ab084c3c1aandroidios650_313.png\\",\\"shareTitle\\":\\"我发现一篇有意思的帖子，分享给大家\\",\\"shareUrl\\":\\"https://cir.uni.changan.com.cn/quanzi/?from=singlemessage&t=1644897367#/postDetailVideo?postsId=70047725\\",\\"type\\":\\"2\\",\\"wxminiprogramCode\\":\\"\\"}","device":"","shareTime":"1644897370347","shareTo":"2","type":"2","userId":"3517492"}'
}, {
    "enable": true,
    "num": 7,
    "name": "分享资讯",
    "url": "https://api.uni.changan.com.cn/con/share/callback",
    "data": '{"bizId":"1107","content":"{\\"bizId\\":\\"1107\\",\\"shareDesc\\":\\"自在而活，用热爱诠释多彩人生\\",\\"shareImg\\":\\"base/2022/02/14/7d42656d84e3465e9e560357a1cec05aandroidios650_325.png\\",\\"shareTitle\\":\\"自在而活，用热爱诠释多彩人生\\",\\"shareUrl\\":\\"https://cir.uni.changan.com.cn/quanzi/?from=singlemessage&t=1644901847#/informationDetail?artId=1107\\",\\"type\\":\\"1\\",\\"wxminiprogramCode\\":\\"\\"}","device":"","shareTime":"1644901850492","shareTo":"2","type":"1","userId":"3517492"}'
}, {
    "enable": false,
    "num": 7, //需要自定义评论内容和帖子id
    "name": "评论回复",
    "url": "https://api.uni.changan.com.cn/con/article/addComment",
    "data": '{"bizId":"oo11oo","content":"oo22oo","groupId":"0","phoneModel":"Mi 10 Pro","pid":"0"}'
}, {
    "enable": false,
    "num": 3,
    "name": "发帖", //需要自定义发帖内容
    "url": "https://api.uni.changan.com.cn/con/posts/addPosts",
    "data": '{"actionCode":"community_post","content":"oo22oo","imgUrl":["temp/2022/02/15/1644898769798androidios1920_1140.jpg"],"isPublish":2,"pics":"temp/2022/02/15/1644898769798androidios1920_1140.jpg","plate":2,"title":"oo11oo","type":2}'
}, {
    "enable": false,
    "num": 2,
    "name": "发帖带话题", //需要自定义发帖内容
    "url": "https://api.uni.changan.com.cn/con/posts/addPosts",
    "data": '{"actionCode":"community_post","content":"oo22oo","imgUrl":["temp/2022/02/15/1644899328649androidios1920_1140.jpg"],"isPublish":2,"pics":"temp/2022/02/15/1644899328649androidios1920_1140.jpg","plate":2,"title":"oo11oo","topicId":"243","type":2}'
}, {
    "enable": false,
    "num": 10,
    "name": "点赞",
    "url": "https://api.uni.changan.com.cn/con/article/actionLike",
    "data": '{"artId":"oo11oo"}'
}]


async function main() {
    for (to in tokens) {
        for (ta in tasks) {
            console.log(tasks[ta].name)
            if (tasks[ta].enable) {
                var num = tasks[ta].num
                for (let i = 0; i < num; i++) {
                    await tools.sleep(2000)
                    await begin(tasks[ta], tokens[to])
                }
            }
        }
    }
}
async function begin(task, token) {
    var dd = task.data
    var options_yiyan = {
        uri: "http://v1.hitokoto.cn",
        method: "GET"
    }
    if (task.name == "评论回复") {
        let content = await tools.http(options_yiyan)
        dd = dd.replace("oo11oo", tools.random(800, 1107)).replace("oo22oo", content.hitokoto)
    }
    if (task.name == "发帖" || task.name == "发帖带话题") {
        let content1 = await tools.http(options_yiyan)
        let content2 = await tools.http(options_yiyan)
        dd = dd.replace("oo11oo", content1.hitokoto).replace("oo22oo", content2.hitokoto)
    }
    if (task.name == "点赞") {
        dd = dd.replace("oo11oo", tools.random(800, 1107))
    }

    var options_encrypt = {
        uri: "http://127.0.0.1:9999/uni",
        method: "POST",
        json: true,
        body: {
            "data": dd
        }
    }
    var res_encrypt = await tools.http(options_encrypt)
    // console.log(JSON.stringify(res_encrypt))
    var data = {
        "paramEncr": res_encrypt.paramEncr
    }
    var headers = {
        "appVersion": "1.4.5",
        "os": "Android",
        "loginChannel": "xiaomi",
        "sign": res_encrypt.sign,
        "operatorName": "not found",
        "networkState": "WIFI",
        "token": token,
        "osVersion": "11",
        "fingerprint": "",
        "seccode": res_encrypt.seccode,
        "model": "Mi 10 Pro",
        "brand": "Xiaomi",
        "timestamp": res_encrypt.tt,
        "codelab": "codelabs",
        "body": "",
        "User-Agent": "okhttp/4.8.0"
    }
    var options_task = {
        uri: task.url,
        method: "POST",
        json: true,
        body: data,
        headers: headers
    }
    var res = await tools.http(options_task)
    console.log(JSON.stringify(res))
}

module.exports = main