<script setup>
// importing stylesheets
import "../assets/shop.css";
// importing icons
import { PlusIcon, MinusIcon } from "@heroicons/vue/24/outline";

const prod_img = "../assets/images/store_img/bananas.png";
</script>

<template>
    <div class="store-item">
        <div class="flex">
            <div class="store-item-img">
                <img src="prod_img" alt="store-item" />
            </div>

            <div class="store-item-text">
                <p class="store-item-title">
                    <!-- {{prodName}} ({{prodQty}}) -->
                    {{ prodName }} ({{ prodQty }})
                </p>
                <p class="store-item-price">
                    ₹{{ prodPrice }}
                </p>
                <!-- {props.prodStockQty <= 5 && props.prodStockQty> 0 && <div class="out-of-stock yellow">Moving Fast</div>} -->
                <!-- {props.prodStockQty <= 0 && <div class="out-of-stock" id="red">Out of Stock -->
            </div>
        </div>

        <div class="quantity">
            <button class="minus">
                <MinusIcon />
            </button>
            <div class="qty">0</div>
            <button class="plus">
                <PlusIcon />
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Product",
    props: {
        prodName: String,
        prodImg: String,
        prodQty: String,
        prodPrice: Number,
        prodStockQty: Number,
    }
}
</script>