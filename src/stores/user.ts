import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { login, register, user_info } from '../services/user'
import { sampleUserId, sampleUserData } from '../data/fake_data'

export const useUserStore = defineStore('user', () => {
    const _userIdx: number | undefined = sampleUserData.findIndex((obj) => obj.id === sampleUserId)
    const user = ref(sampleUserData[_userIdx])
    const token = ref(localStorage.getItem('access_token') || '')

    function update(user_info: User) {
        if (_userIdx === undefined) return
        user.value = user_info
    }

    async function handleLogin(user_info: { email: string; password: string }) {
        const { data } = await login(user_info)
        if (!data) return false
        // set token
        token.value = data.jwt
        localStorage.setItem('access_token', data.jwt)
        console.log(token.value)
        return true
    }

    async function handleRegister(user_info: { email: string; password: string }) {
        const { data } = await register(user_info)
        if (!data) return false
        return true
    }

    async function getUserInfo() {
        const { data } = await user_info()
        console.log(data)
        return
    }

    return { user, token, update, handleLogin, handleRegister, getUserInfo }
})
