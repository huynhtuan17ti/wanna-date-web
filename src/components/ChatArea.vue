<template>
    <div class="container">
        <div class="container__input-area">
            <span class="container__input-area__add-icon material-symbols-outlined"> sentiment_satisfied </span>
            <el-input class="container__input-area__input-message" v-model="input" placeholder="Aa" />
            <span class="container__input-area__send-icon material-symbols-outlined">send</span>
        </div>
        <div class="container__message-area"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue-demi'

const input = ref('')
</script>

<style scoped lang="scss">
.container {
    position: relative;
    background-color: transparent;
    height: inherit;
    display: flex;
    flex-direction: column-reverse;
    &__message-area {
        height: 100%;
    }
    &__input-area {
        display: flex;
        flex-direction: row;
        align-items: center;
        min-height: 8vh;
        padding-left: 2vw;
        padding-right: 2vw;
        &__add-icon {
            color: yellow;
            font-size: 32px;
            margin-right: 10px;
        }
        &__input-message {
            width: 43vw;
            height: 40px;
        }
        &__send-icon {
            color: #d85076;
            font-size: 32px;
            margin-left: 12px;
        }
    }
}
</style>
