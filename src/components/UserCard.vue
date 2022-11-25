<template>
    <div class="card-container">
        <div class="card-wrapper">
            <el-image class="card-wrapper__header-image" :src="user.avatar_url" fit="cover"></el-image>
            <div class="card-wrapper__text-container">
                <span class="card-wrapper__text-container__user-header">{{ user.name }}, {{ user.age }}</span>
                <span class="card-wrapper__text-container__user-info">{{ user.short_introduce }}</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { User } from '~/models/user'
const props = defineProps<{
    modelValue: User
}>()

const emit = defineEmits(['update:modelValue'])

// -------------- setup for v-model ------------------
const user = computed<User>({
    get() {
        return props.modelValue
    },

    set(value) {
        return emit('update:modelValue', value)
    },
})
</script>

<style scoped lang="scss">
.card-container {
    width: 22vw;
    height: 75vh;
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
            padding-left: 15px;
            padding-right: 15px;
            text-align: left;
            display: flex;
            line-height: 1.5em;
            flex-direction: column;
            &__user-header {
                font-size: 1.3em;
                font-weight: 600;
            }
            &__user-info {
                margin-top: 10px;
            }
        }
    }
}
</style>
