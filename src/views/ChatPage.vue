<template>
    <div>
        <el-row class="container">
            <el-col :span="16">
                <div class="message-area">
                    <chat-area></chat-area>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="setting-area" v-if="chatUser">
                    <el-image class="setting-area__user-image" :src="chatUser.avatar_url"></el-image>
                    <p>You and {{ chatUser.user_name }} liked each other a month ago</p>
                    <div class="setting-area__remove">
                        <el-button type="warning" @click="centerDialogVisible = true">Unlike</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-dialog v-model="centerDialogVisible" title="Warning" width="30%" align-center>
            <span>Do you sure that you want to unlike this user?</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">Cancel</el-button>
                    <el-button type="primary" @click="onUnlikeUser()"> Confirm </el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useMessageStore } from '../stores/message'
import { useAccountStore } from '../stores/account'

const messageStore = useMessageStore()
const accountStore = useAccountStore()
const chatUser = computed(() => messageStore.chatUser)

const centerDialogVisible = ref(false)
const onUnlikeUser = async () => {
    centerDialogVisible.value = false
    await accountStore.unlikedUser(chatUser.value.user)
    await messageStore.fetchAllMessages(true)
    messageStore.setActive(-1)
}
</script>

<style scoped lang="scss">
.message-area {
    background-color: #f4fafc;
    height: 100vh;
}
.setting-area {
    background-color: white;
    box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.25);
    height: 100vh;
    padding: 5vh 1vw 1vw 0;
    &__user-image {
        width: 10vw;
        height: 10vw;
        border-radius: 50%;
        border: 2px solid #d85076;
    }
}
</style>
