<template>
    <div class="bar-container">
        <div class="bar-container__header">
            <img class="bar-container__header__image" :src="user.avatar_url" alt="Avatar" />
            <p class="bar-container__header__user-name">{{ user.name }}</p>
            <span class="material-symbols-rounded bar-container__header__user-setting" @click="onClickSettingButton()"
                >manage_accounts</span
            >
            <!-- <img class="bar-container__header__user-setting" src="../assets/setting.png" @click="onClickSettingButton()" /> -->
        </div>
        <div :class="{ 'bar-container__match-area': true, 'bar-container__match-area-active': isMatchActive }" @click="onClickMatchArea()">
            <img class="bar-container__match-area__image" :src="imageData.cards" />
            <!-- <span class="material-symbols-sharp bar-container__match-area__image">view_carousel</span> -->
            <!-- <img class="bar-container__match-area__image" src="../assets/match-cards.png" alt="Match" /> -->
            <p class="bar-container__match-area__title">Dicover new matches</p>
        </div>
        <el-tabs class="bar-container__tabs-header" type="card">
            <el-tab-pane label="Messages">
                <chat-list />
            </el-tab-pane>
            <el-tab-pane label="Liked">
                <liked-list />
            </el-tab-pane>
        </el-tabs>
        <!-- <p class="bar-container__message-header">Messages</p> -->
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'
import { useManageStore } from '../stores/manage'
import { useMessageStore } from '../stores/message'
import { imageData } from '../constants/image'

const isMatchActive = ref(true)
const router = useRouter()

const userStore = useUserStore()
const manageStore = useManageStore()
const messageStore = useMessageStore()

const user = computed(() => userStore.user)

const onClickMatchArea = () => {
    isMatchActive.value = true
    manageStore.setActive(-1)
    messageStore.setActive(-1)
    router.push('/match')
}

const onClickSettingButton = () => {
    isMatchActive.value = false
    manageStore.setActive(-1)
    messageStore.setActive(-1)
    router.push('/setting')
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
        @media only screen and (max-width: 800px) {
            &__user-name {
                font-size: 0.8em !important;
            }
        }
        &__user-name {
            font-size: 1.1em;
            color: white;
            font-weight: bold;
        }
        &__user-setting {
            position: absolute;
            font-size: 5vh;
            left: 19vw;
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
            width: 3.5vw;
            font-size: 7vh;
            color: #d85178;
            margin-left: 3vw;
            margin-right: 1.5vw;
        }
        @media only screen and (max-width: 1100px) {
            &__title {
                font-size: 0.8em !important;
            }
        }
        &__title {
            font-weight: bold;
            font-size: 1em;
        }
    }
    &__match-area:hover,
    &__match-area-active {
        background-color: white;
        background-image: linear-gradient(273.03deg, #d95855 0%, rgba(237, 176, 175, 0.473427) 24.81%, rgba(255, 255, 255, 0) 99.63%);
    }
}
</style>

<style lang="scss"></style>
