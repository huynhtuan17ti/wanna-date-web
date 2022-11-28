<template>
    <div class="container">
        <div class="container__input-area">
            <span class="container__input-area__add-icon material-symbols-outlined"> sentiment_satisfied </span>
            <el-input class="container__input-area__input-message" v-model="input" placeholder="Aa" @keyup.enter="onSend()" />
            <span class="container__input-area__send-icon material-symbols-outlined" style="cursor: pointer" @click="onSend()">send</span>
        </div>
        <!-- Messages area -->
        <el-scrollbar ref="scrollbarRef" class="container__message-area">
            <message-box v-for="(item, index) in messageData" :key="index" :user-side="item.side" :message="item.content"></message-box>
        </el-scrollbar>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ElScrollbar } from 'element-plus'

const messageData = ref([
    { content: 'Ca lin chi', side: true },
    { content: 'Bing Chilling', side: true },
    { content: 'Shitty', side: false },
    { content: 'Do you see the sky? Everything kinda bloody', side: true },
    { content: 'Yeh, I see. Also some cross things.', side: false },
    { content: 'Fuck everyone around me became some shits of orange.', side: true },
    { content: 'WDYM?', side: false },
    { content: 'Wait, wtf, my friends, they turned into orange liquid, smell like blood', side: false },
    { content: 'Fuck, its the end of evangelion, we re gonna die!', side: false },
    { content: 'Hello, are u still there?', side: false },
])

const input = ref('')
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()

const onSend = () => {
    if (input.value === '') return
    messageData.value.push({
        content: input.value,
        side: true,
    })
    input.value = ''
    // NOTE: temporary fix
    scrollbarRef.value?.setScrollTop(100000000)
}
</script>

<style scoped lang="scss">
.container {
    position: relative;
    background-color: transparent;
    height: inherit;
    display: flex;
    flex-direction: column-reverse;
    &__message-area {
        height: 100%;
    }
    &__input-area {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 8vh;
        padding-left: 2vw;
        padding-right: 2vw;
        &__add-icon {
            color: yellow;
            font-size: 32px;
            margin-right: 10px;
        }
        &__input-message {
            width: 43vw;
            height: 40px;
        }
        &__send-icon {
            color: #d85076;
            font-size: 32px;
            margin-left: 12px;
        }
    }
}
</style>
