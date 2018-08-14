var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./../database/mongoose.js');
const {Player} = require('./../database/models/player.js');
const fillPlayers = require('./../database/initialize_database/fill_players.js').Player;

app.use(bodyParser.json());

app.get('/players', (req, res) => {
  Player.find().then((players) => {
    res.send({
      status: 200,
      playersCount: players.length,
      players: players
    });
  }, (err) => {
    res.status(400).send({
      status: 400,
      errorMessage: 'Unable to return data',
      errorDetail: `Error: ${err}`
    });
  } );
});

fillPlayers.addPlayers();
var app = express();
var port = process.env.PORT || 3000;
 app.listen(port,() => {
  console.log(`Server started up on port: ${port}`);
});
