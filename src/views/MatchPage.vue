<template>
    <div class="container">
        <vue-tinder ref="tinder" key-name="key" v-model:queue="queue" :max="3" :offset-y="10" allow-down @submit="onSubmit">
            <template #default>
                <user-card></user-card>
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
            <img src="src/assets/rewind.png" />
            <img src="src/assets/nope.png" />
            <img src="src/assets/super-like.png" />
            <img src="src/assets/like.png" />
            <img src="src/assets/help.png" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import VueTinder from 'vue-tinder'
import { ref } from 'vue'
const queue = ref([])
const history = []
const tinder = ref(null)
for (let i = 0; i < 15; i++) {
    queue.value.push({ key: i })
}
const onSubmit = ({ type, key, item }) => {
    history.push(item)
}
const decide = (choice) => {
    if (choice === 'rewind') {
        if (history.length) {
            const item = history.pop()
            tinder.value.rewind([item])
        }
        return
    }
    tinder.value.decide(choice)
}
</script>

<style scoped lang="scss">
.container {
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
