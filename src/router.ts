import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { useAccountStore } from '../src/stores/account'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: () => import('./views/LoginPage.vue'),
    },
    {
        path: '/register',
        component: () => import('./views/RegisterPage.vue'),
    },
    {
        path: '/',
        component: () => import('./layouts/MainLayout.vue'),
        children: [
            {
                path: 'match',
                component: () => import('./views/MatchPage.vue'),
                meta: { requireAuth: true },
            },
            {
                path: 'setting',
                component: () => import('./views/SettingPage.vue'),
                meta: { requireAuth: true },
            },
            {
                path: 'chat',
                component: () => import('./views/ChatPage.vue'),
                meta: { requireAuth: true },
            },
            {
                path: 'liked',
                component: () => import('./views/LikedPage.vue'),
                meta: { requireAuth: true },
            },
        ],
    },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes: routes,
})

export { routes }

router.beforeEach((to, from, next) => {
    const accountStore = useAccountStore()
    if (to.matched.some((record) => record.meta.requireAuth)) {
        if (accountStore.token !== '') next()
        else router.push('/login')
    } else {
        next()
    }
})

export default router
