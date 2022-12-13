<template>
    <div class="container">
        <div class="container__setting-area">
            <h2 class="container__setting-area__header">Settings</h2>
            <div class="container__setting-area__setting-option">
                <el-form :model="currentUser" label-width="auto" size="large" label-position="top">
                    <!-- TODO: reimplement avatar upload -->
                    <el-form-item label="Upload header image">
                        <el-upload
                            class="avatar-uploader"
                            action="https://jsonplaceholder.typicode.com/posts/"
                            :show-file-list="false"
                            :on-success="handleAvatarSuccess"
                            :before-upload="beforeAvatarUpload"
                        >
                            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
                            <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
                        </el-upload>
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
                    <el-form-item>
                        <el-button type="danger" plain @click="onUpdate()">Update</el-button>
                        <el-button type="info" plain @click="onReset()">Reset</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <div class="container__user-card">
            <user-card v-model="currentUser" card-type="normal"></user-card>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useUserStore } from '../stores/user'
import { Plus } from '@element-plus/icons-vue'
import type { UploadProps, FormInstance } from 'element-plus'

const userStore = useUserStore()
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
    userStore.update(currentUser.value)
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
</script>

<style scoped lang="scss">
.container {
    height: 100vh;
    display: flex;
    flex-flow: row-reverse;
    &__setting-area {
        width: 30vw;
        background: white;
        border-radius: 15px 0px 0px 15px;
        box-shadow: -5px 0px 4px rgba(0, 0, 0, 0.25);
        padding-top: 5vh;
        &__header {
            color: #d85076;
        }
        &__setting-option {
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

.avatar-uploader .avatar {
    width: 10vw;
    height: 10vw;
    display: block;
}
</style>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed var(--el-border-color);
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
    border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    text-align: center;
}
</style>
