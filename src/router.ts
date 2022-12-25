import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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
            },
            {
                path: 'setting',
                component: () => import('./views/SettingPage.vue'),
            },
            {
                path: 'chat',
                component: () => import('./views/ChatPage.vue'),
            },
            {
                path: 'liked',
                component: () => import('./views/LikedPage.vue'),
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

export default router
