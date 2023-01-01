<template>
    <div class="form">
        <el-form label-position="top" label-width="100px" :model="regisFormReact">
            <el-form-item label="Full name">
                <el-input v-model="regisFormReact.fullName" />
            </el-form-item>
            <el-form-item label="Email">
                <el-input v-model="regisFormReact.email" type="email" />
            </el-form-item>
            <el-form-item label="Password">
                <el-input v-model="regisFormReact.password" type="password"></el-input>
            </el-form-item>
            <el-form-item label="Confirm Password">
                <el-input v-model="regisFormReact.confirmPassword" type="password"></el-input>
            </el-form-item>
            <el-form-item label="Date of birth">
                <el-date-picker v-model="regisFormReact.dateOfBirth" type="date" placeholder="Pick a date" style="width: 100%" />
            </el-form-item>
            <el-form-item label="Gender">
                <el-select v-model="regisFormReact.gender" placeholder="please select your gender">
                    <el-option label="Male" value="male" />
                    <el-option label="Female" value="female" />
                    <el-option label="Other" value="other" />
                </el-select>
            </el-form-item>
            <el-form-item label="Sexual Orientation">
                <el-select v-model="regisFormReact.sexOrientation" placeholder="please select your gender">
                    <el-option label="Straigt" value="straigt" />
                    <el-option label="Gay" value="gay" />
                    <el-option label="Lesbian" value="lesbian" />
                    <el-option label="Bisexual" value="bisexual" />
                </el-select>
            </el-form-item>
            <el-form-item>
                <el-button class="form__btn" @click="onSubmitRegis">Register</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAccountStore } from '../stores/account'

const router = useRouter()
const accountStore = useAccountStore()

const regisFormReact = ref({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    dateOfBirth: '',
    gender: '',
    sexOrientation: '',
})
const onSubmitRegis = async () => {
    const registerSuccess = await accountStore.handleRegister({
        email: regisFormReact.value.email,
        password: regisFormReact.value.password,
    })
    if (registerSuccess) router.push('/login')
}
</script>
<style scoped lang="scss">
.form {
    margin: 10vh auto;
    width: 25vw;
    max-height: 100vh;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
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
