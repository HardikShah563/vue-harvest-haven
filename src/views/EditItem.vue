<script>
import "../assets/form.css";
</script>

<template>
    <div className="admin-forms page">
        <div className="form">
            <h1 className="title">Edit Product Details</h1>
            <h1 className="subtitle">** If you do not wish to edit any detail, leave the field empty **</h1>

            <form>
                <div className="input-box">
                    <div className="input msg" id={color}>
                        {msg}
                    </div>
                </div>

                <div className="input-box">
                    <label htmlFor="p_id">
                        Product Name to be edited:
                    </label>

                    <select className="input" name="p_id" id="p_id" value={formData.p_id} required>
                        <option value="">-- None --</option>
                        {products.map((prod) => (
                        <option value={prod._id}>{prod.name}</option>
                        ))}
                    </select>
                </div>

                <div className="input-box">
                    <label for="new_name">
                        New Name for the product selected above:
                    </label>

                    <input className="input" type="text" name="new_name" id="new_name" value={formData.new_name}
                        placeholder="Eg: Veg Aata Maggi" autocomplete="off" required />
                </div>

                <div className="input-box">
                    <label htmlFor="cat">
                        Update Product's Category:
                    </label>

                    <select className="input" name="cat" id="cat" value={formData.cat} required>
                        <option value="">-- None --</option>
                        {categoryNames.map((cat) => (
                        <option value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="input-box">
                    <label for="p_qty">
                        Update Item's Pack Size:
                    </label>

                    <input className="input" type="text" name="p_qty" id="p_qty" value={formData.p_qty}
                        placeholder="Eg: 200g/ 500ml/ ..." autocomplete="off" required />
                </div>

                <div className="input-box">
                    <label for="p_price">
                        Update Price: (In €)
                    </label>

                    <input className="input" type="text" name="p_price" id="p_price" value={formData.p_price}
                        placeholder="Eg: 299" autocomplete="off" required />
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