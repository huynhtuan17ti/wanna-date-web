import { defineStore } from 'pinia'
import { computed, reactive, ref } from 'vue'
import { User } from '../models/user'
import { login, register, user_info, update_user_setting } from '../services/user'
import { sampleUserId, sampleUserData } from '../data/fake_data'
import { json } from 'stream/consumers'
import { fa } from 'element-plus/es/locale'

export const useUserStore = defineStore('user', () => {
    const _userIdx: number | undefined = sampleUserData.findIndex((obj) => obj.id === sampleUserId)
    const user = ref(sampleUserData[_userIdx])
    const token = ref(localStorage.getItem('access_token') || '')
    const isFetching = ref(true)

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
        if (!data) return false
        user.value.id = data.user
        user.value.age = data.age
        user.value.avatar_url = 'http://localhost:8000/' + data.avatar_url
        // user.value.header_url = 'http://localhost:8000/' + data.header_url
        user.value.name = data.username || 'Anonymous'
        user.value.is_female = data.is_female
        user.value.interest = data.hobby
        user.value.location = (data.street || '') + ' ' + (data.district || '') + ' ' + (data.city || '') + ' ' + (data.country || '')
        user.value.short_introduce = data.about_me
        user.value.work = data.company || data.school || 'Private'
        isFetching.value = false
        return user
    }

    async function updateUserInfo(user_info: User) {
        const { data } = await update_user_setting({
            id: user_info.id,
            avatar_url: user_info.avatar_url,
            header_url: user_info.header_url,
            name: user_info.name,
            age: user_info.age,
            is_female: user_info.is_female,
            about_me: user_info.short_introduce,
            company: user_info.work,
            hobby: user_info.interest,
        })
        if (!data) return false
        return true
    }

    return { user, token, isFetching, update, handleLogin, handleRegister, getUserInfo, updateUserInfo }
})
