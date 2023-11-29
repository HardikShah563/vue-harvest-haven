<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// imporing stylesheet
import "../assets/admin.css";
import "../assets/shop.css";
// importing icons
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
</script>

<script>
export default {
    data() {
        return {
            categories: [],
            items: {},
            categoryNames: ["Loose", "Dairy", "Packaged", "Pulses"],
            shopItems: [
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                },
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                },
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                },
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                },
            ],
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
};
</script>

<template>
    <div className="admin-page page">
        <h1 className="title txt-ctr">Welcome Store Manager</h1>

        <div className="store">
            <div
                class="store-item category"
                v-for="(itemType, items) in items"
                :key="itemType"
            >
                <h1 className="store-item-title txt-ctr">
                    {{ items }} PRODUCTS
                </h1>
                <div className="edit-category flex gap-5">
                    <RouterLink
                        to="/admin-dashboard/edit-cat"
                        className="item add item-btn gap-5 w-100"
                        id="edit"
                    >
                        <PencilIcon class="admin-icon" />
                    </RouterLink>
                    <RouterLink
                        to="/admin-dashboard/del-cat"
                        className="item add item-btn gap-5 w-100"
                        id="delete"
                    >
                        <TrashIcon class="admin-icon" />
                    </RouterLink>
                </div>

                <div
                    class="item"
                    v-for="(prod, index) in itemType"
                    :key="index"
                >
                    <div className="item">
                        <div className="item-name">
                            {{ prod[1] }}
                        </div>
                        <div className="flex item-2">
                            <div className="item-amt">₹{{ prod[3] }}</div>

                            <RouterLink
                                to="/admin-dashboard/edit-item"
                                className="item-btn"
                                id="edit"
                            >
                                <PencilIcon class="admin-small-icon" />
                            </RouterLink>
                            <RouterLink
                                to="/admin-dashboard/del-item"
                                className="item-btn item-btn-2"
                                id="delete"
                            >
                                <TrashIcon class="admin-small-icon" />
                            </RouterLink>
                        </div>
                    </div>
                </div>

                <RouterLink
                    to="/admin-dashboard/add-item"
                    className="item add item-btn"
                    id="edit"
                >
                    + Add New Item
                </RouterLink>
            </div>
        </div>
        <RouterLink to="/admin-dashboard/add-category" class="plus-icon"
            >+</RouterLink
        >
    </div>
</template>