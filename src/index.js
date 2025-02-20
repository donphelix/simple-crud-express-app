const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model");

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Product API!");
});

// POST route to insert a product into MongoDB
app.post("/api/products", async (req, res) => {
        try {
            const {name, quantity, price, image} = req.body;

            // Validate required fields
            if (!name || !price) {
                return res.status(400).json({message: "Name and price are required"});
            }

            // Create and save product
            const product = new Product({
                name,
                quantity: quantity ?? 0,  // Default to 0 if not provided
                price,
                image
            });

            await product.save();
            res.status(201).json(product);
        } catch (err) {
            console.error("Error:", err.message);
            res.status(500).json({message: "Internal Server Error"});
        }
    }
)

// Connect to MongoDB and start server
mongoose
    .connect("mongodb://localhost/pos") // No need for extra options in Mongoose 6+
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    })
    .catch((error) => {
        console.error("Error connecting to MongoDB:", error);
    });
