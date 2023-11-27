<script setup>
// importing stylesheets
import "../assets/shop.css";
// importing icons
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";
const prod_img = "../assets/images/store_img/bananas.png";
</script>

<script>
export default {
    name: "Product",
    props: {
        prodName: String,
        prodImage: String,
        prodQty: String,
        prodPrice: Number,
        prodStockQty: Number,
    },
    data() {
        return {
            img_url: "data:image/png;base64," + this.prodImage
        }
    }
}
</script>

<template>
    <div class="store-item">
        <div class="flex">
            <div class="store-item-img">
                <img :src="img_url" alt="store-item" />
            </div>

            <div class="store-item-text">
                <p class="store-item-title">
                    {{ prodName }} ({{ prodQty }})
                </p>
                <p class="store-item-price">
                    ₹{{ prodPrice }}
                </p>
                <div v-if="prodStockQty == 0" class="out-of-stock yellow" id="red">Out of Stock</div>
                <div v-if="prodStockQty <= 10">
                    <div v-if="prodStockQty > 0" class="out-of-stock yellow">Moving Fast</div>
                </div>
            </div>
        </div>

        <div class="quantity">
            <button class="minus">
                <div>-</div>
            </button>
            <div class="qty">0</div>
            <button class="plus">
                <div class="white">+</div>
            </button>
        </div>
    </div>
</template>