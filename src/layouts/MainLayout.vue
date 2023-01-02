<template>
    <div class="loading" v-loading="isFetching" element-loading-background="rgba(0,0,0,0.3)">
        <el-container v-if="!isFetching">
            <base-side />
            <el-container class="main-container">
                <router-view class="main-container__body" :key="$route.path" />
            </el-container>
        </el-container>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useAccountStore } from '../stores/account'
import { useUserStore } from '../stores/user'
import { useManageStore } from '../stores/manage'

const userStore = useUserStore()
const accountStore = useAccountStore()
const manageStore = useManageStore()
const isFetching = ref(true)

onMounted(async () => {
    await accountStore.getUserInfo()
    await userStore.getAllUsers()
    await manageStore.getLikedUsers()
    isFetching.value = false
})
</script>

<style scoped lang="scss">
.loading {
    height: 100vh;
}
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
