<template>
    <div :class="{ container: true, active: props.active }">
        <img class="container__avatar" src="../assets/emilia_avatar.jpeg" />
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
    age: string
    active: boolean
    // notification: boolean
}>()
</script>

<style scoped lang="scss">
.active {
    background-color: white !important;
    background-image: linear-gradient(273.03deg, #e1eb58 0%, rgba(209, 237, 175, 0.473) 10%, rgba(255, 255, 255, 0) 80%);
}
.container {
    cursor: pointer;
    border-top: 2px solid #e1eb58;
    display: flex;
    height: 10vh;
    align-items: center;
    background-color: #eef4f6;
    &__avatar {
        border-radius: 50%;
        width: 6vh;
        margin-left: 1.5vw;
        margin-right: 1vw;
    }
    &__info {
        flex-direction: column;
        text-align: left;
        justify-content: center;
        &__name {
            margin: auto;
            padding-right: 5px;
            font-size: 1.1em;
            color: black;
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
