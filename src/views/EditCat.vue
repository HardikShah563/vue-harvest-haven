<script setup>
// importing stylesheets
import "../assets/form.css";
// importing components
import Footer from "../components/Footer.vue";
// importing from config
import { delay } from "../config/utils";
</script>

<script>
export default {
    data() {
        return {
            msg: "",
            msgColor: "",
            categories: "",
            response: {},
            formData: {
                old_name: "",
                new_name: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch("http://127.0.0.1:5000/edit-category");
                const data = await response.json();
                this.categories = data.categories;
                console.log(this.categories);
            } catch (err) {
                console.log(err.message);
            }
        },
        async editCat() {
            try {
                await fetch("http://127.0.0.1:5000/edit-category", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.formData),
                })
                    .then((response) => response.json())
                    .then(async (data) => {
                        if (data.message) {
                            this.msg = data.message;
                            this.msgColor = "green";
                        } else {
                            this.msg = data.error;
                            this.msgColor = "red";
                        }
                    });
            } catch (err) {
                console.log(err.message);
            }
        },
    },
    created() {
        this.getData();
    },
    components: {
        Footer,
    },
};
</script>

<template>
    <div class="admin-forms page">
        <div class="form">
            <h1 class="title">Edit Category Name</h1>
            <h1 class="subtitle">
                ** Category of all the items in the particular category will
                change **
            </h1>

            <form @submit.prevent="editCat()">
                <div class="input-box">
                    <div class="input msg" :id="msgColor">
                        {{ msg }}
                    </div>
                </div>

                <div class="input-box">
                    <label htmlFor="old_name">
                        Select Category Name to be changed
                    </label>

                    <select
                        class="input"
                        name="old_name"
                        id="old_name"
                        v-model="formData.old_name"
                        required
                    >
                        <option value="">-- None --</option>
                        <option v-for="category in categories" :key="category[0]" :value="category[0]">{{ category[1] }}</option>
                    </select>
                </div>

                <div class="input-box">
                    <label htmlFor="new_name"> New Name: </label>

                    <input
                        class="input"
                        type="text"
                        name="new_name"
                        id="new_name"
                        v-model="formData.new_name"
                        placeholder="Eg: Veg Aata Maggi"
                        required
                    />
                </div>

                <div class="input-box">
                    <button class="form-btn" type="submit">
                        Edit Category
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Footer />
</template>