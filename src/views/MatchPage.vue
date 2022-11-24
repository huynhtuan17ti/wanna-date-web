<template>
    <div class="container">
        <vue-tinder ref="tinder" key-name="key" v-model:queue="queue" :max="3" :offset-y="10" allow-down @submit="onSubmit">
            <template #default="{ data }">
                <user-card :user-id="data.user_id"></user-card>
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
            <img src="src/assets/rewind.png" @click="decide('rewind')" />
            <img src="src/assets/nope.png" @click="decide('nope')" />
            <img src="src/assets/super-like.png" @click="decide('super')" />
            <img src="src/assets/like.png" @click="decide('like')" />
            <img src="src/assets/help.png" @click="decide('help')" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import VueTinder from 'vue-tinder'
import { useSuggestionStore } from '../stores/suggestion'
import { onMounted, ref } from 'vue'

const queue = ref<{ key: number; user_id: string }[]>([])
const history = ref<{ key: number; user_id: string }[]>([])
const tinder = ref(null)
const suggestionStore = useSuggestionStore()

suggestionStore.ids.forEach((id, index) => {
    queue.value.push({ key: index, user_id: id })
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
        position: absolute;
        left: 0;
        right: 0;
        margin: auto;
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
            width: 70px;
            border-radius: 50%;
            margin-right: 2vw;
            box-shadow: 0 4px 9px rgba(0, 0, 0, 0.15);
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
        }
    }
}
</style>
