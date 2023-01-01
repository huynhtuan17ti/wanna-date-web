import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { sampleLikedUserData, sampleUserData } from '../data/fake_data'
import { useMessageStore } from '../stores/message'
import { useAccountStore } from './account'
import { useUserStore } from './user'
import { get_liked_users } from '../services/user'

export const useManageStore = defineStore('manage', () => {
    const messageStore = useMessageStore()
    const accountStore = useAccountStore()
    const userStore = useUserStore()

    const activeIndex = ref(-1)
    const activeLikedUser = computed(() => (activeIndex.value >= 0 ? likedUserData[activeIndex.value] : undefined))
    const likedUserData = reactive<any>([])

    async function getLikedUsers() {
        const res = await get_liked_users()
        if (!res.data) return false
        for (let index = 0; index < res.data.length; index++) {
            if (res.data[index].reactor_id_id !== accountStore.user?.user) {
                const user_item = await userStore.getUserFromId(res.data[index].reactor_id_id)
                if (user_item === undefined) continue
                likedUserData.push({ ...user_item, active: false })
            }
        }
        return true
    }

    function setActive(index: number) {
        if (activeIndex.value >= 0) likedUserData[activeIndex.value].active = false
        activeIndex.value = index

        if (activeIndex.value >= 0) likedUserData[activeIndex.value].active = true
    }

    function accept() {
        // messageStore.appendUser(likedUserData[activeIndex.value])
        accountStore.likeUser(likedUserData[activeIndex.value].user)
        likedUserData.splice(activeIndex.value, 1)
        activeIndex.value = Math.min(activeIndex.value, likedUserData.length - 1)
    }
    function deny() {
        accountStore.unlikedUser(likedUserData[activeIndex.value].user)
        likedUserData.splice(activeIndex.value, 1)
        activeIndex.value = Math.min(activeIndex.value, likedUserData.length - 1)
    }
    return { likedUserData, activeLikedUser, setActive, getLikedUsers, accept, deny }
})
