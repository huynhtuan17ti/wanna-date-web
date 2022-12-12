<template>
    <el-row class="container">
        <!-- <el-image class="setting-area__user-image" :src="srcImage"></el-image> -->
        <div>
            <signin-form></signin-form>
        </div>
    </el-row>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-image: url('../assets/bgr.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
}
</style>
