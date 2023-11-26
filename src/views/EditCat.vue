<script>
</script>

<template>
    <div class="admin-forms page">
                <div class="form">
                    <h1 class="title">Edit Category Name</h1>
                    <h1 class="subtitle">** Category of all the items in the particular category will change **</h1>

                    <form>
                        <div class="input-box">
                            <div class="input msg" id={color}>
                                <!-- {msg} -->
                            </div>
                        </div>

                        <div class="input-box">
                            <label
                                htmlFor="old_name">
                                Select Category Name to be changed
                            </label>

                            <select
                                class="input"
                                name="old_name"
                                id="old_name"
                                value={formData.old_name}
                                required>
                                <option value="">-- None --</option>
                                {categoryNames.map((cat) => (
                                    <option value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>

                        <div class="input-box">
                            <label
                                htmlFor="new_name">
                                New Name:
                            </label>

                            <input
                                class="input"
                                type="text"
                                name="new_name"
                                id="new_name"
                                value={formData.new_name}
                                placeholder="Eg: Veg Aata Maggi"
                                autocomplete="off"
                                required
                            />
                        </div>

                        <div class="input-box">
                            <button
                                class="form-btn"
                                type="submit">
                                Edit Category
                            </button>
                        </div>
                    </form>
                </div>
            </div>
</template>