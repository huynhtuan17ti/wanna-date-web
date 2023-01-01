export interface User {
    user: number

    avatar_url: string
    header_url: string

    user_name: string
    is_female: boolean
    birthday: string | undefined

    about_me: string

    company: string
    school: string

    city: string
    country: string
    district: string
    street: string
    address: string

    hobby: string
    language: string
}
