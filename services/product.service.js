const Product = require("../models/product.model");

class ProductService {
    async createProduct(data) {
        if (!data.name || !data.price) {
            throw new Error("Name and price are required");
        }

        return await Product.create({
            name: data.name,
            quantity: data.quantity ?? 0,
            price: data.price,
            image: data.image
        });
    }

    async getAllProducts() {
        return await Product.find();
    }
}

module.exports = new ProductService();
