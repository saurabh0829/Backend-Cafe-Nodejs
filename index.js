const express = require('express');
var cors = require('cors');
const connection = require('./connection');
//const userRoute = require('./routes/user');
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
//app.use('/use',userRoute); //Whenever an api hits user it will go to user route 

module.exports = app;