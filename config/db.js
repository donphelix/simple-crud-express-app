const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const url = "mongodb://localhost/pos";
        await mongoose.connect(url);
        console.log("✅ MongoDB Connected");
    } catch (error) {
        console.error("❌ Error connecting to MongoDB:", error);
        process.exit(1); // exit the process with failure
    }
}

module.exports = connectDB;