const mongoose = require('mongoose');

var Game = mongoose.model('Game', {
  title: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  round: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  opponent: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  date:{
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  celticsPoints: {
    type: Number,
    required: true,
    min: 50,
  },

  oppositionPoints: {
    type: Number,
    required: true,
    min: 50,
  },

  topScorer: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  winOrLoss: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  seriesStatus: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  }

});

module.exports.Game = Game;
