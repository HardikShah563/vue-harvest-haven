import { createRouter, createWebHistory } from 'vue-router'
// importing views
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Cart from "../views/Cart.vue";
import Checkout from "../views/Checkout.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";
import AdminDashboard from "../views/AdminDashboard.vue";
import AdminStats from "../views/AdminStats.vue";
import AddCat from "../views/AddCat.vue";
import EditCat from "../views/EditCat.vue";
import DelCat from "../views/DelCat.vue";
import AddItem from "../views/AddItem.vue";
import EditItem from "../views/EditItem.vue";
import DelItem from "../views/DelItem.vue";
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
                }, {
                    path: "/admin-dashboard",
                    name: "admin-dashboard",
                    component: AdminDashboard,
                }, {
                    path: "/admin-dashboard/stats",
                    name: "admin-stats",
                    component: AdminStats,
                }, {
                    path: "/admin-dashboard/add-category",
                    name: "AddCat",
                    component: AddCat
                }, {
                    path: "/admin-dashboard/edit-cat",
                    name: "EditCat",
                    component: EditCat
                }, {
                    path: "/admin-dashboard/del-cat",
                    name: "DelCat",
                    component: DelCat
                }, {
                    path: "/admin-dashboard/add-item",
                    name: "AddItem",
                    component: AddItem
                }, {
                    path: "/admin-dashboard/edit-item",
                    name: "EditItem",
                    component: EditItem
                }, {
                    path: "/admin-dashboard/del-item",
                    name: "DelItem",
                    component: DelItem
                },
            ]
        }, {
            path: "/signin",
            name: "signin",
            component: SignIn
        }, {
            path: "/signup",
            name: "signup",
            component: SignUp
        },
    ]
});

export default router
