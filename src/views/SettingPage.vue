<template>
    <div class="container">
        <div class="container__setting-area"></div>
    </div>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.container {
    height: 100vh;
    display: flex;
    flex-direction: row;
    flex-flow: row-reverse;
    &__setting-area {
        width: 30vw;
        background: white;
        border-radius: 15px 0px 0px 15px;
        box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.25);
    }
}
</style>
