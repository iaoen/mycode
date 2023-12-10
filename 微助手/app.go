package main

import (
	"changeme/mod"
	"context"
	"fmt"
	"strings"
)

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called when the app starts. The context is saved
// so we can call the runtime methods
func (a *App) startup(ctx context.Context) {
	a.ctx = ctx
}

// Greet returns a greeting for the given name
func (a *App) Greet(name string) string {
	return fmt.Sprintf("Hello %s, It's show time!", name)
}

func (a *App) GetCurrentPath() string {
	return mod.GetCurrentPath()
}
func (a *App) FileWrite(pathName string, str string) string {
	pathName = strings.ReplaceAll(pathName, "\\", "/")
	return mod.FileWrite(pathName, str)
}
func (a *App) FileAppend(pathName string, str string) string {
	pathName = strings.ReplaceAll(pathName, "\\", "/")
	return mod.FileAppend(pathName, str)
}
func (a *App) FileRead(dirname string) string {
	dirname = strings.ReplaceAll(dirname, "\\", "/")
	return mod.FileRead(dirname)
}
func (a *App) GetListDir(dirname string) string {
	dirname = strings.ReplaceAll(dirname, "\\", "/")
	return mod.GetListDir(dirname)
}

func (a *App) GetUid(ck string) string {
	return mod.GetUid(ck)
}
func (a *App) GzCH(ck string, chid string) string {
	return mod.GzCH(ck, chid)
}
func (a *App) GetInfo(ck string, uid string) string {
	return mod.GetInfo(ck, uid)
}
func (a *App) UploadPic(ck string, path string) string {
	return mod.UploadPic(ck, path)
}
func (a *App) SendTwi(ck string, text string, pid string, toch string, sync string) string {
	return mod.SendTwi(ck, text, pid, toch, sync)
}
