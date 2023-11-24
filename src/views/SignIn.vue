<script>
import "../assets/form.css";
import { RouterLink } from "vue-router";
</script>

<template>
    <div className="home">
        <div className="form-page flex">
            <div className="form-left flex">
                <img className="home-main" src="../assets/images/store-banner.png" alt="home main img" />
                <h1 className="title txt-ctr">We are glad to have you back!</h1>
            </div>

            <div className="form-right flex">
                <div className="form">
                    <h1 className="title">Welcome Back</h1>
                    <h1 className="subtitle">** Enter your details to purchase delicious goods **</h1>

                    <form>
                        <div className="input-box">
                            <div className="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="email">
                                Email Address:
                            </label>

                            <input className="input" type="email" name="email" id="email" value={formData.email}
                                placeholder="abc@gmail.com" autocomplete="off" required />
                        </div>

                        <div className="input-box">
                            <label for="password">
                                Password:
                            </label>

                            <input className="input" type="password" name="password" id="password" value={formData.password}
                                placeholder="Pass****" autocomplete="off" required />
                        </div>

                        <div className="input-box">
                            <button className="form-btn" type="submit">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="below-form flex">
                        <span className="flex gap-5">Don't have an account? <RouterLink to="/signup">Sign Up</RouterLink></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>