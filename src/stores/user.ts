import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { User } from '../models/user'
import { useAccountStore } from './account'
import { get_all_user, get_specific_user } from '../services/user'
import { sampleUserData, sampleUserId } from '../data/fake_data'

export const useUserStore = defineStore('user', () => {
    const accountStore = useAccountStore()
    const user_list = ref<User[]>([])
    const suggest_list = computed(() => user_list.value.filter((item) => item.user !== accountStore.user?.user))

    async function getAllUsers() {
        if (user_list.value.length > 0) return
        const { data } = await get_all_user()
        for (let index = 0; index < data.length; index++) {
            const user_item = await fetchUserFromId(data[index].user_id)
            if (user_item !== undefined) user_list.value.push(user_item)
        }
    }

    async function fetchUserFromId(user_id: number) {
        const { data } = await get_specific_user(user_id)
        if (data.user_name === null) return undefined
        return data
    }

    function getUserFromId(user_id: number) {
        return user_list.value.find((item) => item.user === user_id)
    }

    return { user_list, suggest_list, getUserFromId, getAllUsers }
})
