import { reactive, ref } from 'vue'
import { GetCurrentPath, FileRead, FileWrite, FileAppend } from '../wailsjs/go/main/App'

export const data = reactive([]);
export const dataSend = reactive([]);

async function getcup(){
    return (await GetCurrentPath()).replace("/微助手.app/Contents/MacOS", "")
}

export const readFile = async (name) => {
    let res = await FileRead(await getcup() + "/" + name)
    // console.log(res);
    return res
}
export const writeFile = async (name, text) => {
    // console.log(await getcup() + "/" + name);
    // console.log(text);
    let res = await FileWrite(await getcup() + "/" + name, text)
    return res
}
export const appendFile = async (name, text) => {
    let res = await FileAppend(await getcup() + "/" + name, text)
    return res
}
