<script setup>
// importing from vue
import { RouterLink } from "vue-router";
// importing stylesheets
import "../assets/footer.css";
const year = new Date().getFullYear();
</script>

<template>
    <footer className="footer" id="footer">
    <div className="footer-sections">
        <div className="foot-section">
                <img class="footer-logo" src="../assets/images/store-name.png" alt="store name">
                <h1 className="txt-ctr">HARVEST <br /> HAVEN</h1>
            </div>

            <div className="foot-section">
                <li className="heading">
                    Blogs
                </li>

                <a target="_blank"
                    href="https://medium.com/the-research-nest/how-to-choose-the-right-products-for-your-online-store-287a14b1e0ff">
                    Choosing Right
                </a>

                <a target="_blank"
                    href="https://medium.com/@salesklik/the-importance-of-high-quality-product-images-in-e-commerce-463ce90b9881">
                    Quality Matters
                </a>
            </div>

            <div className="foot-section">
                <li className="heading">
                    Store
                </li>

                <RouterLink to="/shop">View Shop</RouterLink>
            </div>

            <div className="foot-section">
                <li className="heading">
                    Social
                </li>

                <a href="/">Instagram</a>
                <a href="/">Youtube</a>
                <a href="/">Facebook</a>
                <a href="/">Twitter</a>
            </div>
        </div>
        <hr />
        <div className="below-footer-as">
            <br />
            <div className="txt-ctr">
                @{{ year }}&nbsp;Harvest Haven | All Rights Reserved
            </div>
        </div>
    </footer>
</template>