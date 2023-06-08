const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello this is my first server');
})

app.listen(port, () => {
    console.log(`This is express port ${port}`)
})