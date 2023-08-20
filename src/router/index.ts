import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        component: () => import("@/views/home/Home.vue")
    },
    {
        path: "/video/:id",
        component: () => import("@/views/video/Video.vue")
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 