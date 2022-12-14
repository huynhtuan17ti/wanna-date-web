<template>
    <div :class="{ container: true, 'container-right-side': side }">
        <img class="user_avatar" :src="props.avatarUrl" alt="Avatar" />
        <div :class="{ message_container: true, 'left-side': !side, 'right-side': side }">
            <span class="container__message">{{ props.message }}</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { imageData } from '../constants/image'
const props = defineProps<{
    userSide: Boolean
    message: String
    avatarUrl: String
}>()

const side = computed(() => props.userSide)
</script>

<style scoped lang="scss">
.container {
    flex-direction: row !important;
    margin-left: 15px;
    align-items: center;

    .user_avatar {
        border-radius: 50%;
        height: 40px;
    }
}

.container-right-side {
    flex-direction: row-reverse !important;
    margin-right: 15px;
}

.message_container {
    display: block;
    margin: 8px;
    border-radius: 5px;
    max-width: 25vw;
    height: fit-content !important;
    width: fit-content;

    text-align: left;
    flex-direction: column !important;
    padding: 10px;
    &__message {
        color: white;
    }
}

.left-side {
    background-color: #d5d850 !important;
    margin-right: auto;
    margin-left: 10px;
}

.right-side {
    background-color: #d85076 !important;
    margin-right: 10px;
    margin-left: auto;
    color: white;
}
</style>
