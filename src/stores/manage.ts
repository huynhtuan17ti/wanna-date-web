import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { sampleLikedUserData, sampleUserData } from '../data/fake_data'
import { useMessageStore } from '../stores/message'
import { useAccountStore } from './account'
import { useUserStore } from './user'
import { get_liked_users, get_users_liked } from '../services/user'

export const useManageStore = defineStore('manage', () => {
    const accountStore = useAccountStore()
    const userStore = useUserStore()
    const messageStore = useMessageStore()

    const activeIndex = ref(-1)
    const activeLikedUser = computed(() => (activeIndex.value >= 0 ? likedUserData[activeIndex.value] : undefined))
    const userLikedIds = ref<number[]>([])
    const likedUserData = reactive<any>([])

    const suggestUserData = computed(() =>
        userStore.user_list.filter(
            (item) =>
                item.user !== accountStore.user?.user &&
                item.is_female !== accountStore.user?.is_female &&
                !userLikedIds.value.includes(item.user)
        )
    )

    async function getUsersLiked() {
        const { data } = await get_users_liked()
        return data.map((item) => item.receiver_id_id)
    }

    async function getLikedUsers() {
        const res = await get_liked_users()
        if (!res.data) return false
        userLikedIds.value = await getUsersLiked()

        likedUserData.splice(0)
        for (let index = 0; index < res.data.length; index++) {
            if (res.data[index].reactor_id_id !== accountStore.user?.user && !userLikedIds.value.includes(res.data[index].reactor_id_id)) {
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

    async function accept() {
        await accountStore.likeUser(likedUserData[activeIndex.value].user)
        likedUserData.splice(activeIndex.value, 1)
        activeIndex.value = Math.min(activeIndex.value, likedUserData.length - 1)

        await messageStore.fetchAllMessages(true)
    }
    function deny() {
        // accountStore.unlikedUser(likedUserData[activeIndex.value].user)
        likedUserData.splice(activeIndex.value, 1)
        activeIndex.value = Math.min(activeIndex.value, likedUserData.length - 1)
    }
    return { suggestUserData, likedUserData, activeLikedUser, setActive, getLikedUsers, accept, deny }
})
