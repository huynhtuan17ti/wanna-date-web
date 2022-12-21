<template>
    <el-row class="container">
        <el-scrollbar>
            <signup-form></signup-form>
        </el-scrollbar>
    </el-row>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
    position: relative;
    height: 100vh;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/bgr.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
