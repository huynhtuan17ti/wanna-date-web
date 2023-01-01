import axios from 'axios'
import { ElMessage } from 'element-plus'
import { useAccountStore } from '../stores/account'

const service = axios.create({
    baseURL: import.meta.env.VITE_URL,
    timeout: 60000 * 5,
    withCredentials: true,
})

// Request interceptors
service.interceptors.request.use(
    async (config) => {
        const accountStore = useAccountStore()

        // Add X-Access-Token header to every request, you can add other custom headers here
        if (accountStore.token) {
            if (config.headers === undefined) {
                config.headers = {}
            }

            config.headers.Authorization = 'Bearer ' + accountStore.token
        }
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

service.interceptors.response.use(
    (response) => {
        return response
    },
    async (error) => {
        console.log(error)
    }
)

export default service
