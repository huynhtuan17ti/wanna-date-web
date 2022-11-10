import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        component: () => import('./layouts/MainLayout.vue'),
        children: [
            {
                path: 'match',
                component: () => import('./views/MatchPage.vue'),
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
