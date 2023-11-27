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
            categories: [],
            items: {},
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch("http://127.0.0.1:5000/shop");
                const data = await response.json();
                this.categories = data.categories;
                this.items = data.items;
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
        <div v-for="(itemType, items) in items" :key="itemType">
            <h1 class="title txt-ctr uppercase">{{ items }} Products</h1>
            <div class="store small-page">
                <div class="" v-for="(prod, index) in itemType" :key="index">
                    <Product
                        :prodId="prod[0]"
                        :prodName="prod[1]"
                        :prodImage="prod[5]"
                        :prodQty="prod[2]"
                        :prodPrice="prod[3]"
                        :prodStockQty="prod[7]"
                    ></Product>
                </div>
            </div>
        </div>

        <RouterLink to="/cart">
            <div class="black-btn">GO TO CART</div>
        </RouterLink>
    </div>
    <Footer />
</template>