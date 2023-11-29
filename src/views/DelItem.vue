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
            items: "",
            response: {},
            formData: {
                p_id: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch(
                    "http://127.0.0.1:5000/delete-item"
                );
                const data = await response.json();
                this.items = data.items;
            } catch (err) {
                console.log(err.message);
            }
        },

        async deleteItem() {
            try {
                await fetch("http://127.0.0.1:5000/delete-item", {
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
        <div className="form">
            <h1 className="title">Delete Product</h1>
            <h1 className="subtitle">
                ** Note: The action cannot be revoked, think before deleting **
            </h1>

            <form @submit.prevent="deleteItem()">
                <div className="input-box">
                    <div className="input msg" :id="msgColor">{{ msg }}</div>
                </div>

                <div className="input-box">
                    <label htmlFor="p_id"> Select Item to be deleted </label>

                    <select
                        className="input"
                        name="p_id"
                        id="p_id"
                        v-model="formData.p_id"
                        required
                    >
                        <option value="">-- None --</option>
                        <option
                            v-for="item in items"
                            :key="item[0]"
                            :value="item[0]"
                        >
                            {{ item[1] }}
                        </option>
                    </select>
                </div>

                <div className="input-box">
                    <button className="form-btn" type="submit">
                        Delete Product
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>