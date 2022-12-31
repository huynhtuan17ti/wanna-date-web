import api from '../utils/request'

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
    return api.get<any>('/api/profile/users')
}

export function update_user_setting(data: {
    user_name: string
    avatar_url: string
    header_url: string
    about_me: string
    birthday: number
    is_female: boolean
    address: string
    street: string
    district: string
    city: string
    country: string
    language: string
}) {
    return api.put<any>('/api/profile/settings', data)
}
