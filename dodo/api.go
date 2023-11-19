package main

import (
	"encoding/json"
	"mygo/tools"
	"strings"

	"github.com/acheong08/endless"
	"github.com/gin-gonic/gin"
	"github.com/wangluozhe/requests"
	"github.com/wangluozhe/requests/url"
	"github.com/wangluozhe/requests/utils"
)

var ApiKey = "CK18tnKeKDN"
var EnKey = "t8yqYCqv68rKOwgPRUBv4Z2hS4kKajHc0yYzrXLf"
var http = requests.NewSession()

func main() {
	r := gin.Default()
	r.GET("/getAvatarNickName", getAvatarNickName)
	endless.ListenAndServe(":9999", r)
}

func getAvatarNickName(c *gin.Context) {
	req := toData("apikey=" + ApiKey + "&clientType=3&clientVersion=0.11.2&timestamp=" + tools.GetTS())
	res, err := http.Post("https://apis.imdodo.com/user/"+tools.RandMinMax(1900000, 3400000), req)
	if err != nil {
		c.JSON(500, gin.H{"error": "请求dodo出错"})
		return
	}
	var userinfo userInfo
	json.Unmarshal(res.Content, &userinfo)
	if strings.ContainsAny(userinfo.Data.User.NickName, "禁销友") {
		getAvatarNickName(c)
		return
	}
	c.JSON(200, gin.H{"uid": userinfo.Data.User.Uids, "nickName": userinfo.Data.User.NickName, "avatarUrl": userinfo.Data.User.AvatarURL})
}

func toData(data string) *url.Request {
	sign := utils.Btoa(utils.HmacSHA1(data, EnKey))
	req := url.NewRequest()
	req.Data = url.ParseData(data)
	req.Data.Add("sig", sign)
	return req
}

type userInfo struct {
	Data struct {
		User struct {
			AvatarURL string `json:"avatarUrl"`
			NickName  string `json:"nickName"`
			Uids      string `json:"uids"`
		} `json:"user"`
	} `json:"data"`
	Message string `json:"message"`
	Status  int    `json:"status"`
}
