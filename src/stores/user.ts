import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { User } from '../models/user'
import { currentUserId, userData } from '../data/fake_data'

export const useUserStore = defineStore('user', () => {
    const userIdx: number | undefined = userData.findIndex((obj) => obj.id === currentUserId)
    const user = ref(userData[userIdx])

    function update(user_info: User) {
        if (userIdx === undefined) return
        user.value = user_info
    }

    return { user, update }
})
