<script setup>
import "../assets/shop.css";
import Product from "../components/Product.vue";
import { RouterLink } from "vue-router";
</script>

<template>
    <div class="page">
        <h1 class="title txt-ctr">Welcome to the Shop</h1>

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

        <RouterLink to="/cart">
            <div class="black-btn">
                GO TO CART
            </div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    components: {
        Product
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