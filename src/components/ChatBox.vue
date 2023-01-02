<template>
    <div :class="{ container: true, active: props.active }">
        <img class="container__avatar" :src="avatarUrl" />
        <!-- <el-badge is-dot class="notify-dot" /> -->
        <div class="container__info">
            <p class="container__info__name">{{ userName }}</p>
            <p class="container__info__recent-message">{{ handleRecentMessage }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const props = defineProps<{
    userName: string
    avatarUrl: string
    recentMessage: string
    active: boolean
    // notification: boolean
}>()

const maxLengthMessage = 25
const handleRecentMessage = computed(() =>
    props.recentMessage.length > maxLengthMessage ? props.recentMessage.substring(0, maxLengthMessage) + '...' : props.recentMessage
)
</script>

<style scoped lang="scss">
.active {
    background-color: white !important;
    background-image: linear-gradient(273.03deg, #d95855 0%, rgba(237, 176, 175, 0.473427) 10%, rgba(255, 255, 255, 0) 80%);
}
.container {
    cursor: pointer;
    border-top: 2px solid #d85076;
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
        border: 1px solid #d85076;
    }
    &__info {
        height: 40%;
        flex-direction: column;
        text-align: left;
        &__name {
            margin-top: 0px;
            padding-right: 5px;
            font-size: 1em;
            margin-bottom: 3px;
            color: #d85076;
            font-weight: bold;
        }
        &__recent-message {
            margin-top: 0;
            margin-right: 5px;
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
