const Player = require('./../models/player.js').Player;
const mongoose = require('./../mongoose.js').mongoose;

module.exports.addPlayers = () => {
  var allen = new Player ({
    fullName: 'Walter Ray Allen, Jr.',
    popularName: 'allen',
    nationality: 'American',
    age: 43,
    dateOfBirth: 'July 20, 1975',
    height: "6-5",
    weight: 205,
    jerseyNumber: 20,
    position: 'Shooting Guard',
    averagePoints: 	17.4,
    averageRebounds: 3.7,
    averageAssists: 3.1
  });

  var allenone = new Player ({
    fullName: 'Tony Allen',
    popularName: 'allenone',
    nationality: 'American',
    age: 36,
    dateOfBirth: 'January 11, 1982',
    height: "6-4",
    weight: 213,
    jerseyNumber: 42,
    position: 'Shooting Guard',
    averagePoints: 	6.6,
    averageRebounds: 2.2,
    averageAssists: 1.5
  });

  var brown = new Player ({
    fullName: 'Collier "P. J." Brown Jr.',
    popularName: 'brown',
    nationality: 'American',
    age: 48,
    dateOfBirth: 'October 14, 1969',
    height: "6-11",
    weight: 225,
    jerseyNumber: 93,
    position: 'Power Forward',
    averagePoints: 	2.2,
    averageRebounds: 3.8,
    averageAssists: 0.6
  });

  var cassell = new Player ({
    fullName: 'Samuel James Cassell Sr.',
    popularName: 'cassell',
    nationality: 'American',
    age: 48,
    dateOfBirth: 'November 18, 1969',
    height: "6-3",
    weight: 185,
    jerseyNumber: 28,
    position: 'Point Guard',
    averagePoints: 	7.6,
    averageRebounds: 1.8,
    averageAssists: 2.1
  });

  var davis = new Player ({
    fullName: 'Ronald Glen Davis',
    popularName: 'davis',
    nationality: 'American',
    age: 32,
    dateOfBirth: 'January 1, 1986',
    height: "6-9",
    weight: 289,
    jerseyNumber: 11,
    position: 'Center',
    averagePoints: 	4.5,
    averageRebounds: 3.0,
    averageAssists: 0.4
  });

  var garnett = new Player ({
    fullName: 'Kevin Maurice Garnett',
    popularName: 'garnett',
    nationality: 'American',
    age: 42,
    dateOfBirth: 'May 19, 1976',
    height: "6-11",
    weight: 240,
    jerseyNumber: 5,
    position: 'Power Forward',
    averagePoints: 	18.8,
    averageRebounds: 9.2,
    averageAssists: 3.4
  });

  var house = new Player ({
    fullName: 'Edward Lee House II',
    popularName: 'house',
    nationality: 'American',
    age: 40,
    dateOfBirth: 'May 14, 1978',
    height: "6-1",
    weight: 180,
    jerseyNumber: 50,
    position: 'Point Guard',
    averagePoints: 	7.5,
    averageRebounds: 2.1,
    averageAssists: 1.9
  });

  var perkins = new Player ({
    fullName: 'Kendrick LaDale Perkins',
    popularName: 'perkins',
    nationality: 'American',
    age: 33,
    dateOfBirth: 'November 10, 1984',
    height: "6-10",
    weight: 270,
    jerseyNumber: 43,
    position: 'Center',
    averagePoints: 	6.9,
    averageRebounds: 6.1,
    averageAssists: 1.1
  });

  var pierce = new Player ({
    fullName: 'Paul Anthony Pierce ',
    popularName: 'pierce',
    nationality: 'American',
    age: 40,
    dateOfBirth: 'October 13, 1977',
    height: "6-7",
    weight: 235,
    jerseyNumber: 34,
    position: 'Small Forward',
    averagePoints: 	19.6,
    averageRebounds: 5.1,
    averageAssists: 4.5
  });

  var pollard = new Player ({
    fullName: 'Scot L. Pollard',
    popularName: 'pollard',
    nationality: 'American',
    age: 43,
    dateOfBirth: 'February 12, 1975',
    height: "6-11",
    weight: 265,
    jerseyNumber: 66,
    position: 'Center',
    averagePoints: 	1.8,
    averageRebounds: 1.7,
    averageAssists: 0.1
  });

  var posey = new Player ({
    fullName: 'James Mikely Mantell Posey, Jr.',
    popularName: 'posey',
    nationality: 'American',
    age: 41,
    dateOfBirth: 'January 13, 1977',
    height: "6-8",
    weight: 215,
    jerseyNumber: 41,
    position: 'Power Forward',
    averagePoints: 	7.4,
    averageRebounds: 4.4,
    averageAssists: 1.5
  });

  var powe = new Player ({
    fullName: 'Leon Powe, Jr.',
    popularName: 'powe',
    nationality: 'American',
    age: 34,
    dateOfBirth: 'January 22, 1984',
    height: "6-8",
    weight: 240,
    jerseyNumber: 0,
    position: 'Center',
    averagePoints: 	7.9,
    averageRebounds: 4.1,
    averageAssists: 0.3
  });

  var pruitt = new Player ({
    fullName: 'Gabe Pruitt',
    popularName: 'pruitt',
    nationality: 'American',
    age: 32,
    dateOfBirth: 'April 19, 1986',
    height: "6-4",
    weight: 170,
    jerseyNumber: 13,
    position: 'Point Guard',
    averagePoints: 	2.1,
    averageRebounds: 0.5,
    averageAssists: 0.9
  });

  var rondo = new Player ({
    fullName: 'Rajon Pierre Rondo',
    popularName: 'rondo',
    nationality: 'American',
    age: 32,
    dateOfBirth: 'February 22, 1986',
    height: "6-1",
    weight: 186,
    jerseyNumber: 9,
    position: 'Point Guard',
    averagePoints: 	10.6,
    averageRebounds: 4.2,
    averageAssists: 5.1
  });

  var scalabrine = new Player ({
    fullName: 'Brian David Scalabrine',
    popularName: 'scalabrine',
    nationality: 'American',
    age: 40,
    dateOfBirth: 'March 18, 1978',
    height: "6-9",
    weight: 241,
    jerseyNumber: 44,
    position: 'Power Forward',
    averagePoints: 	1.8,
    averageRebounds: 1.6,
    averageAssists: 0.6
  });

  allen.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  allenone.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  brown.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  cassell.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  davis.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  garnett.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  house.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  perkins.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  pierce.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  pollard.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  posey.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  powe.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  pruitt.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  rondo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });

  scalabrine.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}
