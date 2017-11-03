const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.render('hello', {name: req.body.username});
});

app.get('/hello', (req, res) => {
  res.render('hello', { name: req.cookies.username });
});

app.get('/cards', (req, res) => {
    res.render('card', {prompt:"When did O Canada become the national anthem?", hint:"It's later than you think..."});
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000');
});