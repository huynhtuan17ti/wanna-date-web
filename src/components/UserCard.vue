<template>
    <div class="card-container">
        <div class="card-wrapper">
            <el-image class="card-wrapper__header-image" :src="url" fit="cover"></el-image>
            <div class="card-wrapper__text-container">
                <span class="card-wrapper__text-container__user-header">XXXX, 20</span>
                <span class="card-wrapper__text-container__user-info">Lovely cute girl</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const url = ref('https://i.pinimg.com/736x/6e/a9/85/6ea985f92af67dabd2398b4d084b6f06.jpg')
</script>

<style scoped lang="scss">
.card-container {
    margin-top: 5vh;
    width: 25vw;
    height: 80vh;
    background: linear-gradient(to right, #d85076, #d5d850);
    border-radius: 20px;
    padding: 0.2em;
    background-clip: padding-box;
    .card-wrapper {
        flex-direction: column;
        height: inherit;
        border-radius: 15px;
        background: white;
        display: flex;
        &__header-image {
            border-radius: inherit;
            margin: 7px;
            max-height: 30vh;
        }
        &__text-container {
            margin-left: 15px;
            text-align: left;
            display: flex;
            line-height: 1.5em;
            flex-direction: column;
            &__user-header {
                font-size: 1.3em;
                font-weight: 600;
            }
            &__user-info {
            }
        }
    }
}
</style>
