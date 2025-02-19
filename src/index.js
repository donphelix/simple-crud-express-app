const express = require('express');
const mongoose = require("mongoose");
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to local mongodb
mongoose.connect('mongodb://localhost/pos')
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

// Listen to the server start
app.listen(3000);