<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// importing stylesheets
import "../assets/shop.css";
// importing components
import Product from "../components/Product.vue";
import Footer from "../components/Footer.vue";
</script>

<script>
export default {
    data() {
        return {
            cart: {},
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch("http://127.0.0.1:5000/cart");
                const data = await response.json();
                this.cart = data.cart;
                console.log(this.items);
            } catch (err) {
                console.log(err.message);
            }
        },
    },
    created() {
        this.getData();
    },
    components: {
        Product,
        Footer,
    },
};
</script>

<template>
    <div class="page">
        <h1 class="title txt-ctr">Cart</h1>

        <div class="store small-page">
            <div v-for="prod in cart" :key="prod[0]">
                <Product
                    :prodId="prod[0]"
                    :prodName="prod[1]"
                    :prodImage="prod[5]"
                    :prodQty="prod[2]"
                    :prodPrice="prod[3]"
                    :prodStockQty="prod[7]"
                    :count="prod[8]"
                ></Product>
            </div>
        </div>

        <RouterLink to="/checkout">
            <div class="black-btn">CHECKOUT</div>
        </RouterLink>
    </div>
    <Footer />
</template>