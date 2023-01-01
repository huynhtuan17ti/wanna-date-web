<template>
    <liked-box
        v-for="(item, index) in likedUsers"
        :key="index"
        :user-name="item.user_name"
        :age="18"
        :avatar-url="item.avatar_url"
        :active="item.active"
        @click="onClickChatBox(index)"
    ></liked-box>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useManageStore } from '../stores/manage'

onMounted(async () => {
    await manageStore.getLikedUsers()
})

const router = useRouter()
const manageStore = useManageStore()
const likedUsers = reactive(manageStore.likedUserData)

const onClickChatBox = (index: number) => {
    manageStore.setActive(index)
    router.push('/liked')
}
</script>
