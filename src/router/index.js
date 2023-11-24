import { createRouter, createWebHistory } from 'vue-router'
import Home from "../views/Home.vue";
import Navbar from "../components/Navbar.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: 'navbar',
            component: Navbar,
            children: [
                {
                    path: "/",
                    name: "home",
                    component: Home
                }, {
                    path: "/shop",
                    name: "shop",
                }, {
                    path: "/cart",
                    name: "cart",
                }, {
                    path: "/checkout",
                    name: "checkout",
                }
            ]
        },
    ]
})

export default router
