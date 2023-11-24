<script>
// importing stylesheets
import "../assets/home.css";
import "../assets/form.css";
// importing components
import Footer from "../components/Footer.vue";

export default {
    components: {
        Footer
    }
}
</script>

<template>
    <div class="page">
        <h1 className="title txt-ctr">Welcome to Merch Store</h1>
        <img class="home-main" src="../assets/images/home-main.png" alt="">
    </div>

    <div class="contact-us">
        <h1 class="title txt-ctr">Contact Us</h1>
        <h1 class="subtitle txt-ctr">Have a suggestion? Leave a message for us</h1>

        <div class="form">
            <form action="{{ url_for('home') }}" method="post">
                <div class="input-box">
                    <div class="input msg" id={{msgColor}}>
                        {{ msg }}
                    </div>
                </div>

                <div class="input-box">
                    <label for="email">
                        Email Address:
                    </label>

                    <input class="input" type="email" name="email" id="email" placeholder="Eg: abc@gmail.com"
                        autocomplete="off" required>
                </div>

                <div class="input-box">
                    <label for="title">
                        Title:
                    </label>

                    <input class="input" type="text" name="title" id="title" placeholder="Eg: Your title here"
                        autocomplete="off" required>
                </div>

                <div class="input-box">
                    <label for="message">
                        Your Email Address:
                    </label>

                    <textarea class="input textarea" name="message" id="message" placeholder="Eg: Your message here"
                        autocomplete="off" required></textarea>
                </div>


                <div class="input-box">
                    <button class="form-btn" type="submit">
                        Send Message
                    </button>
                </div>
            </form>
        </div>
    </div>
    <Footer />
</template>