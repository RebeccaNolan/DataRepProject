const express = require('express');
const app = express();
const port = 4000;

const cors = require('cors');
app.use(cors()); //CORS middleware for all routes

//CORS headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//allow JSON to parse info out of HTTP request
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to MongoDB database
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://admin:admin@cluster0.p4dds.mongodb.net/music_shop');

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});