package mod

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"

	"github.com/wangluozhe/requests"
	"github.com/wangluozhe/requests/url"
	"github.com/wangluozhe/requests/utils"
)

var client = requests.NewSession()

func GetUid(ck string) string {
	headers := map[string]string{
		"authority":        "weibo.com",
		"accept":           "application/json, text/plain, */*",
		"accept-language":  "zh-CN,zh;q=0.9,en;q=0.8",
		"client-version":   "v2.44.36",
		"server-version":   "v2023.12.07.3",
		"cookie":           "SUB=" + ck,
		"user-agent":       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
	}
	req := url.NewRequest()
	req.Headers = url.ParseHeaders(headers)
	res, err := client.Get("https://weibo.com/ajax/message/unreadHint", req)
	if err != nil {
		return "error"
	}
	if len(res.Headers["X-Log-Uid"]) == 0 {
		return "error"
	}
	return res.Headers["X-Log-Uid"][0]
}

func GzCH(ck string, chid string) string {
	headers := map[string]string{
		"authority":        "weibo.com",
		"accept":           "application/json, text/plain, */*",
		"accept-language":  "zh-CN,zh;q=0.9,en;q=0.8",
		"client-version":   "v2.44.36",
		"server-version":   "v2023.12.07.3",
		"cookie":           "SUB=" + ck,
		"user-agent":       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
	}
	req := url.NewRequest()
	req.Headers = url.ParseHeaders(headers)
	res, err := client.Get("https://weibo.com/ajax/stopic/curl?oid=1022:"+chid+"&display_name=&is_obturate=0&is_live=0", req)
	if err != nil {
		return "error"
	}
	if strings.Contains(res.Text, "关注成功") {
		return "关注成功"
	}
	return "error"
}

func UploadPic(ck string, path string) string {
	headers := map[string]string{
		"authority":        "weibo.com",
		"accept":           "application/json, text/plain, */*",
		"accept-language":  "zh-CN,zh;q=0.9,en;q=0.8",
		"client-version":   "v2.44.36",
		"server-version":   "v2023.12.07.3",
		"cookie":           "SUB=" + ck,
		"user-agent":       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
	}
	content, err := os.ReadFile(path)
	if err != nil {
		return "error"
	}
	data := map[string]any{
		"b64_data": utils.Base64Encode(content),
	}
	req := url.NewRequest()
	req.Headers = url.ParseHeaders(headers)
	req.Data = url.ParseData(data)
	res, err := client.Post("https://picupload.weibo.com/interface/pic_upload.php?data=base64", req)
	if err != nil {
		return "error"
	}
	// fmt.Println(res.Text)
	if strings.Contains(res.Text, "pid\":") {
		mm := strings.Split(res.Text, "pid\":")[1]
		nn := strings.TrimRight(mm, "}")
		bb := strings.ReplaceAll(nn, "\"", "")
		// fmt.Println(bb)
		return bb
	}
	return "error"
}

func SendTwi(ck string, text string, pid string, toch string, sync string) string {
	// fmt.Println(ck, text, pid, toch, sync)
	headers := map[string]string{
		"authority":        "weibo.com",
		"accept":           "application/json, text/plain, */*",
		"accept-language":  "zh-CN,zh;q=0.9,en;q=0.8",
		"client-version":   "v2.44.36",
		"server-version":   "v2023.12.07.3",
		"cookie":           "SUB=" + ck + "; XSRF-TOKEN=xxxxx",
		"user-agent":       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
		"x-xsrf-token":     "xxxxx",
	}
	pic_id := ""
	if pid != "" {
		pic_id = "[{\"type\":\"image/jpeg\",\"pid\":\"" + pid + "\"}]"
	}
	data := map[string]any{
		"content":    text,
		"pic_id":     pic_id,
		"visible":    "0",
		"share_id":   "",
		"media":      "",
		"vote":       "",
		"topic_id":   "1022:" + toch,
		"sync_mblog": sync,
	}
	req := url.NewRequest()
	req.Headers = url.ParseHeaders(headers)
	req.Data = url.ParseData(data)
	res, err := client.Post("https://weibo.com/ajax/statuses/update", req)
	if err != nil {
		return "error"
	}
	// fmt.Println(res)
	if strings.Contains(res.Text, "未关注超话") {
		return "未关注超话"
	}
	if strings.Contains(res.Text, "发布成功") {
		return "发布成功"
	}
	return "error"
}

func GetInfo(ck string, uid string) string {
	headers := map[string]string{
		"authority":        "weibo.com",
		"accept":           "application/json, text/plain, */*",
		"accept-language":  "zh-CN,zh;q=0.9,en;q=0.8",
		"client-version":   "v2.44.36",
		"server-version":   "v2023.12.07.3",
		"cookie":           "SUB=" + ck,
		"user-agent":       "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
		"x-requested-with": "XMLHttpRequest",
	}
	req := url.NewRequest()
	req.Headers = url.ParseHeaders(headers)
	res, err := client.Get("https://weibo.com/ajax/profile/info?uid="+uid, req)
	if err != nil {
		return "error"
	}
	var info info
	json.Unmarshal(res.Content, &info)
	return fmt.Sprintf("{\"name\":\"%s\",\"fans\":\"%s\",\"friend\":\"%d\"}", info.Data.User.ScreenName, info.Data.User.FollowersCountStr, info.Data.User.FriendsCount)
}

type info struct {
	Data struct {
		User struct {
			Idstr             string `json:"idstr"`
			ScreenName        string `json:"screen_name"`
			Description       string `json:"description"`
			Location          string `json:"location"`
			Gender            string `json:"gender"`
			FollowersCountStr string `json:"followers_count_str"`
			FriendsCount      int    `json:"friends_count"`
			StatusesCount     int    `json:"statuses_count"`
		} `json:"user"`
	} `json:"data"`
}
