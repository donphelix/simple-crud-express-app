const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

// Connect to local mongodb


// Listen to the server start
app.listen(3000);