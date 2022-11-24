<template>
    <div class="card-container">
        <div class="card-wrapper">
            <el-image class="card-wrapper__header-image" :src="user.image_url" fit="cover"></el-image>
            <div class="card-wrapper__text-container">
                <span class="card-wrapper__text-container__user-header">{{ user.name }}, {{ user.age }}</span>
                <span class="card-wrapper__text-container__user-info">Lovely cute girl</span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useSuggestionStore } from '../stores/suggestion'
const props = defineProps<{
    userId: string
}>()

const suggestionStore = useSuggestionStore()
const user = computed(() => suggestionStore.getUserFromId(props.userId))
console.log(user.value)
const url = ref('https://i.pinimg.com/736x/6e/a9/85/6ea985f92af67dabd2398b4d084b6f06.jpg')
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
