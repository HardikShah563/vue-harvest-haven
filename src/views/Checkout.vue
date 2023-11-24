<script setup>
import "../assets/checkout.css";
import "../assets/form.css";
import Product from "../components/Product.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
    <div className="checkout flex page">
        <div className="checkout-form">
            <div className="form">
                <h1 className="title">Checkout With Your Purchase</h1>
                <h1 className="subtitle">** Enter authentic details to complete the purchase **</h1>
                <form>
                    <div className="input-box">
                        <div className="input msg" id={color}>
                            <!-- {msg} -->
                        </div>
                    </div>

                    <h1 className="title">Billing Details:</h1>

                    <div className="input-box">
                        <label for="fullname">
                            <i className="fa fa-user"></i> Full Name:
                        </label>

                        <input className="input" type="text" name="name" id="name" value={formData.name}
                            placeholder="Eg: John Doe" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="email">
                            <i className="fa fa-envelope"></i> Email:
                        </label>

                        <input className="input" type="email" name="email" id="email" value={formData.email}
                            placeholder="Eg: johndoe@gmail.com" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="name">
                            <i className="fa fa-address-card-o"></i> Address:
                        </label>

                        <input className="input" type="text" name="address" id="address" value={formData.address}
                            placeholder="Eg: 101/C, Bldg Name" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="city">
                            <i className="fa fa-institution"></i> City:
                        </label>

                        <input className="input" type="text" name="city" id="city" value={formData.city}
                            placeholder="Eg: Dublin" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="state">
                            <i className="fa-solid fa-mountain-city"></i> State:
                        </label>

                        <input className="input" type="text" name="state" id="state" value={formData.state}
                            placeholder="Eg: Dublin" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="zip">
                            <i className="fa-solid fa-location-crosshairs"></i> Zip:
                        </label>

                        <input className="input" type="number" name="zip" id="zip" value={formData.zip}
                            placeholder="Eg: 000000" autocomplete="off" required />
                    </div>

                    <h1 className="title">Payment Details:</h1>
                    <h1 className="subtitle">Accepted Cards</h1>
                    <h1 className="flex gap-5 title">
                        <i className="fa fa-cc-visa" id="navy-card"></i>
                        <i className="fa fa-cc-amex" id="blue-card"></i>
                        <i className="fa fa-cc-mastercard" id="red-card"></i>
                        <i className="fa fa-cc-discover" id="orange-card"></i>
                    </h1>

                    <div className="input-box">
                        <label for="city">
                            <i className="fa-solid fa-signature"></i> Name on the card:
                        </label>

                        <input className="input" type="text" name="card_name" id="card_name" value={formData.card_name}
                            placeholder="Eg: John Doe" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="card-no">
                            <i className="fa-solid fa-list-ol"></i> Card Number:
                        </label>

                        <input className="input" type="text" name="card_no" id="card_no" value={formData.card_no}
                            placeholder="Eg: 1234-5678-1011-1213" autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="card-exp">
                            <i className="fa-solid fa-calendar-days"></i> Expiry Date:
                        </label>

                        <input className="input" type="month" name="card_exp" id="card_exp" value={formData.card_exp}
                            autocomplete="off" required />
                    </div>

                    <div className="input-box">
                        <label for="card-cvv">
                            <i className="fa-solid fa-key"></i> CVV:
                        </label>

                        <input className="input" type="password" name="cvv" id="cvv" value={formData.cvv} autocomplete="off"
                            placeholder="Eg: ***" required />
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
            <div class="store" id="cart-items">
                <div v-for="(item, index) in shopItems" :key="index">
                    <Product :prodName="item.prodName" :prodImage="item.prodImage" :prodQty="item.prodQty"
                        :prodPrice="item.prodPrice" :prodStockQty="item.prodStockQty"></Product>
                </div>
                <Product prodName="Potatos" prodImage="tomatos.png" prodQty="1kg" prodPrice=29 prodStockQty=50 />
            </div>

            <br />
            <hr />
            
            <div className="checkout-total flex">
                <h1 className="subtitle">Subtotal&emsp;&nbsp;: </h1>
                <h1 className="subtitle">{subtotal}</h1>
            </div>
            <div className="checkout-total flex">
                <h1 className="subtitle">CGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                <h1 className="subtitle">₹{tax}</h1>
            </div>
            <div className="checkout-total flex">
                <h1 className="subtitle">SGST (9%)&nbsp;&nbsp;&nbsp;: </h1>
                <h1 className="subtitle">₹{tax}</h1>
            </div>
            <hr />
            <div className="checkout-total flex">
                <h1 className="title">Grand Total: </h1>
                <h1 className="title">₹{subtotal + (tax * 2)}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        Product
    },
    data() {
        return {
            shopItems: [
                {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }, {
                    prodName: "Potatos",
                    prodImage: "tomatos.png",
                    prodQty: "1kg",
                    prodPrice: 29,
                    prodStockQty: 50,
                }
            ],
        }
    }
}
</script>