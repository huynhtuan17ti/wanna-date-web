import { defineStore } from 'pinia'
import { computed } from 'vue'

export const useSuggestionStore = defineStore('suggestion', () => {
    const data = [
        { id: 'us2', name: 'Emilia', age: 22, image_url: 'https://i.pinimg.com/736x/6e/a9/85/6ea985f92af67dabd2398b4d084b6f06.jpg' },
        { id: 'us3', name: 'Violet', age: 18, image_url: 'https://i.pinimg.com/originals/9c/24/c0/9c24c0251d0370d327dfddf00daaf698.jpg' },
        { id: 'us4', name: 'Rem', age: 17, image_url: 'https://i.pinimg.com/736x/37/51/ac/3751ac130689f6381b9ff43bc75fae46.jpg' },
        { id: 'us5', name: 'Asuna', age: 19, image_url: 'https://i.pinimg.com/originals/6d/ba/c3/6dbac337e52dcc16bb70f72331a2c43e.jpg' },
        { id: 'us6', name: 'Power', age: 20, image_url: 'https://i.pinimg.com/originals/27/7a/db/277adb0609808b82b3f599e58d3bd19c.jpg' },
    ]

    const ids = computed(() => data.map(({ id }) => id))

    function getUserFromId(id: string) {
        return data.find((obj) => obj.id === id)
    }

    return { data, ids, getUserFromId }
})
