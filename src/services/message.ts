import api from '../utils/request'

export function get_all_messages() {
    return api.get<any>('/api/func/connections')
}

export function get_message_thread(user_id: number, page: number = 0) {
    return api.get<any>('/api/func/chat', { params: { user_id_2: user_id, page: page } })
}

export function send_single_message(user_id: number, message: string) {
    return api.post<any>('/api/func/chat', { recipient_id: user_id, message: message })
}
