<template>
    <div class="bar-container">
        <div class="bar-container__header">
            <img class="bar-container__header__image" src="../assets/avatar.jpg" alt="Avatar" />
            <p class="bar-container__header__user-name">Kkura</p>
            <span class="material-symbols-rounded bar-container__header__user-setting" @click="onClickSettingButton()">manage_accounts</span>
            <!-- <img class="bar-container__header__user-setting" src="../assets/setting.png" @click="onClickSettingButton()" /> -->
        </div>
        <div :class="{ 'bar-container__match-area': true, 'bar-container__match-area-active': isMatchActive }" @click="onClickMatchArea()">
            <span class="material-symbols-sharp bar-container__match-area__image">view_carousel</span>
            <!-- <img class="bar-container__match-area__image" src="../assets/match-cards.png" alt="Match" /> -->
            <p class="bar-container__match-area__title">Dicover new matches</p>
        </div>
        <p class="bar-container__message-header">Messages</p>
        <message-tab user-name="Emilia" recent-message="Love you <3" :active="onActiveMessageTab" @click="onClickMessageTab()"></message-tab>
        <message-tab user-name="Emilia" recent-message="Love you <3" :active="false" @click="onClickMessageTab()"></message-tab>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isMatchActive = ref(true)
const router = useRouter()

const onClickMatchArea = () => {
    isMatchActive.value = true
    onActiveMessageTab.value = false
    router.push('/match')
}

const onClickSettingButton = () => {
    isMatchActive.value = false
    onActiveMessageTab.value = false
    router.push('/setting')
}

const onActiveMessageTab = ref(false)
const onClickMessageTab = () => {
    onActiveMessageTab.value = true
    isMatchActive.value = false
    router.push('/chat')
}
</script>

<style scoped lang="scss">
.bar-container {
    z-index: 100;
    box-sizing: border-box;
    background-color: white;
    border-radius: 0px 15px 15px 0px;
    box-shadow: 5px 0px 4px rgba(0, 0, 0, 0.25);
    width: 30vw;
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
            font-weight: bold;
        }
        &__user-setting {
            font-size: 5vh;
            margin-left: 10vw;
            color: white;
            cursor: pointer;
        }
    }
    &__match-area {
        height: 11vh;
        background-color: #eef4f6;
        align-items: center;
        display: flex;
        cursor: pointer;
        &__image {
            font-size: 7vh;
            color: #d85178;
            margin-left: 3vw;
            margin-right: 1.5vw;
        }
        &__title {
            font-weight: bold;
            font-size: 1.1em;
        }
    }
    &__match-area:hover,
    &__match-area-active {
        background-color: white;
        background-image: linear-gradient(273.03deg, #d95855 0%, rgba(237, 176, 175, 0.473427) 24.81%, rgba(255, 255, 255, 0) 99.63%);
    }
    &__message-header {
        text-align: left;
        margin-left: 1vw;
        font-weight: bold;
        font-size: 1.1em;
        color: #d85178;
    }
}
</style>
