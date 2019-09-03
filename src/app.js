const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const app = express();

//Conencta ao banco
mongoose.connect("mongodb+srv://manoel:mongodbnosql@cluster0-4lzxg.mongodb.net/test?retryWrites=true&w=majority");

const product = require('./models/product');
//Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", indexRoute);
app.use("/products", productRoute);

module.exports = app;
