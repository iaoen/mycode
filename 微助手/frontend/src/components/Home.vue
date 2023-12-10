<script setup>
import { reactive, ref } from 'vue';
import { GetInfo, GetUid } from '../../wailsjs/go/main/App'
import { data, dataSend, readFile, writeFile, appendFile } from '../tools';
import { Message } from '@arco-design/web-vue';
import { onMounted } from 'vue';

onMounted(async () => {
    let aa = JSON.parse(await readFile("zh.txt"))
    console.log(aa);
    for (let nn of aa) {
        data.push(nn)
    }
})

const selectedKeys = ref([]);
const ck_text = ref()

const rowSelection = reactive({
    type: 'checkbox',
    showCheckedAll: true,
});
const pagination = { pageSize: 100 }

const columns = [
    {
        title: '序号',
        dataIndex: 'key',
    },
    {
        title: '昵称',
        dataIndex: 'name',
    },
    {
        title: 'uid',
        dataIndex: 'uid',
        sortable: {
            sortDirections: ['ascend', 'descend']
        }
    },
    {
        title: '粉丝',
        dataIndex: 'fans',
    },
    {
        title: '关注',
        dataIndex: 'friend',
    },
    {
        title: '状态',
        dataIndex: 'status',
        sortable: {
            sortDirections: ['ascend', 'descend']
        }
    },
]

const qrvisible = ref(false);

const qrClick = () => {
    qrvisible.value = true;
};

const ckvisible = ref(false);

const ckClick = () => {
    ckvisible.value = true;
};

const ckok = () => {
    let ck = ck_text.value
    if (ck.indexOf("SUB=") != -1) {
        let ck_list = ck.split("\n")
        for (let ckitem of ck_list) {
            if (ckitem.trim() == "") continue
            let ckstr = ckitem.split("----")[1].replace("SUB=", "")
            if (data.length == 0) {
                data.push({
                    key: 1,
                    ck: ckstr
                })
            } else {
                data.push({
                    key: data[data.length - 1].key + 1,
                    ck: ckstr
                })
            }
        }
    } else {
        if (data.length == 0) {
            data.push({
                key: 1,
                ck: ck
            })
        } else {
            data.push({
                key: data[data.length - 1].key + 1,
                ck: ck
            })
        }
    }
    ck_text.value = ""
    writeFile("zh.txt", JSON.stringify(data))
};

const update = async () => {
    for (let i = 0; i < data.length; i++) {
        let uid = await GetUid(data[i].ck)
        if (uid == "error") {
            data[i].status = "登陆失败"
            continue
        }
        data[i].uid = uid
        let info = await GetInfo(data[i].ck, uid)
        let info_json = JSON.parse(info)
        data[i].name = info_json.name
        data[i].fans = info_json.fans
        data[i].friend = info_json.friend
        data[i].status = "成功登陆"
    }
    writeFile("zh.txt", JSON.stringify(data))
}

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

const deleteItem = () => {
    let hava = []
    for (let ii = 0; ii < data.length; ii++) {
        for (let i = 0; i < selectedKeys.value.length; i++) {
            if (selectedKeys.value[i] == data[ii].key) {
                hava.push(ii)
            }
        }
    }
    let mm = bubblingSort(hava).reverse()
    for (let nn of mm) {
        data.splice(nn, 1)
    }
    selectedKeys.value.length = 0
    writeFile("zh.txt", JSON.stringify(data))
}

const deletefail = () => {
    let hava = []
    for (let ii = 0; ii < data.length; ii++) {
        if ("登陆失败" == data[ii].status) {
            hava.push(ii)
        }
    }
    let mm = bubblingSort(hava).reverse()
    for (let nn of mm) {
        data.splice(nn, 1)
    }
    writeFile("zh.txt", JSON.stringify(data))
}

const daoruzhifaweiclick = () => {
    if (selectedKeys.value.length == 0) {
        Message.error("未勾选任何内容!")
        return
    }
    let hava = []
    for (let ii = 0; ii < data.length; ii++) {
        for (let i = 0; i < selectedKeys.value.length; i++) {
            if (selectedKeys.value[i] == data[ii].key) {
                hava.push(ii)
            }
        }
    }
    let mm = bubblingSort(hava)
    for (let nn of mm) {
        dataSend.push(data[nn])
    }
    selectedKeys.value.length = 0
    Message.info('导入成功!')
    for (let zh of dataSend) {
        zh.success = 0
        zh.error = 0
        zh.sendstatus = ""
    }
}

</script>

<template>
    <div>
        表格操作: <a-button @click="daoruzhifaweiclick"> 选中导入至发微博 </a-button> <a-button @click="deleteItem"> 选中删除 </a-button> <a-button @click="deletefail"> 清除登陆失败 </a-button> <a-button
            @click="update"> 更新状态 </a-button>
        添加账号: <a-button @click="ckClick"> CK </a-button> <a-button v-show="false" @click="qrClick"> 二维码 </a-button>
    </div>
    <a-space direction="vertical" size="large" fill>
        <a-table row-key="key" :columns="columns" :data="data" :row-selection="rowSelection"
            v-model:selectedKeys="selectedKeys" :pagination="pagination" />
    </a-space>
    <a-modal v-model:visible="qrvisible">
        <template #title>
            请扫码登陆
        </template>
        <div>You can customize modal body text by the current situation.</div>
    </a-modal>
    <a-modal v-model:visible="ckvisible" @ok="ckok">
        <template #title>
            请输入CK
        </template>
        <a-textarea placeholder="Please enter something" style="height: 8rem;" v-model="ck_text" allow-clear />
    </a-modal>
</template>
