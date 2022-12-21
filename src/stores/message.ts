import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'
import { User } from '../models/user'
import { sampleUserMessageData } from '../data/fake_data'

export const useMessageStore = defineStore('message', () => {
    const userMessageData = reactive(sampleUserMessageData.map((item, index) => ({ ...item, active: false })))
    const activeIndex = ref(-1)
    const activeMessage = computed(() => (activeIndex.value >= 0 ? userMessageData[activeIndex.value].message : undefined))
    const activeUser = computed(() => (activeIndex.value >= 0 ? userMessageData[activeIndex.value].user : undefined))

    function setActive(index: number) {
        if (activeIndex.value >= 0) userMessageData[activeIndex.value].active = false

        activeIndex.value = index
        if (activeIndex.value >= 0) userMessageData[activeIndex.value].active = true
    }

    function appendUser(user: User) {
        userMessageData.push({ user: user, message: [], active: false })
        console.log(userMessageData)
    }

    function appendMessage(content: string, side: true) {
        if (activeMessage.value === undefined) return
        userMessageData[activeIndex.value].message.push({
            content: content,
            side: side,
        })
    }

    return { userMessageData, activeMessage, activeUser, appendUser, setActive, appendMessage }
})
