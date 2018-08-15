const mongoose = require('./../mongoose.js').mongoose;
const Game = require('./../models/games.js').Game

module.exports.addResults = () => {
  var gameOne = new Game({
    title: 'Boston Celtics vs. Atlanta Hawks Game One',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'Apr 20, 2008	',
    celticsPoints: 104,
    oppositionPoints: 81,
    topScorer: 'Al Horford',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 1-0'
  });

  var gameTwo = new Game({
    title: 'Boston Celtics vs. Atlanta Hawks Game Two',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'Apr 23, 2008	',
    celticsPoints: 96,
    oppositionPoints: 77,
    topScorer: 'Kevin Garnett',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 2-0'
  });

  var gameThree = new Game({
    title: 'Atlanta Hawks vs. Boston Celtics Game Three',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'Apr 26, 2008	',
    celticsPoints: 93,
    oppositionPoints: 102,
    topScorer: 'Kevin Garnett',
    winOrLoss: 'Loss',
    seriesStatus: 'Celtics lead 2-1'
  });

  var gameFour = new Game({
    title: 'Atlanta Hawks vs. Boston Celtics Game Four',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'Apr 28, 2008	',
    celticsPoints: 92,
    oppositionPoints: 97,
    topScorer: 'Joe Johnson',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 2-2'
  });

  var gameFive = new Game({
    title: 'Boston Celtics vs. Atlanta Hawks Game Five',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'Apr 30, 2008	',
    celticsPoints: 110,
    oppositionPoints: 85,
    topScorer: 'Paul Pierce',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 3-2'
  });

  var gameSix = new Game({
    title: 'Atlanta Hawks vs. Boston Celtics Game Six',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'May 2, 2008',
    celticsPoints: 100,
    oppositionPoints: 103,
    topScorer: 'Kevin Garnett',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 3-3'
  });

  var gameSeven = new Game({
    title: 'Boston Celtics vs. Atlanta Hawks Game Seven',
    round: 'Eastern-Conference-First-Round',
    opponent: 'Atlanta Hawks',
    date: 'May 4, 2008',
    celticsPoints: 99,
    oppositionPoints: 65,
    topScorer: 'Paul Pierce',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics win 4-3'
  });

  var gameEight = new Game({
    title: 'Boston Celtics vs. Cleveland Cavaliers Game One',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 6, 2008',
    celticsPoints: 76,
    oppositionPoints: 72,
    topScorer: 'Kevin Garnett',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 1-0'
  });

  var gameNine = new Game({
    title: 'Boston Celtics vs. Cleveland Cavaliers Game Two',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 8, 2008',
    celticsPoints: 89,
    oppositionPoints: 73,
    topScorer: 'LeBron James',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 2-0'
  });

  var gameTen = new Game({
    title: 'Cleveland Cavaliers vs. Boston Celtics Game Three',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 10, 2008',
    celticsPoints: 84,
    oppositionPoints: 108,
    topScorer: 'LeBron James and Delonte West',
    winOrLoss: 'Loss',
    seriesStatus: 'Celtics lead 2-1'
  });

  var game11 = new Game({
    title: 'Cleveland Cavaliers vs. Boston Celtics Game Four',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 12, 2008',
    celticsPoints: 77,
    oppositionPoints: 88,
    topScorer: 'LeBron James',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 2-2'
  });

  var game12 = new Game({
    title: 'Boston Celtics vs. Cleveland Cavaliers Game Five',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 14, 2008',
    celticsPoints: 96,
    oppositionPoints: 89,
    topScorer: 'LeBron James',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 3-2'
  });

  var game13 = new Game({
    title: 'Cleveland Cavaliers vs. Boston Celtics Game Six',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 16, 2008',
    celticsPoints: 69,
    oppositionPoints: 74,
    topScorer: 'LeBron James',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 3-3'
  });

  var game14 = new Game({
    title: 'Boston Celtics vs. Cleveland Cavaliers Game Seven',
    round: 'Eastern-Conference-Semifinals',
    opponent: 'Cleveland Cavaliers',
    date: 'May 18, 2008',
    celticsPoints: 97,
    oppositionPoints: 92,
    topScorer: 'LeBron James',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics win 4-3'
  });

  var game15 = new Game({
    title: 'Boston Celtics vs. Detroit Pistons Game One',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 20, 2008',
    celticsPoints: 88,
    oppositionPoints: 79,
    topScorer: 'Kevin Garnet',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 1-0'
  });

  var game16 = new Game({
    title: 'Boston Celtics vs. Detroit Pistons Game Two',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 22, 2008',
    celticsPoints: 97,
    oppositionPoints: 103,
    topScorer: 'Paul Pierce',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 1-1'
  });

  var game17 = new Game({
    title: 'Detroit Pistons vs. Boston Celtics Game Three',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 24, 2008',
    celticsPoints: 94,
    oppositionPoints: 80,
    topScorer: 'Richard Hamilton',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 2-1'
  });

  var game18 = new Game({
    title: 'Detroit Pistons vs. Boston Celtics Game Four',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 26, 2008',
    celticsPoints: 75,
    oppositionPoints: 94,
    topScorer: 'Antonio McDyess',
    winOrLoss: 'Loss',
    seriesStatus: 'Series tied 2-2'
  });

  var game19 = new Game({
    title: 'Boston Celtics vs. Detroit Pistons Game Five',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 28, 2008',
    celticsPoints: 106,
    oppositionPoints: 102,
    topScorer: 'Kevin Garnet',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 3-2'
  });

  var game20 = new Game({
    title: 'Detroit Pistons vs. Boston Celtics Game Six',
    round: 'Eastern-Conference-Finals',
    opponent: 'Detroit Pistons',
    date: 'May 30, 2008',
    celticsPoints: 89,
    oppositionPoints: 81,
    topScorer: 'Chauncey Billups',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics win 4-2'
  });

  var game21 = new Game({
    title: 'Boston Celtics vs. Los Angeles Lakers Game One',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 5, 2008',
    celticsPoints: 98,
    oppositionPoints: 88,
    topScorer: 'Kobe Bryant and Kevin Garnett',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 1-0'
  });

  var game22 = new Game({
    title: 'Boston Celtics vs. Los Angeles Lakers Game Two',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 8, 2008',
    celticsPoints: 108,
    oppositionPoints: 102,
    topScorer: 'Kobe Bryant',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 2-0'
  });

  var game23 = new Game({
    title: 'Los Angeles Lakers vs. Boston Celtics Game Three',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 10, 2008',
    celticsPoints: 81,
    oppositionPoints: 87,
    topScorer: 'Kobe Bryant',
    winOrLoss: 'Loss',
    seriesStatus: 'Celtics lead 2-1'
  });

  var game24 = new Game({
    title: 'Los Angeles Lakers vs. Boston Celtics Game Four',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 12, 2008',
    celticsPoints: 97,
    oppositionPoints: 91,
    topScorer: 'Paul Pierce',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics lead 3-1'
  });

  var game25 = new Game({
    title: 'Los Angeles Lakers vs. Boston Celtics Game Five',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 15, 2008',
    celticsPoints: 98,
    oppositionPoints: 103,
    topScorer: 'Paul Pierce',
    winOrLoss: 'Loss',
    seriesStatus: 'Celtics lead 3-2'
  });

  var game26 = new Game({
    title: 'Celtics	vs.	Los Angeles Lakers Game Six',
    round: 'NBA-Finals',
    opponent: 'Los Angeles Lakers',
    date: 'Jun 17, 2008',
    celticsPoints: 131,
    oppositionPoints: 92,
    topScorer: 'Ray Allen and Kevin Garnett',
    winOrLoss: 'Win',
    seriesStatus: 'Celtics win 4-2'
  });

  gameOne.save().then((doc) => {
}).then((doc) => {
  gameTwo.save();
}).then((doc) => {
  gameThree.save();
}).then((doc) => {
  gameFour.save();
}).then((doc) => {
  gameFive.save();
}).then((doc) => {
  gameSix.save();
}).then((doc) => {
  gameSeven.save()
}).then((doc) => {
  gameEight.save();
}).then((doc) => {
  gameNine.save();
}).then((doc) => {
  gameTen.save();
}).then((doc) => {
  game11.save();
}).then((doc) => {
  game12.save();
}).then((doc) => {
  game13.save();
}).then((doc) => {
  game14.save();
}).then((doc) => {
  game15.save()
}).then((doc) => {
  game16.save();
}).then((doc) => {
  game17.save();
}).then((doc) => {
  game18.save();
}).then((doc) => {
  game19.save();
}).then((doc) => {
  game20.save();
}).then((doc) => {
  game21.save();
}).then((doc) => {
  game22.save();
}).then((doc) => {
  game23.save();
}).then((doc) => {
  game24.save();
}).then((doc) => {
  game25.save();
}).then((doc) => {
  game26.save();
});

}
