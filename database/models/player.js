const mongoose = require('mongoose');

var Player = mongoose.model('Player', {

  fullName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  popularName: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  nationality: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  age: {
    type: Number,
    required: true,
    min: 17,
  },

  dateOfBirth: {
    type: String,
    required: true,
    minLength: 5,
    trim: true
  },

  height: {
    type: String,
    required: true,
    minLength: 0,
    trim: true
  },

  weight: {
    type: Number,
    required: true,
    min: 120,
  },

  jerseyNumber: {
    type: Number,
    required: true,
    minLength: 0,
  },

  position: {
    type: String,
    required: true,
    minLength: 1,
    trim: true
  },

  averagePoints: {
    type: Number,
    required: true,
    min: 0,
  },

  averageRebounds: {
    type: Number,
    required: true,
    min: 0,
  },

  averageAssists: {
    type: Number,
    required: true,
    min: 0,
  },

});

module.exports.Player = {Player};
