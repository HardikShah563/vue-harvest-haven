<script setup>
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
                name: "",
                email: "",
                gender: "",
                passcode: "",
                c_passcode: "",
            },
        };
    },
    methods: {
        async register() {
            try {
                await fetch("http://127.0.0.1:5000/signup", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(this.formData),
                })
                    .then((response) => response.json())
                    .then((data) => {
                        this.msg = data.message;
                        if(data.message) {
                            this.msgColor = "green";
                            delay(500);
                            this.msg = "redirecting... wait";
                            delay(1000);
                            window.location.href = "/";
                        }
                        else {
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
                    src="../assets/images/store-name.png"
                    alt="home main img"
                />
                <h1 className="title txt-ctr">Welcome to Harvest Haven!</h1>
            </div>

            <div className="form-right flex sign-in">
                <div className="form">
                    <h1 className="title">Create New Account</h1>
                    <h1 className="subtitle">
                        ** Enter all details to create account **
                    </h1>

                    <form @submit.prevent="register()">
                        <div className="input-box">
                            <div className="input msg" :id="msgColor">
                                {{ msg }}
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="name"> Full Name: </label>

                            <input
                                className="input"
                                type="text"
                                name="name"
                                id="name"
                                v-model="formData.name"
                                placeholder="John Doe"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label for="email"> Email Address: </label>

                            <input
                                className="input"
                                type="email"
                                name="email"
                                id="email"
                                v-model="formData.email"
                                placeholder="johndoe@gmail.com"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <label for="gender"> Gender: </label>

                            <select
                                className="input"
                                name="gender"
                                id="gender"
                                v-model="formData.gender"
                                required
                            >
                                <option disabled value="">-- None --</option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
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
                            <label for="c-password"> Retype Password: </label>

                            <input
                                className="input"
                                type="password"
                                name="cpassword"
                                id="cpassword"
                                v-model="formData.c_passcode"
                                placeholder="Pass****"
                                required
                            />
                        </div>

                        <div className="input-box">
                            <button className="form-btn" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="below-form flex">
                        <span className="flex gap-5"
                            >Already have an account?
                            <RouterLink to="/signin">Sign In</RouterLink></span
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>