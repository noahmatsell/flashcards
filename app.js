const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('I love express');
});

app.get('/hello', (req, res) => {
    res.send('Hi Noah');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000')
});