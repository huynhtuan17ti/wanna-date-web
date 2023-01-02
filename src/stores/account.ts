import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { useMessageStore } from './message'
import { login, register, user_info, update_user_setting, react_user, logout, unlike_user } from '../services/user'
import { sampleUserId, sampleUserData } from '../data/fake_data'

export const useAccountStore = defineStore('account', () => {
    const messageStore = useMessageStore()

    const user = ref<User>()
    const token = ref(localStorage.getItem('access_token') || '')

    async function handleLogin(user_info: { email: string; password: string }) {
        const { data } = await login(user_info)
        if (!data) return false
        // set token
        token.value = data.jwt
        localStorage.setItem('access_token', data.jwt)
        return true
    }

    async function handleRegister(user_info: { email: string; password: string }) {
        const { data } = await register(user_info)
        if (!data) return false
        return true
    }

    async function handleLogout() {
        const { data } = await logout()
        if (!data) return false
        localStorage.clear()
        return true
    }

    async function getUserInfo() {
        const { data } = await user_info()
        if (!data) return false
        user.value = data
        return true
    }

    async function updateUserInfo(user_info: User) {
        const { data } = await update_user_setting(user_info)
        if (!data) return false
        await getUserInfo()
        return true
    }

    async function likeUser(user_id: number) {
        const { data } = await react_user(user_id, 1)
        if (!data) return false
        messageStore.fetchAllMessages(true)
        return data
    }

    async function unlikedUser(user_id: number) {
        if (user.value === undefined) return false
        const { data } = await unlike_user(user.value.user, user_id)
        if (!data) return false
        return true
    }

    return { user, token, handleLogin, handleRegister, handleLogout, getUserInfo, updateUserInfo, likeUser, unlikedUser }
})
