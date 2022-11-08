<template>
    <div class="bar-container">
        <div class="bar-container__header">
            <img class="bar-container__header__image" src="src/assets/user.png" alt="Avatar" />
            <p class="bar-container__header__user-name">User name</p>
        </div>
        <div class="bar-container__match-area">
            <img class="bar-container__match-area__image" src="src/assets/match-cards.png" alt="Match" />
            <p class="bar-container__match-area__title">Dicover new matches</p>
        </div>
        <p class="bar-container__message-header">Messages</p>
        <message-tab user-name="Emilia" recent-message="Love you <3"></message-tab>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Location, Document, Menu as IconMenu, Setting } from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>

<style scoped lang="scss">
.bar-container {
    box-sizing: border-box;
    background-color: white;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.25);
    width: 25vw;
    height: 100vh;
    &__header {
        border-radius: 0px 15px 0px 0px;
        height: 10vh;
        background-image: linear-gradient(to right, #d95855, #dd7642);
        align-items: center;
        display: flex;
        &__image {
            border-radius: 50%;
            width: 6vh;
            height: 6vh;
            margin-left: 1.5vw;
            margin-right: 1vw;
        }
        &__user-name {
            font-size: 1.2em;
            color: white;
        }
    }
    &__match-area {
        height: 12vh;
        background-color: #eef4f6;
        align-items: center;
        display: flex;
        &__image {
            height: 7vh;
            margin-left: 3vw;
            margin-right: 1.5vw;
        }
        &__title {
            font-weight: 500;
            font-size: 1.2em;
        }
    }
    &__match-area:hover {
        background-color: white;
        background-image: linear-gradient(273.03deg, #d95855 0%, rgba(237, 176, 175, 0.473427) 24.81%, rgba(255, 255, 255, 0) 99.63%);
    }
    &__message-header {
        text-align: left;
        margin-left: 1vw;
        font-weight: 500;
        font-size: 1.1em;
        color: #d85178;
    }
}
</style>
