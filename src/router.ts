import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('./views/LoginPage.vue'),
    },
    {
        path: '/',
        redirect: '/match',
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
