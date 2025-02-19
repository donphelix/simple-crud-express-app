const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});


app.post('/api/products', (req, res) => {
    res.send("Data Received!!")
});


// Connect to local mongodb
mongoose.connect('mongodb://localhost/pos')
    .then(() => {
        console.log('Connected to MongoDB');
        // Listen to the server start
        app.listen(3000, () => {
            console.log("Server is running on port 3000")
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });