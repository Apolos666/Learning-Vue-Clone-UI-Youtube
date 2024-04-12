import {createRouter, createWebHistory, useRouter} from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../components/Youtube/HomeYoutube.vue"),
    },
    {
        path: "/subscriptions",
        name: "Subscriptions",
        component: () => import("../components/Youtube/SubscriptionsYoutube.vue"),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router