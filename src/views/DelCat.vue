<script>
import "../assets/form.css";
</script>

<template>
    <div className="admin-forms page">
        <div className="form">
            <h1 className="title">Delete Category</h1>
            <h1 className="subtitle">** Note: All Products inside the category will be deleted **</h1>

            <form>
                <div className="input-box">
                    <div className="input msg" id={color}>
                        {msg}
                    </div>
                </div>

                <div className="input-box">
                    <label
                        htmlFor="category">
                        Select Category to be deleted
                    </label>

                    <select
                        className="input"
                        name="category"
                        id="category"
                        value={formData.category}
                        required>
                        <option value="">-- None --</option>
                        {categoryNames.map((cat) => (
                            <option value={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="input-box">
                    <button
                        className="form-btn"
                        type="submit">
                        Delete Category
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>