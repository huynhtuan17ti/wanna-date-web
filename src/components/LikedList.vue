<template>
    <el-scrollbar>
        <liked-box
            v-for="(item, index) in likedUsers"
            :key="index"
            :user-name="item.user_name"
            :age="18"
            :avatar-url="item.avatar_url"
            :active="item.active"
            @click="onClickChatBox(index)"
        ></liked-box>
        <div v-if="likedUsers.length == 0" style="display: flex; flex-direction: column; align-items: center">
            <el-image class="no-like-image" :src="imageData.cry"></el-image>
            <span class="no-like-message">No worries! Someone will like you</span>
        </div>
    </el-scrollbar>
</template>

<script lang="ts" setup>
import { computed, ref, reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useManageStore } from '../stores/manage'
import { imageData } from '../constants/image'

const router = useRouter()
const manageStore = useManageStore()
const likedUsers = reactive(manageStore.likedUserData)

const onClickChatBox = (index: number) => {
    manageStore.setActive(index)
    router.push('/liked')
}
</script>

<style scoped lang="scss">
.no-like-image {
    width: 8vw;
    height: 8vw;
    margin-top: 5vh;
}
.no-like-message {
    margin-top: 3vh;
    color: #d85076;
}
</style>
