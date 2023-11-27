<script setup>
// importing stylesheets
import "../assets/form.css";
// importing component
import Footer from "../components/Footer.vue";
</script>

<script>
export default {
    data() {
        return {
            nsg: "",
            msgColor: "",
            formData: {
                c_name: "",
            },
        };
    },
    methods: {
        async addCat() {
            try {
                await fetch("http://127.0.0.1:5000/add-category", {
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
                            await delay(500);
                            this.msg = "redirecting... wait";
                            await delay(1000);
                            window.location.href = "/";
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
    components: {
        Footer,
    },
};
</script>

<template>
    <div class="page">
        <div class="admin-forms">
            <div class="form page">
                <h1 class="title">Add A New Category</h1>
                <h1 class="subtitle">
                    A new category won't be created if one already exists
                </h1>

                <form @submit.prevent="addCat()">
                    <div class="input-box">
                        <div class="input msg" :id="msgColor">
                            {{ msg }}
                        </div>
                    </div>

                    <div class="input-box">
                        <label for="c_name"> New Category Name: </label>

                        <input
                            class="input"
                            type="text"
                            name="c_name"
                            id="c_name"
                            v-model="formData.c_name"
                            placeholder="Eg: new_cat"
                            required
                        />
                    </div>

                    <div class="input-box">
                        <button class="form-btn" type="submit">
                            Add Category
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <Footer />
</template>