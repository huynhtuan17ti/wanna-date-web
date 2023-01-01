<template>
    <div :class="cardStyle">
        <div class="card-wrapper">
            <el-image class="card-wrapper__header-image" :src="user.header_url" fit="cover"></el-image>
            <div class="card-wrapper__text-container">
                <span class="card-wrapper__text-container__user-header">{{ user.user_name }}, 18</span>
                <span class="card-wrapper__text-container__user-introduce">{{ user.about_me }}</span>
                <div class="card-wrapper__text-container__user-info">
                    <span class="material-symbols-outlined" style="color: #2f80e8"> work </span>
                    <span style="margin-left: 5px">{{ user.company }}</span>
                </div>
                <div class="card-wrapper__text-container__user-info">
                    <span class="material-symbols-outlined" style="color: #2f80e8"> interests </span>
                    <span style="margin-left: 5px">{{ user.hobby }}</span>
                </div>
                <div class="card-wrapper__text-container__user-info">
                    <span class="material-symbols-outlined" style="color: #2f80e8"> home_pin </span>
                    <span style="margin-left: 5px">{{ user.country }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { User } from '~/models/user'
const props = defineProps<{
    modelValue: User
    cardType: String
}>()

const cardType = computed(() => props.cardType)

const cardStyle = computed(() => ({
    'card-container': true,
    'is-normal': cardType.value === 'normal',
    'is-liked': cardType.value === 'liked',
    'is-super-liked': cardType.value === 'super-liked',
}))

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
.is-normal {
    background: linear-gradient(to right, #d85076, #d5d850);
}
.is-liked {
    background: linear-gradient(to right, #d85076, #82edc7);
}
.is-super-liked {
    background: linear-gradient(to right, #d85076, blue);
}
.card-container {
    width: 22vw;
    height: 75vh;
    // background: linear-gradient(to right, #d85076, #d5d850);
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
            &__user-introduce {
                margin-top: 10px;
            }
            &__user-info {
                margin-top: 10px;
                display: flex;
            }
        }
    }
}
</style>
