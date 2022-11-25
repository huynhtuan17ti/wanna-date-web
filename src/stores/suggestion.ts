import { defineStore } from 'pinia'
import { computed } from 'vue'
import { User } from '../models/user'
import { userData } from '../data/fake_data'

export const useSuggestionStore = defineStore('suggestion', () => {
    const suggestList: User[] = userData

    const ids = computed(() => suggestList.map(({ id }) => id))

    function getUserFromId(id: string) {
        return suggestList.find((obj) => obj.id === id)
    }

    return { suggestList, ids, getUserFromId }
})
