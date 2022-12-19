import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { User } from '../models/user'
import { sampleUserId, sampleUserData } from '../data/fake_data'

export const useUserStore = defineStore('user', () => {
    const userIdx: number | undefined = sampleUserData.findIndex((obj) => obj.id === sampleUserId)
    const user = ref(sampleUserData[userIdx])

    function update(user_info: User) {
        if (userIdx === undefined) return
        user.value = user_info
    }

    return { user, update }
})
