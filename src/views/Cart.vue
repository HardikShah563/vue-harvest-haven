<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// importing stylesheets
import "../assets/shop.css";
// importing components
import Product from "../components/Product.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <div class="page">
        <h1 class="title txt-ctr">Cart</h1>

        <div class="store">
            <div v-for="(item, index) in shopItems" :key="index">
                <Product
                    :prodName= "item.prodName"
                    :prodImage= "item.prodImage"
                    :prodQty= "item.prodQty"
                    :prodPrice= "item.prodPrice"
                    :prodStockQty= "item.prodStockQty"
                ></Product>
            </div>
            <Product prodName="Potatos" prodImage="tomatos.png" prodQty="1kg" prodPrice=29 prodStockQty=50 />
        </div>

        <RouterLink to="/checkout">
            <div class="black-btn">
                CHECKOUT
            </div>
        </RouterLink>
    </div>
    <Footer />
</template>

<script>
export default {
    components: {
        Product,
        Footer,
    },
    data() {
        return {
            shopItems: [
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }, {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }, {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }, {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }
            ],
        }
    }
}
</script>