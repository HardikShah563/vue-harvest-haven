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
            categories: "",
            response: {},
            formData: {
                p_id: "",
                new_name: "",
                c_id: "",
                p_qty: "",
                p_price: "",
                p_stock_qty: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch(
                    "http://127.0.0.1:5000/edit-item"
                );
                const data = await response.json();
                this.categories = data.categories;
                this.items = data.items;
                console.log(this.categories);
            } catch (err) {
                console.log(err.message);
            }
        },
        async editItem() {
            try {
                await fetch("http://127.0.0.1:5000/edit-item", {
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
            <h1 className="title">Edit Product Details</h1>
            <h1 className="subtitle">
                ** If you do not wish to edit any detail, leave the field empty
                **
            </h1>

            <form  @submit.prevent="editItem()">
                <div className="input-box">
                    <div className="input msg" :id="msgColor">{{ msg }}</div>
                </div>

                <div className="input-box">
                    <label htmlFor="p_id"> Product Name to be edited: </label>

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
                    <label for="new_name">
                        New Name for the product selected above:
                    </label>

                    <input
                        className="input"
                        type="text"
                        name="new_name"
                        id="new_name"
                        v-model="formData.new_name"
                        placeholder="Eg: Veg Aata Maggi"
                        autocomplete="off"
                        required
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="cat"> Update Product's Category: </label>

                    <select
                        className="input"
                        name="cat"
                        id="cat"
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
                    <label for="p_qty"> Update Item's Pack Size: </label>

                    <input
                        className="input"
                        type="text"
                        name="p_qty"
                        id="p_qty"
                        v-model="formData.p_qty"
                        placeholder="Eg: 200g/ 500ml/ ..."
                        autocomplete="off"
                        required
                    />
                </div>

                <div className="input-box">
                    <label for="p_price"> Update Price: (In ₹) </label>

                    <input
                        className="input"
                        type="text"
                        name="p_price"
                        id="p_price"
                        v-model="formData.p_price"
                        placeholder="Eg: 299"
                        autocomplete="off"
                        required
                    />
                </div>

                <div className="input-box">
                    <label for="p_stock_qty"> Update Stock Quantity: </label>

                    <input
                        className="input"
                        type="number"
                        name="p_stock_qty"
                        id="p_stock_qty"
                        v-model="formData.p_stock_qty"
                        placeholder="Eg: 50"
                        autocomplete="off"
                        required
                    />
                </div>

                <div className="input-box">
                    <button className="form-btn" type="submit">
                        Edit Product
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>