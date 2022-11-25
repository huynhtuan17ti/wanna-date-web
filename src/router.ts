import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
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
