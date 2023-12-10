package mod

import (
	"io/ioutil"
	"os"
	"os/exec"
	"path/filepath"
	"strings"
)

func FileAppend(pathName string, str string) string {
	file, err := os.OpenFile(pathName, os.O_APPEND|os.O_CREATE|os.O_WRONLY, 0777)
	if err != nil {
		return "打开文件出错"
	}
	_, err = file.WriteString(str)
	if err != nil {
		return "写入文件出错"
	}
	return "写入文件成功"
}

func FileWrite(pathName string, str string) string {
	err := ioutil.WriteFile(pathName, []byte(str), 0777)
	if err != nil {
		return "写入文件出错"
	}
	return "写入文件成功"
}

func FileRead(dirname string) string {
	content, err := os.ReadFile(dirname)
	if err != nil {
		return "读取文件出错"
	}
	return string(content)
}

func GetListDir(dirname string) string {
	infos, err := os.ReadDir(dirname)
	if err != nil {
		return "读取文件夹出错"
	}
	names := make([]string, len(infos))
	for i, info := range infos {
		names[i] = info.Name()
	}
	return strings.Join(names, "|")
}
func GetCurrentPath() string {
	file, err := exec.LookPath(os.Args[0])
	if err != nil {
		return "error: 获取路径错误1"
	}
	path, err := filepath.Abs(file)
	if err != nil {
		return "error: 获取路径错误2"
	}
	i := strings.LastIndex(path, "/")
	if i < 0 {
		i = strings.LastIndex(path, "\\")
	}
	if i < 0 {
		return `error: 找不到 "/" or "\"`
	}
	return string(path[0 : i+1])
}
