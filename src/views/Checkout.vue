<script setup>
// importing stylesheets
import "../assets/checkout.css";
import "../assets/form.css";
// importing components
import Product from "../components/Product.vue";
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
            cart: {},
            screenName: "checkout",
            subtotal: 0,
            tax_rate: 0.09,
            formData: {
                name: "",
                email: "",
                address: "",
                city: "",
                state: "",
                zip: "",
                card_name: "",
                card_no: "",
                card_exp: "",
                cvv: "",
            },
        };
    },
    methods: {
        async getData() {
            console.log("First time render");
            try {
                const response = await fetch("http://127.0.0.1:5000/cart");
                const data = await response.json();
                this.cart = data.cart;
                this.calcTotal();
            } catch (err) {
                console.log(err.message);
            }
        },

        async calcTotal() {
            this.cart.map((el) => {
                console.log(el);
                this.subtotal = this.subtotal + el[8] * el[3];
            });
        },

        async checkout() {
            try {
                await fetch("http://127.0.0.1:5000/checkout", {
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
                            window.scrollTo(0, 0);
                            await delay(2000);
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
    created() {
        this.getData();
    },
    components: {
        Product,
        Footer,
    },
};
</script>

<template>
    <div className="checkout flex page">
        <div className="checkout-form">
            <div className="form">
                <h1 className="title">Checkout With Your Purchase</h1>
                <h1 className="subtitle">
                    ** Enter authentic details to complete the purchase **
                </h1>
                <form @submit.prevent="checkout()">
                    <div className="input-box">
                        <div className="input msg" :id="msgColor">
                            {{msg}}
                        </div>
                    </div>

                    <h1 className="title">Billing Details:</h1>

                    <div className="input-box">
                        <label for="fullname"> Full Name: </label>

                        <input
                            className="input"
                            type="text"
                            name="name"
                            id="name"
                            v-model="formData.name"
                            placeholder="Eg: John Doe"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="email"> Email: </label>

                        <input
                            className="input"
                            type="email"
                            name="email"
                            id="email"
                            v-model="formData.email"
                            placeholder="Eg: johndoe@gmail.com"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="name"> Address: </label>

                        <input
                            className="input"
                            type="text"
                            name="address"
                            id="address"
                            v-model="formData.address"
                            placeholder="Eg: 101/C, Bldg Name"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="city"> City: </label>

                        <input
                            className="input"
                            type="text"
                            name="city"
                            id="city"
                            v-model="formData.city"
                            placeholder="Eg: Mumbai"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="state">
                            <i className="fa-solid fa-mountain-city"></i> State:
                        </label>

                        <input
                            className="input"
                            type="text"
                            name="state"
                            id="state"
                            v-model="formData.state"
                            placeholder="Eg: Maharasthra"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="zip">
                            <i className="fa-solid fa-location-crosshairs"></i>
                            Zip:
                        </label>

                        <input
                            className="input"
                            type="number"
                            name="zip"
                            id="zip"
                            v-model="formData.zip"
                            placeholder="Eg: 000000"
                            required
                        />
                    </div>

                    <h1 className="title">Payment Details:</h1>

                    <div className="input-box">
                        <label for="city"> Name on the card: </label>

                        <input
                            className="input"
                            type="text"
                            name="card_name"
                            id="card_name"
                            v-model="formData.card_name"
                            placeholder="Eg: John Doe"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="card-no"> Card Number: </label>

                        <input
                            className="input"
                            type="text"
                            name="card_no"
                            id="card_no"
                            v-model="formData.card_no"
                            placeholder="Eg: 1234-5678-1011-1213"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="card-exp"> Expiry Date: </label>

                        <input
                            className="input"
                            type="month"
                            name="card_exp"
                            id="card_exp"
                            v-model="formData.card_exp"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <label for="card-cvv"> CVV: </label>

                        <input
                            className="input"
                            type="password"
                            name="cvv"
                            id="cvv"
                            v-model="formData.cvv"
                            placeholder="Eg: ***"
                            required
                        />
                    </div>

                    <div className="input-box">
                        <button className="form-btn" type="submit">
                            Complete Purchase
                        </button>
                    </div>
                </form>
            </div>
        </div>

        <div className="checkout-store">
            <h1 className="title">Cart Items</h1>
            <div class="store">
                <div v-for="prod in cart" :key="prod[0]">
                    <Product
                        :prodId="prod[0]"
                        :prodName="prod[1]"
                        :prodImage="prod[5]"
                        :prodQty="prod[2]"
                        :prodPrice="prod[3]"
                        :prodStockQty="prod[7]"
                        :count="prod[8]"
                        :screenName="screenName"
                    ></Product>
                </div>
            </div>

            <br />
            <hr />

            <div className="checkout-total flex">
                <h1 className="subtitle">Subtotal&emsp;&nbsp;:</h1>
                <h1 className="subtitle">{{ this.subtotal }}</h1>
            </div>
            <div className="checkout-total flex">
                <h1 className="subtitle">CGST (9%)&nbsp;&nbsp;&nbsp;:</h1>
                <h1 className="subtitle">
                    ₹{{ this.tax_rate * this.subtotal }}
                </h1>
            </div>
            <div className="checkout-total flex">
                <h1 className="subtitle">SGST (9%)&nbsp;&nbsp;&nbsp;:</h1>
                <h1 className="subtitle">
                    ₹{{ this.tax_rate * this.subtotal }}
                </h1>
            </div>
            <hr />
            <div className="checkout-total flex">
                <h1 className="title">Grand Total:</h1>
                <h1 className="title">
                    ₹{{ subtotal + this.tax_rate * this.subtotal * 2 }}
                </h1>
            </div>
        </div>
    </div>
    <Footer />
</template>