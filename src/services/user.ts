import api from '../utils/request'
import { User } from '../models/user'

export function login(data: { email: string; password: string }) {
    return api.post<any>('/api/auth/login', data)
}

export function register(data: { email: string; password: string }) {
    return api.post<any>('/api/auth/register', data)
}

export function logout() {
    return api.post<any>('/api/auth/logout')
}

export function user_info() {
    return api.get<User>('/api/profile/users')
}

export function update_user_setting(data: User) {
    const { user, ...put_data } = data
    return api.put<any>('/api/profile/users', put_data)
}

export function get_all_user() {
    return api.get<any>('/api/profile/users', { params: { all: true } })
}

export function get_specific_user(user_id: number) {
    return api.get<User>('/api/profile/users', { params: { user_id: user_id } })
}

export function react_user(user_id: number, type: number) {
    return api.post<any>('/api/func/userliked', { receiver_id: user_id, type: type })
}

export function get_liked_users() {
    return api.get<any>('/api/func/likeduser')
}

export function unlike_user(user_id_1: number, user_id_2: number) {
    return api.delete<any>('/api/func/userliked/' + user_id_1 + '/' + user_id_2)
}

export function unmatch_user(user_id_1: number, user_id_2: number) {
    return api.delete<any>('/api/func/usernomatch/' + user_id_1 + '/' + user_id_2)
}
