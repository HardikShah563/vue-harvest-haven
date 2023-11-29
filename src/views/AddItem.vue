<script setup>
// importing from vue
import PictureInput from "vue-picture-input";
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
                p_name: "",
                p_qty: "",
                p_price: "",
                p_stock_qty: "",
                p_img: "",
                c_id: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch("http://127.0.0.1:5000/add-item");
                const data = await response.json();
                this.categories = data.categories;
            } catch (err) {
                console.log(err.message);
            }
        },

        uploadImage(e) {
            const image = e.target.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(image);
            reader.onload = (e) => {
                this.p_img = e.target.result;
                console.log(this.p_img);
            };
        },

        async addItem() {
            try {
                await fetch("http://127.0.0.1:5000/add-item", {
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
            <h1 class="title">Add A New Item</h1>
            <h1 class="subtitle">
                A new category won't be created if one already exists
            </h1>

            <form @submit.prevent="addItem">
                <div class="input-box">
                    <div class="input msg" id="{{msgColor}}">
                        {{ msg }}
                    </div>
                </div>

                <div class="input-box">
                    <label for="p_name"> New Product Name: </label>

                    <input
                        class="input"
                        type="text"
                        name="p_name"
                        id="p_name"
                        v-model="formData.p_name"
                        placeholder="Eg: Maggi"
                        required
                    />
                </div>

                <div class="input-box">
                    <label for="p_qty"> Specify Product's Pack Size: </label>

                    <input
                        class="input"
                        type="text"
                        name="p_qty"
                        id="p_qty"
                        v-model="formData.p_qty"
                        placeholder="Eg: 200g/ 500ml/ ..."
                        required
                    />
                </div>

                <div class="input-box">
                    <label for="p_price"> New Product Price (In ₹): </label>

                    <input
                        class="input"
                        type="number"
                        name="p_price"
                        id="p_price"
                        v-model="formData.p_price"
                        placeholder="Eg: 500"
                        required
                    />
                </div>

                <div class="input-box">
                    <label for="p_stock_qty">
                        New Product Quantity: (No. of products in the
                        inventory/inventory)
                    </label>

                    <input
                        class="input"
                        type="number"
                        name="p_stock_qty"
                        id="p_stock_qty"
                        v-model="formData.p_stock_qty"
                        placeholder="Eg: 50"
                        required
                    />
                </div>

                <!-- <div class="input-box">
                        <label for="p_img">
                            Image of the product (512px x 512px):
                        </label>

                        <input
                            class="input"
                            type="file"
                            name="p_img"
                            id="p_img"
                            accept="image/*"
                            @change="uploadImage"
                            required
                        />
                    </div> -->

                <div class="input-box">
                    <label for="p_img">
                        Image of the product (512px x 512px):
                    </label>

                    <picture-input
                        ref="pictureInput"
                        height="200"
                        accept="image/jpeg,image/png"
                        size="10"
                        button-class="btn"
                        :custom-strings="{
                            upload: '<h1>Upload</h1>',
                            drag: 'Image of the product (512px x 512px)',
                        }"
                        @change="onChange"
                    >
                    </picture-input>
                </div>

                <div class="input-box">
                    <label for="c_id"> Select Category Name: </label>

                    <select
                        class="input"
                        name="c_id"
                        id="c_id"
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

                <div class="input-box">
                    <button class="form-btn" type="submit">Add Item</button>
                </div>
            </form>
        </div>
    </div>
</template>