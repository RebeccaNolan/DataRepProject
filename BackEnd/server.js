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

//Mongo schema
const productSchema = new mongoose.Schema({
    name:String,
    type:String,
    price:String,
    image:String
});

//model based on schema
const productModel = new mongoose.model('myProducts', productSchema);

app.get('/', (req, res) => {
    res.send('This is running from the server');
});

//to fetch all products
app.get('/api/products', async (req, res) => {
    const items = await productModel.find({});
    res.status(200).json({items})
});

//add product
app.post('/api/products', async (req, res) => {
    console.log(req.body.name);
    const {name, type, price, image} = req.body;

    const newProduct = new productModel({name, type, price, image});
    await newProduct.save(); //save to database

    res.status(201).json({"message": "product added", Product:newProduct});
});

//edit - retrieve current info
app.get('/api/products/:id', async (req, res) => {
    let product = await productModel.findById(req.params.id);
    res.send(product);
});

//update info
app.put('/api/products/:id', async (req, res) => {
    let product = await productModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(product);
});

//delete product
app.delete('/api/products/:id', async (req, res) => {
    console.log('Deleting products - ID: ', req.params.id);
    const product = await productModel.findByIdAndDelete(req.params.id)
    res.status(200).send({message: "Item deleted successfully", product});
   
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
