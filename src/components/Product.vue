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
        prodId: Number,
        prodName: String,
        prodImage: String,
        prodQty: String,
        prodPrice: Number,
        prodStockQty: Number,
        count: Number,
        screenName: String
    },
    data() {
        return {
            prodCount: 0,
            prodStock: this.prodStockQty,
            img_url: "data:image/png;base64," + this.prodImage,
            operationData: {
                op: "",
                p_id: this.prodId,
            },
        };
    },
    methods: {
        async addToCart() {
            this.prodCount < this.prodStock && this.prodCount++;
            this.operationData.op = "plus";
            await fetch("http://127.0.0.1:5000/shop", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.operationData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.message);
                });
        },
        async removeFromCart() {
            this.prodCount > 0 && this.prodCount--;
            this.operationData.op = "minus";
            await fetch("http://127.0.0.1:5000/shop", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.operationData),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.message);
                });
        },
    },
    created() {
        this.prodCount = this.count || 0;
    },
};
</script>

<template>
    <div class="store-item">
        <div class="flex">
            <div class="store-item-img">
                <img :src="img_url" alt="store-item" />
            </div>

            <div class="store-item-text">
                <p class="store-item-title">{{ prodName }} ({{ prodQty }})</p>
                <p class="store-item-price">₹{{ prodPrice }}</p>
                <div
                    v-if="prodStockQty == 0"
                    class="out-of-stock yellow"
                    id="red"
                >
                    Out of Stock
                </div>
                <div v-if="prodStockQty <= 10">
                    <div v-if="prodStockQty > 0" class="out-of-stock yellow">
                        Moving Fast
                    </div>
                </div>
            </div>
        </div>

        <div class="quantity">
            <button v-if="!screenName" class="minus" @click="removeFromCart()">
                <div>-</div>
            </button>

            <div class="qty">{{ prodCount }}</div>

            <button v-if="!screenName" class="plus" @click="addToCart()">
                <div class="white">+</div>
            </button>
        </div>
    </div>
</template>