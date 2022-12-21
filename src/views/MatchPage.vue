<template>
    <div class="container">
        <vue-tinder ref="tinder" key-name="key" v-model:queue="queue" :max="3" :offset-y="10" allow-down @submit="onSubmit">
            <template #default="{ data }">
                <user-card v-model="data.user" card-type="normal"></user-card>
            </template>
            <template #like></template>
            <template #nope></template>
            <template #super></template>
            <template #down></template>
            <template v-slot:rewind>
                <span>REWIND</span>
            </template>
        </vue-tinder>
        <div class="btns">
            <img src="../assets/rewind.png" @click="decide('rewind')" />
            <img src="../assets/nope.png" @click="decide('nope')" />
            <img src="../assets/super-like.png" @click="decide('super')" />
            <img src="../assets/like.png" @click="decide('like')" />
            <img src="../assets/help.png" @click="decide('help')" />
        </div>
    </div>
    <img class="notification" :src="imageData.notification" />
</template>

<script lang="ts" setup>
import VueTinder from 'vue-tinder'
import { useSuggestionStore } from '../stores/suggestion'
import { computed, onMounted, ref } from 'vue'
import { User } from '~/models/user'
import { imageData } from '../constants/image'

const queue = ref<{ key: number; user: User | undefined }[]>([])
const history = ref<{ key: number; user: User | undefined }[]>([])
const tinder = ref(null)
const suggestionStore = useSuggestionStore()
const suggestList = computed(() => suggestionStore.suggestList)

suggestionStore.ids.forEach((id, index) => {
    queue.value.push({ key: index, user: suggestionStore.getUserFromId(id) })
})

const onSubmit = ({ type, key, item }) => {
    history.value.push(item)
}
const decide = (choice: string) => {
    if (choice === 'rewind') {
        if (history.value.length) {
            const item = history.value.pop()
            tinder.value.rewind([item])
        }
        return
    } else if (choice == 'help') {
        // TODO: handle help
        return
    }
    tinder.value.decide(choice)
}
</script>

<style scoped lang="scss">
.container {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    height: 100vh;
    .vue-tinder {
        position: relative;
        margin-bottom: 10vh;
        height: 75vh;
        width: 22vw;
        :deep(.tinder-card) {
            position: absolute;
        }
    }
    .btns {
        position: fixed;
        bottom: 5vh;
        margin: auto;
        margin-left: 3vw;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 7vh;
            border-radius: 50%;
            margin-right: 2vw;
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }
    }
}
.notification {
    position: absolute;
    width: 3vw;
    top: 1vh;
    right: 1vw;
}
</style>
