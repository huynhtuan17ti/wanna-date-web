<template>
    <div :class="{ container: true, active: props.active }">
        <img class="container__avatar" :src="avatarUrl" />
        <!-- <el-badge is-dot class="notify-dot" /> -->
        <div class="container__info">
            <p class="container__info__name">{{ userName }}, {{ age }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const props = defineProps<{
    userName: string
    avatarUrl: string
    age: number
    active: boolean
}>()
</script>

<style scoped lang="scss">
.active {
    background-color: white !important;
    // background-image: linear-gradient(273.03deg, #58c5a4 0%, rgba(175, 237, 206, 0.473) 10%, rgba(255, 255, 255, 0) 80%);
}
.container {
    margin: 10px;
    cursor: pointer;
    border: 2px solid #58c5a4;
    border-radius: 10px;
    display: flex;
    height: 10vh;
    align-items: center;
    background-color: #eef4f6;
    &__avatar {
        border-radius: 50%;
        width: 6vh;
        height: 6vh;
        margin-left: 1.5vw;
        margin-right: 1vw;
        border: 1px solid #58c5a4;
    }
    &__info {
        flex-direction: column;
        text-align: left;
        justify-content: center;
        &__name {
            margin: auto;
            padding-right: 5px;
            font-size: 1.1em;
            color: gray;
        }
        &__recent-message {
            margin-top: 0;
            font-size: 0.8em;
            color: #b7a4a4;
        }
    }
}
.notify-dot {
    position: absolute;
    left: 4.7vw;
    margin-top: -3vh;
}
</style>
