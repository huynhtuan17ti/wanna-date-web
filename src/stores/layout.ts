import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useLayoutStore = defineStore('layout', () => {
    const activeStatus: boolean[] = [false, false, false, false]
    const layoutMap = {
        match: 0,
        message: 1,
        liked: 2,
        setting: 3,
    }

    function getStatus(layout: string) {
        return activeStatus[layoutMap[layout]]
    }

    function setStatus(layout: string) {
        activeStatus.fill(false)
        activeStatus[layoutMap[layout]] = true
    }

    return { setStatus, activeStatus, getStatus }
})
