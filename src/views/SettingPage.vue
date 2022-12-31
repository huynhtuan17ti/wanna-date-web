<template>
    <div class="container" v-if="!userStore.isFetching">
        <el-scrollbar class="container__setting-area">
            <h2 class="container__setting-area__header">Settings</h2>
            <div class="container__setting-area__setting-option">
                <el-form :model="currentUser" label-width="auto" size="large" label-position="top">
                    <!-- TODO: reimplement avatar upload -->
                    <el-form-item label="Header image">
                        <el-upload
                            class="header-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="header" />
                            <el-icon v-else class="header-uploader-icon"><Plus /></el-icon>
                        </el-upload>
                    </el-form-item>
                    <el-form-item label="Upload avatar">
                        <div class="avatar-box">
                            <img class="avatar-box__img" :src="currentUser.avatar_url" />
                            <p class="avatar-box__text">Click here to change your avatar</p>
                        </div>
                    </el-form-item>
                    <el-form-item label="Your name">
                        <el-input v-model="currentUser.name" />
                    </el-form-item>
                    <el-form-item label="Your age">
                        <el-input-number v-model="currentUser.age" :min="16" :max="100" />
                    </el-form-item>
                    <el-form-item label="Gender">
                        <el-select v-model="currentUser.is_female" clearable>
                            <el-option v-for="item in genderOptions" :key="item.key" :label="item.label" :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="Short introduction">
                        <el-input v-model="currentUser.short_introduce" />
                    </el-form-item>
                    <el-form-item label="Work">
                        <el-input v-model="currentUser.work" />
                    </el-form-item>
                    <el-form-item label="Interests">
                        <el-input v-model="currentUser.interest" />
                    </el-form-item>
                    <el-form-item label="Location">
                        <el-input v-model="currentUser.location" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" text bg style="margin: auto" @click="onActivatePremium()">Upgrade to premium</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="danger" plain @click="onUpdate()">Update</el-button>
                        <el-button type="info" plain @click="onReset()">Reset</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-scrollbar>
        <div class="container__user-card">
            <user-card v-model="currentUser" card-type="normal"></user-card>
        </div>
    </div>

    <el-dialog v-model="dialogVisible" title="Premium status" width="30%" align-center>
        <span>{{ premiumStatus }}</span>
    </el-dialog>
</template>

<script lang="ts" setup>
import { computed, ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../stores/user'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, FormInstance } from 'element-plus'
import { update_user_info } from '../services/user'

// user store
const userStore = useUserStore()
onMounted(async () => {
    await userStore.getUserInfo()
    currentUser.value = Object.assign({}, userStore.user)
})
const currentUser = ref(Object.assign({}, userStore.user))

// upload image
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (response, uploadFile) => {
    imageUrl.value = URL.createObjectURL(uploadFile.raw!)
}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (rawFile) => {
    if (rawFile.type !== 'image/jpeg') {
        ElMessage.error('Avatar picture must be JPG format!')
        return false
    } else if (rawFile.size / 1024 / 1024 > 2) {
        ElMessage.error('Avatar picture size can not exceed 2MB!')
        return false
    }
    return true
}

// setting buttons
const onUpdate = () => {
    userStore.updateUserInfo(currentUser.value)
    currentUser.value = Object.assign({}, userStore.user)
}

const onReset = () => {
    currentUser.value = Object.assign({}, userStore.user)
}

// gender selection
const genderOptions = ref([
    {
        key: 0,
        value: false,
        label: 'Male',
    },
    {
        key: 1,
        value: true,
        label: 'Female',
    },
])

// premium setting
const dialogVisible = ref(false)
const onActivatePremium = () => {
    dialogVisible.value = true
    currentUser.value.premium = true
}

const premiumStatus = computed(() =>
    currentUser.value.premium
        ? 'You already activated premium. Thanks for your support.'
        : 'Your preimum account is activated. You can use super like feature right now.'
)
</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    display: flex;
    flex-flow: row-reverse;
    &__setting-area {
        width: 30vw;
        max-height: 95vh;
        background: white;
        border-radius: 15px 0px 0px 15px;
        box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.25);
        padding-top: 5vh;
        &__header {
            color: #d85076;
        }
        &__setting-option {
            height: 100%;
            margin: 2vw;
            text-align: left;
        }
    }
    &__user-card {
        width: calc(100% - 30vw);
        align-items: center;
        justify-content: center;
        display: flex;
    }
}

.header-uploader .header {
    width: 10vw;
    height: 10vw;
    display: block;
}

.avatar-box {
    display: flex;
    align-items: center;
    border: 2px solid rgb(193, 188, 188);
    padding: 2px 10px 2px 10px;
    border-radius: 10px;
    cursor: pointer;
    &__img {
        width: 6vh;
        height: 6vh;
        border-radius: 50%;
    }
    &__text {
        margin-left: 10px;
    }
}
.avatar-box:hover {
    border: 2px solid #d85076;
}
</style>

<style>
.header-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.header-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.header-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
