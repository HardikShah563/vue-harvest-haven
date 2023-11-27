<script setup>
// importing from vue
import { RouterLink, RouterView } from "vue-router";
// importing stylesheets
import "../assets/navbar.css";
// importing icons
import {
    WrenchScrewdriverIcon,
    ShoppingBagIcon,
    ShoppingCartIcon,
    UserIcon,
    ArrowRightOnRectangleIcon,
    ArrowLeftOnRectangleIcon,
} from "@heroicons/vue/24/outline";
</script>

<script>
export default {
    data() {
        return {
            userInfo: localStorage.getItem("userInfo")
                ? JSON.parse(localStorage.getItem("userInfo"))
                : null,
        };
    },
    methods: {
        async logoutHandler() {
            try {
                await fetch("http://127.0.0.1:5000/signout")
                    .then((response) => response.json())
                    .then((data) => {
                        if(data.message) {
                            localStorage.removeItem("userInfo");
                            window.location.reload();
                        }
                    });
            } catch (err) {
                console.log(err.message);
            }
        },
    },
};
</script>

<template>
    <nav>
        <div class="logo">
            <h1 class="title">
                <RouterLink to="/">Harvest Haven</RouterLink>
            </h1>
        </div>

        <div class="nav-actions">
            <RouterLink
                v-if="userInfo && userInfo.isAdmin"
                class="nav-btn"
                to="/admin-dashboard"
            >
                <div class="svg"><WrenchScrewdriverIcon /></div>
                <p class="nav-action-label">Admin</p>
            </RouterLink>

            <RouterLink class="nav-btn" to="/shop">
                <div class="svg"><ShoppingBagIcon /></div>
                <p class="nav-action-label">Shop</p>
            </RouterLink>

            <RouterLink v-if="userInfo" class="nav-btn" to="/cart">
                <div class="svg"><ShoppingCartIcon /></div>
                <p class="nav-action-label">Cart</p>
                <!-- {cart.cartItems.length > 0 && ( -->
                <span class="cart-count" id="red"> 0 </span>
                <!-- )} -->
            </RouterLink>

            <!-- <div> -->
            <div v-if="userInfo" class="nav-btn" @click="logoutHandler()">
                <div class="svg"><ArrowRightOnRectangleIcon /></div>
                <p class="nav-action-label">Logout</p>
            </div>
            <!-- </div> -->

            <RouterLink v-if="!userInfo" class="nav-btn" to="/signin">
                <div class="svg"><ArrowLeftOnRectangleIcon /></div>
                <p class="nav-action-label">Signin</p>
            </RouterLink>
        </div>
    </nav>

    <RouterView />
</template>