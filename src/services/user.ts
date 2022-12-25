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
