<template>
    <div>
        <chat-box
            v-for="(item, index) in data"
            :key="index"
            :user-name="item.user.user_name"
            :avatar-url="item.user.avatar_url"
            :recent-message="getRecentMessage(item.message)"
            :active="item.active"
            @click="onClickChatBox(index)"
        ></chat-box>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, watch, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '../stores/message'

onMounted(async () => {
    await messageStore.fetchAllMessages()
})

const router = useRouter()
const messageStore = useMessageStore()
const data = reactive(messageStore.userMessageData)

const getRecentMessage = (message) => {
    if (message.length == 0) return ''
    return message[message.length - 1].content
}

const onClickChatBox = (index: number) => {
    messageStore.setActive(index)
    router.push('/chat')
}
</script>
