<script setup>
import { ref, reactive } from 'vue';
import { dataSend, readFile, writeFile, appendFile } from '../tools';
import { SendTwi, UploadPic, GzCH } from '../../wailsjs/go/main/App'
import { IconDelete, IconEdit } from '@arco-design/web-vue/es/icon';
import { Message } from '@arco-design/web-vue';
import { onMounted } from 'vue';

const columns = [
    {
        title: '序号',
        dataIndex: 'key',
    },
    {
        title: '账号',
        dataIndex: 'uid',
    },
    {
        title: '成功',
        dataIndex: 'success',
    },
    {
        title: '失败',
        dataIndex: 'error',
    },
    {
        title: '状态',
        dataIndex: 'sendstatus',
    },
]
const pagination = { pageSize: 12 }
const selectedKeys = ref([]);
const addvisible = ref(false)
const addchvisible = ref(false)
const issyncwb = ref(false)
const pic_path = ref()
const wz_text = ref()
const ch_text = ref()
const minT = ref(20)
const maxT = ref(60)
const isStop = ref(false)

const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
});
const TwiWen = reactive([])
const CH = reactive([])
onMounted(async () => {
    let aa = JSON.parse(await readFile("tw.txt"))
    console.log(aa);
    for (let nn of aa) {
        TwiWen.push(nn)
    }
    let bb = JSON.parse(await readFile("ch.txt"))
    console.log(bb);
    for (let nn of bb) {
        CH.push(nn)
    }
})
function bubblingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
function randChoice(li) {
    let min = 0
    let max = li.length
    let r = Math.floor(Math.random() * (max - min)) + min;
    return li[r]
}
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}
function deleteItem() {
    let hava = []
    for (let ii = 0; ii < dataSend.length; ii++) {
        for (let i = 0; i < selectedKeys.value.length; i++) {
            if (selectedKeys.value[i] == dataSend[ii].key) {
                hava.push(ii)
            }
        }
    }
    let mm = bubblingSort(hava).reverse()
    for (let nn of mm) {
        dataSend.splice(nn, 1)
    }
    selectedKeys.value.length = 0
}

function addTwiWen() {
    addvisible.value = true
}

function addok() {
    let key = null
    if (TwiWen.length == 0) {
        key = 1
    } else {
        key = TwiWen[TwiWen.length - 1].key + 1
    }
    TwiWen.push({
        key: key,
        text: wz_text.value,
        path: pic_path.value
    })
    pic_path.value = ""
    wz_text.value = ""
    writeFile("tw.txt", JSON.stringify(TwiWen))
}

function deleteClick(key) {
    var nn = -1
    for (let m = 0; m < TwiWen.length; m++) {
        if (key == TwiWen[m].key) {
            nn = m
        }
    }
    if (nn != -1) {
        TwiWen.splice(nn, 1)
    }
    writeFile("tw.txt", JSON.stringify(TwiWen))
}
function deleteCHClick(key) {
    var nn = -1
    for (let m = 0; m < CH.length; m++) {
        if (key == CH[m].key) {
            nn = m
        }
    }
    if (nn != -1) {
        CH.splice(nn, 1)
    }
    writeFile("ch.txt", JSON.stringify(CH))
}
function addchClick() {
    addchvisible.value = true
}

function addch() {
    let chid = ch_text.value.replace("/super_index", "").replace("https://weibo.com/p/", "")
    if (chid.indexOf("1008") == -1) {
        Message.error("非超话链接")
        return
    }
    let key = null
    if (CH.length == 0) {
        key = 1
    } else {
        key = CH[CH.length - 1].key + 1
    }
    CH.push({
        key: key,
        text: chid,
    })
    ch_text.value = ""
    writeFile("ch.txt", JSON.stringify(CH))
    Message.success("添加成功")
}
async function startTask() {
    //初始化次数
    for (let zh of dataSend) {
        let tw = randChoice(TwiWen)
        console.log(tw);
        var pid = ""
        if (tw.path == undefined || tw.path == "") { } else {
            var pid = await UploadPic(zh.ck, tw.path)
        }
        var tb = "0"
        if (issyncwb.value) {
            tb = "1"
        }
        let chid = randChoice(CH).text
        console.log(zh.ck, tw.text, pid, chid, tb)
        let status = await SendTwi(zh.ck, tw.text, pid, chid, tb)
        console.log(status);
        zh.sendstatus = status
        if (status == "发布成功") {
            zh.success += 1
        } else if (status == "未关注超话") {
            let gzch = await GzCH(zh.ck, chid)
            zh.sendstatus = gzch
            let status = await SendTwi(zh.ck, tw.text, pid, chid, tb)
            console.log(status);
            zh.sendstatus = status
            zh.success += 1
        } else {
            zh.error += 1
        }
        let st = randomInt(parseInt(minT.value) * 1000, parseInt(maxT.value) * 1000)
        console.log(st);
        await sleep(st)
    }
}
function stopTask() {
    isStop.value = true
    Message.info("停止成功!")
}
</script>

<template>
    <a-row>
        <a-col span="14">
            <a-space>
                <span>间隔s</span>
                <a-input style="width: 3rem;" v-model="minT" />
                <span>-</span>
                <a-input style="width: 3rem;" v-model="maxT" />
                <a-button @click="startTask" type="primary"> 开始任务 </a-button>
                <a-button @click="stopTask" type="primary"> 停止任务 </a-button>
                <a-button @click="() => { dataSend.length = 0 }"> 清空列表 </a-button>
                <a-button @click="deleteItem"> 选中删除 </a-button>
            </a-space>
            <a-card>
                <a-table row-key="key" :columns="columns" :data="dataSend" :row-selection="rowSelection"
                    v-model:selectedKeys="selectedKeys" :pagination="pagination" />
            </a-card>
        </a-col>
        <a-col span="10">
            <a-button @click="addTwiWen"> 添加文章 </a-button>
            <a-card>
                <a-list size="small" :pagination-props="{
                    defaultPageSize: 5,
                    total: TwiWen.length
                }">
                    <a-list-item v-for="idx in TwiWen" :key="idx.key" style="height: 2rem;padding-top: 0.3rem;">
                        <p
                            style="width: 25rem; overflow: hidden;text-align: left; text-overflow: ellipsis; white-space: nowrap;margin-top: 0;">
                            {{ idx.key }}: {{ idx.text }}
                        </p>
                        <template #actions>
                            <!-- <icon-edit @click="editClick" /> -->
                            <icon-delete @click="deleteClick(idx.key)" />
                        </template>
                    </a-list-item>
                </a-list>

            </a-card>
            <a-button @click="addchClick"> 添加超话 </a-button>
            <a-checkbox v-model="issyncwb"> 同步至微博 </a-checkbox>
            <a-card>
                <a-list size="small" :pagination-props="{
                    defaultPageSize: 5,
                    total: CH.length
                }">
                    <a-list-item v-for="idx in CH" :key="idx.key" style="height: 2rem;padding-top: 0.3rem;">
                        <p
                            style="width: 25rem; overflow: hidden;text-align: left; text-overflow: ellipsis; white-space: nowrap;margin-top: 0;">
                            {{ idx.key }}: {{ idx.text }}
                        </p>
                        <template #actions>
                            <!-- <icon-edit @click="editClick" /> -->
                            <icon-delete @click="deleteCHClick(idx.key)" />
                        </template>
                    </a-list-item>
                </a-list>
            </a-card>
        </a-col>
    </a-row>
    <a-modal v-model:visible="addvisible" @ok="addok">
        <template #title>
            添加文章
        </template>
        <a-textarea placeholder="文章内容" style="height: 5rem;" v-model="wz_text" allow-clear />
        图片路径: <a-input placeholder="将文件拖入该输入框" v-model="pic_path" allow-clear />
    </a-modal>
    <a-modal v-model:visible="addchvisible" @ok="addch">
        <template #title>
            添加超话
        </template>
        <a-textarea placeholder="超话链接 https://weibo.com/p/1008xxx/super_index" style="height: 5rem;" v-model="ch_text"
            allow-clear />
    </a-modal>
</template>
