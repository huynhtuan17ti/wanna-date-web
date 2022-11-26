<template>
    <el-row class="container">
        <el-col :span="16">
            <div class="message-area">
                <chat-area></chat-area>
            </div>
        </el-col>
        <el-col :span="8">
            <div class="setting-area"></div>
        </el-col>
    </el-row>
</template>

<style scoped lang="scss">
.message-area {
    background-color: #f4fafc;
    height: 100vh;
}
.setting-area {
    background-color: white;
    box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.25);
    height: 100vh;
}
</style>
