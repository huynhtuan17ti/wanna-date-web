<template>
    <div :key="triggerKey">
        <liked-box v-for="(item, index) in data" :key="index" :user-name="item.name" :age="19" :active="item.active" @click="onClickChatBox(index)"></liked-box>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { messageTabData } from '../data/fake_data'

const router = useRouter()
const triggerKey = ref(0)
const data = computed(() => messageTabData.map((item, index) => ({ ...item, active: false })))

let activeIndex = -1
const onClickChatBox = (index: number) => {
    console.log(index, activeIndex)
    if (activeIndex >= 0) data.value[activeIndex].active = false
    activeIndex = index
    data.value[activeIndex].active = true
    triggerKey.value += 1
    router.push('/chat')
}
</script>
