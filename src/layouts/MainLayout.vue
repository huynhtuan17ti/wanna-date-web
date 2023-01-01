<template>
    <el-container v-if="!isFetching" v-loading="isFetching" element-loading-background="rgba(0,0,0,0.3)">
        <base-side />
        <el-container class="main-container">
            <router-view class="main-container__body" :key="$route.path" />
        </el-container>
    </el-container>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useAccountStore } from '../stores/account'
import { useUserStore } from '../stores/user'
const userStore = useUserStore()
const accountStore = useAccountStore()
const isFetching = ref(true)

onMounted(async () => {
    await accountStore.getUserInfo()
    await userStore.getAllUsers()
    isFetching.value = false
})
</script>

<style scoped lang="scss">
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    width: 100%;
    height: 100vh;

    .main-container__body {
        flex: 1;
        flex-basis: auto;
        overflow: hidden;
        height: 100vh;
    }
}
</style>
