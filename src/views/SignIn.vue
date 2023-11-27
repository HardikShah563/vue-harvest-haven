<script setup>
import "../assets/form.css";
import { RouterLink } from "vue-router";
import { delay } from "../config/utils";
</script>

<script>
export default {
    data() {
        return {
            msg: "",
            msgColor: "",
            response: {},
            formData: {
                email: "",
                passcode: "",
            },
        };
    },
    methods: {
        async login() {
            try {
                await fetch("http://127.0.0.1:5000/signin", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.formData),
                })
                    .then((response) => response.json())
                    .then(async (data) => {
                        if (data.message) {
                            localStorage.setItem("userInfo", JSON.stringify(this.formData))
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
};
</script>

<template>
    <div className="home">
        <div className="form-page flex">
            <div className="form-left flex">
                <img
                    className="home-main"
                    src="../assets/images/store-banner.png"
                    alt="home main img"
                />
                <h1 className="title txt-ctr">We are glad to have you back!</h1>
            </div>

            <div className="form-right flex">
                <div className="form">
                    <h1 className="title">Welcome Back</h1>
                    <h1 className="subtitle">
                        ** Enter your details to purchase delicious goods **
                    </h1>

                    <form @submit.prevent="login()">
                        <div className="input-box">
                            <div className="input msg" :id="msgColor">
                                {{ msg }}
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="email"> Email Address: </label>

                            <input
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                v-model="formData.email"
                                placeholder="abc@gmail.com"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label for="password"> Password: </label>

                            <input
                                className="input"
                                type="password"
                                name="password"
                                id="password"
                                v-model="formData.passcode"
                                placeholder="Pass****"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <button className="form-btn" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="below-form flex">
                        <span className="flex gap-5"
                            >Don't have an account?
                            <RouterLink to="/signup">Sign Up</RouterLink>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>