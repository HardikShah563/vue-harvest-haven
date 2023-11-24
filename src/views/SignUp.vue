<script>
import { RouterLink } from "vue-router";
</script>

<template>
    <div className="home">
        <div className="form-page flex">
            <div className="form-left flex">
                <img className="home-main" src="../assets/images/store-name.png" alt="home main img" />
                <h1 className="title txt-ctr">Welcome to Harvest Haven!</h1>
            </div>

            <div className="form-right flex sign-in">
                <div className="form">
                    <h1 className="title">Create New Account</h1>
                    <h1 className="subtitle">** Enter all details to create account **</h1>

                    <form>
                        <div className="input-box">
                            <div className="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div className="input-box">
                            <label for="name">
                                Full Name:
                            </label>

                            <input className="input" type="text" name="name" id="name" value={formData.name}
                                placeholder="John Doe" autocomplete="off" required />
                        </div>

                        <div className="input-box">
                            <label for="email">
                                Email Address:
                            </label>

                            <input className="input" type="email" name="email" id="email" value={formData.email}
                                placeholder="johndoe@gmail.com" autocomplete="off" required />
                        </div>

                        <div className="input-box">
                            <label for="gender">
                                Gender:
                            </label>

                            <select className="input" name="gender" id="gender" value={formData.gender}
                                required>
                                <option value="">-- None --</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <div className="input-box">
                            <label for="password">
                                Password:
                            </label>

                            <input className="input" type="password" name="password" id="password" value={formData.password}
                                placeholder="Pass****" autocomplete="off" required />
                        </div>

                        <div className="input-box">
                            <label for="c-password">
                                Retype Password:
                            </label>

                            <input className="input" type="password" name="cpassword" id="cpassword"
                                value={formData.cpassword} placeholder="Pass****" autocomplete="off"
                                required />
                        </div>

                        <div className="input-box">
                            <button className="form-btn" type="submit">
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className="below-form flex">
                        <span className="flex gap-5">Already have an account? <RouterLink to="/signin">Sign In</RouterLink></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>