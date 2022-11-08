<template>
    <el-container>
        <base-side />
        <el-container class="main-container">
            <el-scrollbar class="main-container__body">
                <router-view :key="$route.path" />
            </el-scrollbar>
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
    height: 100vh;

    .main-container__body {
        flex: 1;
        flex-basis: auto;
        box-sizing: border-box;
    }
}
</style>
