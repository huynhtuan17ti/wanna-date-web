import { User } from '../models/user'

export const userData: User[] = [
    {
        id: 'us2',
        name: 'Emilia',
        is_female: true,
        age: 22,
        avatar_url: 'https://i.pinimg.com/736x/6e/a9/85/6ea985f92af67dabd2398b4d084b6f06.jpg',
        short_introduce: 'A half-elf cute girl',
    },
    {
        id: 'us3',
        name: 'Violet',
        is_female: true,
        age: 18,
        avatar_url: 'https://i.pinimg.com/originals/d2/7e/04/d27e049687ce1b63d0eb227841fad292.jpg',
        short_introduce: 'Quite shy ><',
    },
    {
        id: 'us4',
        name: 'Rem',
        is_female: true,
        age: 17,
        avatar_url: 'https://i.pinimg.com/736x/37/51/ac/3751ac130689f6381b9ff43bc75fae46.jpg',
        short_introduce: 'I can do everything for my love',
    },
    {
        id: 'us5',
        name: 'Asuna',
        is_female: true,
        age: 19,
        avatar_url: 'https://i.pinimg.com/originals/6d/ba/c3/6dbac337e52dcc16bb70f72331a2c43e.jpg',
        short_introduce: 'Im ok if my boy friend hang out with several other girls',
    },
    {
        id: 'us6',
        name: 'Power',
        is_female: true,
        age: 20,
        avatar_url: 'https://i.pinimg.com/originals/27/7a/db/277adb0609808b82b3f599e58d3bd19c.jpg',
        short_introduce: 'Have you seen my Meowy',
    },
]

export const currentUserId: string = 'us2'

export const messageTabData = [
    {
        name: 'Emilia',
        recent_message: 'Love u',
    },
    {
        name: 'Rem',
        recent_message: 'Did you see my Subaru?',
    },
    {
        name: 'Power',
        recent_message: 'My Meowy, can u find her for me? plzzzzzzzz',
    },
    {
        name: 'Asuna',
        recent_message: 'Neh, Im ok!',
    },
]
