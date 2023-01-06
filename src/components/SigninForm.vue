<template>
    <div class="form">
        <el-form label-position="top" label-width="100px" :model="formReact">
            <el-form-item>
                <h2 class="form__header">Welcome to Wanna Date</h2>
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="formReact.email" type="email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="formReact.password" type="password" />
            </el-form-item>
            <el-form-item style="padding-top: 40px">
                <el-button class="form__btn" @click="onSubmit()">Log in</el-button>
            </el-form-item>
            <el-form-item>
                <el-button class="form__btn" @click="onRegisterRoute()">Register</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useAccountStore } from '../stores/account'
import { ElMessage } from 'element-plus'

const router = useRouter()
const accountStore = useAccountStore()

const onRegisterRoute = () => {
    router.push('/register')
}

const onSubmit = async () => {
    if (formReact.value.email === '' || formReact.value.password === '') {
        ElMessage.error('Email and passowrd must not empty, login failed!')
        return
    }
    if (!formReact.value.email.includes('@')) {
        ElMessage.error('Wrong format on email, login failed!')
        return
    }
    const loginSuccess = await accountStore.handleLogin({ email: formReact.value.email, password: formReact.value.password })
    if (loginSuccess) router.push('/match')
    else {
        ElMessage.error('Please check your login information, login failed!')
        return
    }
}

const formReact = ref({
    email: '',
    password: '',
})
</script>

<style scoped lang="scss">
.form {
    margin: auto;
    margin-top: 10vh;
    width: 25vw;
    height: 55%;
    max-height: 100vh;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
    &__header {
        color: #ff724c;
    }
    &__btn {
        background: #ffffff;
        border-width: 1px;
        border-color: gray;
        border-style: solid;
        box-shadow: none;
        width: 100%;
        height: 35px;
        padding: 10px 20px;
        color: #ff724c;
        font-size: 1em;
        font-weight: bold;
        border-radius: 5px;
    }
}
</style>
