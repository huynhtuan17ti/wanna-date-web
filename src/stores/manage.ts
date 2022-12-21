import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { sampleLikedUserData, sampleUserData } from '../data/fake_data'
import { useMessageStore } from '../stores/message'

export const useManageStore = defineStore('manage', () => {
    const messageStore = useMessageStore()
    const activeIndex = ref(-1)

    const activeLikedUser = computed(() => (activeIndex.value >= 0 ? likedUserData[activeIndex.value] : undefined))
    const likedUserData = reactive(sampleLikedUserData.map((item, index) => ({ ...item, active: false })))

    function setActive(index: number) {
        if (activeIndex.value >= 0) likedUserData[activeIndex.value].active = false

        activeIndex.value = index
        if (activeIndex.value >= 0) likedUserData[activeIndex.value].active = true
    }
    function accept() {
        if (activeIndex.value >= 0) messageStore.appendUser(likedUserData[activeIndex.value])
        deny()
    }
    function deny() {
        likedUserData.splice(activeIndex.value, 1)
        activeIndex.value = Math.min(activeIndex.value, likedUserData.length - 1)
    }
    return { likedUserData, activeLikedUser, setActive, accept, deny }
})
