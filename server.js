require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/product.routes");

const app = express();
app.use(express.json());

// Root route
app.get("/", (req, res) => {
    res.send("Welcome to the Product API!");
});

// Register routes
app.use("/api/products", productRoutes);

// Connect to database and start the server
connectDB().then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
