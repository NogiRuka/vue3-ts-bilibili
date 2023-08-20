<template>
    <van-tabs v-model:active="active">
        <van-tab v-for="item in list" :key="item.id" :title="item.text"></van-tab>
    </van-tabs>
</template>
    
<script setup lang='ts'>

import { ref } from "vue";
import axios from "axios"

//ts的接口用于标记数据格式
interface INavItem {
    id: string
    text: string
}

const active = ref(0)
//频道数据
const list = ref<INavItem[]>([])


axios({
    url: "/navList",
    method: "get",
}).then(res => {
    console.log(res.data);
    list.value = res.data.result
})
</script>
    
<style></style>