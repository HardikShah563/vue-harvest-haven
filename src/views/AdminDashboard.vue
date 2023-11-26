<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// imporing stylesheet
import "../assets/admin.css";
import "../assets/shop.css";
// importing icons
import { TrashIcon, PencilIcon } from "@heroicons/vue/24/outline";
</script>

<template>
    <div className="admin-page page">
        <h1 className="title txt-ctr">Welcome Store Manager</h1>

        <div className="store">
            <div class="store-item category" v-for="(item, index) in categoryNames" :key="index">
                <h1 className="store-item-title txt-ctr">{{ item }} PRODUCTS</h1>
                <div className="edit-category flex gap-5">
                    <RouterLink to="/admin-dashboard/edit-cat" className="item add item-btn gap-5 w-100" id="edit">
                        <PencilIcon class="admin-icon" />
                    </RouterLink>
                    <RouterLink to="/admin-dashboard/del-cat" className="item add item-btn gap-5 w-100" id="delete">
                        <TrashIcon class="admin-icon" />
                    </RouterLink>
                </div>

                <div class="item" v-for="(item, index) in shopItems" :key="index">
                    <div className="item">
                        <div className="item-name">
                            {{ item.prodName }}
                        </div>
                        <div className="item-amt">
                            ₹{{ item.prodPrice }}
                        </div>
                        <div className="flex">
                            <RouterLink to="/admin-dashboard/edit-item" className="item-btn" id="edit">
                                <PencilIcon class="admin-small-icon" />
                            </RouterLink>
                            <RouterLink to="/admin-dashboard/del-item" className="item-btn item-btn-2" id="delete">
                                <TrashIcon class="admin-small-icon" />
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categoryNames: ["Loose", "Dairy", "Packaged", "Pulses"],
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