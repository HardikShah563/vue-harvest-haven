<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// imporing stylesheet
import "../assets/admin.css";
import "../assets/shop.css";
import "../assets/stats.css";
// importing components
import Footer from "../components/Footer.vue";
</script>

<script>
export default {
    data() {
        return {
            stats: {},
            items: {},
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch(
                    "http://127.0.0.1:5000/admin-stats"
                );
                const data = await response.json();
                this.stats = data.stats;
                console.log(data.stats);
                console.log(data.stats.bestSellingProduct[5]);
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
    <div class="page admin-page">
        <h1 class="title txt-ctr small-page">User Statistics</h1>

        <div class="stats-section">
            <h1 class="verybigtext">Demographics and Customer Behavior Metrics:</h1>
            <br />
            <div class="stats-div flex">
                <div class="stats">
                    <div class="hidden" id="male">{{ stats.male }}</div>
                    <div class="hidden" id="female">{{ stats["female"] }}</div>
                    <h1 class="subtitle">Total Users:</h1>
                    <h1 class="verybigtext">{{ stats.totalusers }}</h1>
                </div>

                <div class="stats">
                    <h1 class="subtitle">Male Count:</h1>
                    <h1 class="verybigtext">{{ stats.male }}</h1>
                </div>

                <div class="stats">
                    <h1 class="subtitle">Female Count:</h1>
                    <h1 class="verybigtext">{{ stats.female }}</h1>
                </div>

                <div class="stats">
                    <h1 class="subtitle">Total Orders:</h1>
                    <h1 class="verybigtext">{{ stats.orders }}</h1>
                </div>

                <div class="stats">
                    <h1 class="subtitle">Customer Lifetime Value:</h1>
                    <h1 class="verybigtext">{{ stats.male }}</h1>
                </div>
            </div>
        </div>

        <div class="stats-section">
            <h1 class="verybigtext">Inventory and Product Metrics:</h1>
            <div class="flex space-btwn flex-wrap">
                <div>
                    <br />
                    <div class="table">
                        <table>
                            <h1 class="title">Stock Levels:</h1>
                            <tr>
                                <th>Name</th>
                                <th>Stock Available</th>
                            </tr>
                            <tr v-for="item in items" :key="item">
                                <td>{{ item[1] }}</td>
                                <td>{{ item[2] }}</td>
                            </tr>
                        </table>
                        <!-- table of stock levels -->
                    </div>
                </div>

                <div class="">
                    <div class="stats small-page">
                        <h1 class="verybigtext">Best Selling Product:</h1>
                        <div>
                            <h1 class="title">
                                {{ stats.bestSellingProduct[1] }}
                                {{ stats.bestSellingProduct[2] }}
                            </h1>
                        </div>
                    </div>

                    <hr>

                    <div class="stats small-page">
                        <h1 class="verybigtext">Slow Moving Product:</h1>
                        <div>
                            <h1 class="title">
                                {{ stats.slowMovingProduct[1] }}
                                {{ stats.slowMovingProduct[2] }}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="stats-section">
            <div class="w-90">
                <h1 class="subtitle" id="red-card">
                    *Note: Sales Revenue is 20% of total order value per order
                </h1>
            </div>

            <div>
                <h1 class="verybigtext">Sales and Revenue Metrics:</h1>
                <br />
                <div class="stats-div flex">
                    <div class="stats">
                        <h1 class="subtitle">Total Sales:</h1>
                        <h1 class="verybigtext">
                            ₹{{ Math.round(stats.totalsales) }}
                        </h1>
                    </div>

                    <div class="stats">
                        <h1 class="subtitle">Total Sales Revenue:</h1>
                        <h1 class="verybigtext">
                            ₹{{ Math.round(stats.salesRevenue) }}
                        </h1>
                    </div>

                    <div class="stats">
                        <h1 class="subtitle">Average Order Value:</h1>
                        <h1 class="verybigtext">
                            ₹{{ Math.round(stats.averageOrderValue) }}
                        </h1>
                    </div>

                    <div class="stats">
                        <h1 class="subtitle">Repeat Purchase Rate:</h1>
                        <h1 class="verybigtext">
                            {{ stats.repeatPurchaseRate }}%
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer />
</template>