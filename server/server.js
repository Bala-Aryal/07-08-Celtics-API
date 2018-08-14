var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./../database/mongoose.js');
const {Player} = require('./../database/models/player.js');

var app = express();
var port = 3000;
 app.listen(3000,() => {
  console.log(`Server started up on port: ${port}`);
});
