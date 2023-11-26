<script>
import "../assets/form.css";
</script>

<template>
    <div className="admin-forms page">
                <div className="form">
                    <h1 className="title">Delete Product</h1>
                    <h1 className="subtitle">** Note: The action cannot be revoked, think before deleting **</h1>

                    <form>
                        <div className="input-box">
                            <div className="input msg" id={color}>
                                {msg}
                            </div>
                        </div>

                        <div className="input-box">
                            <label
                                htmlFor="p_id">
                                Select Item to be deleted
                            </label>

                            <select
                                className="input"
                                name="p_id"
                                id="p_id"
                                value={formData.p_id}
                                required>
                                <option value="">-- None --</option>
                                {products.map((prod) => (
                                    <option value={prod._id}>{prod.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="input-box">
                            <button
                                className="form-btn"
                                type="submit">
                                Delete Product
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</template>