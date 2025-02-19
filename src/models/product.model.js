const mongoose = import("mongoose");

const ProductSchema = mongoose.Schema({
    name: {
        type: String, required: [true, "Please enter product name"]
    }, quantity: {
        type: Number, default: 0, required: true
    }, price: {
        type: Number, required: true, default: 0.00
    }, image: {
        type: String, required: false
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;