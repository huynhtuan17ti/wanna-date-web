<template>
    <div class="container">
        <user-card v-if="user" v-model="user" card-type="liked"></user-card>
        <div v-if="user" class="btns">
            <img src="../assets/nope.png" @click="decide('nope')" />
            <img src="../assets/like.png" @click="decide('like')" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useManageStore } from '../stores/manage'

const manageStore = useManageStore()
const user = computed(() => manageStore.activeLikedUser)

const decide = async (choice: string) => {
    if (choice === 'like') await manageStore.accept()
    else manageStore.deny()
}
</script>

<style scoped lang="scss">
.container {
    margin-top: 5vh;
    display: flex;
    justify-content: center;
    height: 100vh;
    .btns {
        position: fixed;
        bottom: 8vh;
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
