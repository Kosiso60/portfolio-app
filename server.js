const express = require("express");
const app = express ();
const bodyParser = require('body-parser');
const https = require("https");


app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req,res){
    res.sendFile(__dirname + "/home.html")
})

app.get('/contact', function(req,res){
    res.sendFile(__dirname + "/contact.html")
})

app.get('/about', function(req,res){
    res.sendFile(__dirname + "/about.html")
})
app.listen(3000, function(req, res){
    console.log('up and running on port 3000')
})