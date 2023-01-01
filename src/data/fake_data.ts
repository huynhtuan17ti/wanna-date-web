import { User } from '../models/user'

export const sampleUserId: number = 0

export const sampleUserData: User[] = [
    {
        user: 0,
        avatar_url: 'https://i.pinimg.com/736x/ac/0c/ea/ac0cea71f3395ba8715bff039059d00d.jpg',
        header_url: 'https://i.pinimg.com/originals/cd/90/11/cd9011598bb15c9d71c4bf76650cccc8.jpg',

        user_name: 'Gilgamesh',
        is_female: false,
        birthday: undefined,

        about_me: 'Find a cute girl UwU',

        company: 'A fucking god',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Weapons',
        language: 'Japanese',
    },
    {
        user: 1,
        avatar_url: 'https://i.pinimg.com/736x/c0/bc/a6/c0bca6621171825df690ae62d3f5f693.jpg',
        header_url: 'https://i.pinimg.com/736x/6e/a9/85/6ea985f92af67dabd2398b4d084b6f06.jpg',

        user_name: 'Emilia',
        is_female: true,
        birthday: undefined,

        about_me: 'A half-elf cute girl',

        company: 'A half-witch',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Eating ice cream',
        language: 'Japanese',
    },
    {
        user: 2,
        avatar_url: 'https://i.pinimg.com/236x/b7/26/18/b7261829ca9b5f6fda10ebd7bb6fba26.jpg',
        header_url: 'https://i.pinimg.com/originals/d2/7e/04/d27e049687ce1b63d0eb227841fad292.jpg',

        user_name: 'Violet',
        is_female: true,
        birthday: undefined,

        about_me: 'Quite shy ><',

        company: 'An Auto Memory Doll',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Reading and writing letters',
        language: 'Japanese',
    },
    {
        user: 3,
        avatar_url: 'https://i.pinimg.com/236x/8a/38/a0/8a38a00e12034c27709cf0bfc9c7b056.jpg',
        header_url: 'https://i.pinimg.com/736x/37/51/ac/3751ac130689f6381b9ff43bc75fae46.jpg',

        user_name: 'Rem',
        is_female: true,
        birthday: undefined,

        about_me: 'I can do everything for my love',

        company: 'A cute maid',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Seeing my crush',
        language: 'Japanese',
    },
    {
        user: 4,
        avatar_url: 'https://i.pinimg.com/736x/c0/84/ce/c084ce97a3ce98aeed03239b7d608ad7.jpg',
        header_url: 'https://i.pinimg.com/originals/6d/ba/c3/6dbac337e52dcc16bb70f72331a2c43e.jpg',

        user_name: 'Asuna',
        is_female: true,
        birthday: undefined,

        about_me: 'Im ok if my boy friend hang out with several other girls',

        company: 'A student',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Hobby of bathing',
        language: 'Japanese',
    },
    {
        user: 5,
        avatar_url: 'https://i.pinimg.com/originals/a6/d9/70/a6d970d67cb27f392e41916677759955.jpg',
        header_url: 'https://i.pinimg.com/originals/27/7a/db/277adb0609808b82b3f599e58d3bd19c.jpg',

        user_name: 'Power',
        is_female: true,
        birthday: undefined,

        about_me: 'Have you seen my Meowy',

        company: 'A demon hunter',
        school: '',

        city: '',
        country: 'Japan',
        district: '',
        street: '',
        address: '',

        hobby: 'Playing with my cat',
        language: 'Japanese',
    },
]

export const sampleMessageData = [
    { content: 'Ca lin chi', side: true },
    { content: 'Bing Chilling', side: true },
    { content: 'Shitty', side: false },
    { content: 'Do you see the sky? Everything kinda bloody', side: true },
    { content: 'Yeh, I see. Also some cross things.', side: false },
    { content: 'Fuck everyone around me became some shits of orange.', side: true },
    { content: 'WDYM?', side: false },
    { content: 'Wait, wtf, my friends, they turned into orange liquid, smell like blood', side: false },
    { content: 'Fuck, its the end of evangelion, we re gonna die!', side: false },
    { content: 'Hello, are u still there?', side: false },
]

export const sampleUserMessageData = [
    {
        user: sampleUserData[1],
        message: [...sampleMessageData],
    },
    {
        user: sampleUserData[2],
        message: [...sampleMessageData],
    },
    {
        user: sampleUserData[3],
        message: [...sampleMessageData],
    },
]

export const sampleLikedUserData = [sampleUserData[4], sampleUserData[5]]
