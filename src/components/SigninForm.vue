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
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()

const onRegisterRoute = () => {
    router.push('/register')
}

const onSubmit = async () => {
    const loginSuccess = await userStore.handleLogin({ email: formReact.value.email, password: formReact.value.password })
    if (loginSuccess) router.push('/match')
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
