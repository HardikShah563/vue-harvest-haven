<script setup>
// importing stylesheets
import "../assets/form.css";
// importing components
import Footer from "../components/Footer.vue";
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
                c_id: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch(
                    "http://127.0.0.1:5000/edit-category"
                );
                const data = await response.json();
                this.categories = data.categories;
                console.log(this.categories);
            } catch (err) {
                console.log(err.message);
            }
        },
        async delCat() {
            try {
                await fetch("http://127.0.0.1:5000/delete-category", {
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
    <div className="admin-forms page">
        <div className="form page">
            <h1 className="title">Delete Category</h1>
            <h1 className="subtitle">
                ** Note: All Products inside the category will be deleted **
            </h1>

            <form @submit.prevent="delCat()">
                <div class="input-box">
                    <div class="input msg" :id="msgColor">
                        {{ msg }}
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="category">
                        Select Category to be deleted
                    </label>

                    <select
                        className="input"
                        name="category"
                        id="category"
                        v-model="formData.c_id"
                        required
                    >
                        <option value="">-- None --</option>
                        <option
                            v-for="category in categories"
                            :key="category[0]"
                            :value="category[0]"
                        >
                            {{ category[1] }}
                        </option>
                    </select>
                </div>

                <div className="input-box">
                    <button className="form-btn" type="submit">
                        Delete Category
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Footer />
</template>