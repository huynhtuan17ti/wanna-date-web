<template>
    <el-container>
        <base-side />
        <el-container class="main-container">
            <router-view class="main-container__body" :key="$route.path" />
        </el-container>
    </el-container>
</template>

<style scoped lang="scss">
.main-container {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-basis: auto;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    .main-container__body {
        flex: 1;
        flex-basis: auto;
        overflow: hidden;
        height: 100vh;
    }
}
</style>
