import { createRouter, createWebHistory } from 'vue-router'
// importing views
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
// importing components
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
                    component: Shop
                }, {
                    path: "/cart",
                    name: "cart",
                    component: Cart
                }, {
                    path: "/checkout",
                    name: "checkout",
                    component: Checkout
                }
            ]
        },
    ]
})

export default router
