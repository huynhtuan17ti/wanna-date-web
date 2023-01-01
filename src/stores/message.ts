import { defineStore } from 'pinia'
import { computed, ref, reactive } from 'vue'
import { User } from '../models/user'
import { useAccountStore } from './account'
import { useUserStore } from './user'
import { get_all_messages, get_message_thread, send_single_message } from '../services/message'
import { sampleMessageData } from '../data/fake_data'

export const useMessageStore = defineStore('message', () => {
    const accountStore = useAccountStore()
    const userStore = useUserStore()

    let userMessageData = reactive<any>([])
    const activeIndex = ref(-1)

    const chatThread = computed(() => (activeIndex.value >= 0 ? userMessageData[activeIndex.value].message : undefined))
    const chatUser = computed(() => (activeIndex.value >= 0 ? userMessageData[activeIndex.value].user : undefined))

    function setActive(index: number) {
        if (activeIndex.value >= 0) userMessageData[activeIndex.value].active = false

        activeIndex.value = index
        if (activeIndex.value >= 0) userMessageData[activeIndex.value].active = true
    }

    async function fetchAllMessages() {
        const { data } = await get_all_messages()
        if (userMessageData.length > 0) return
        for (let index = 0; index < data.length; index++) {
            const item = data[index]
            const user_id = item.user_id_1_id === accountStore.user?.user ? item.user_id_2_id : item.user_id_1_id
            const res = await get_message_thread(user_id)
            console.log(res.data)
        }
        data.forEach((item) => {
            const user_id = item.user_id_1_id === accountStore.user?.user ? item.user_id_2_id : item.user_id_1_id
            const cur_user = userStore.getUserFromId(user_id)
            userMessageData.push({ user: cur_user, active: false, message: sampleMessageData })
        })
    }

    async function sendMessage(content: string) {
        const cur_message = userMessageData[activeIndex.value]
        await send_single_message(cur_message.user.user, content)
    }

    return { userMessageData, fetchAllMessages, chatThread, chatUser, setActive, sendMessage }
})
