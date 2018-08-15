var mongoose = require('./../mongoose.js').mongoose;
var General = require('./../models/general.js').General;

module.exports.addGeneral = () => {
  var general = new General({
    teamName: 'Boston Celtics',
    teamImageURL: 'https://officialpsds.com/imageview/7v/2n/7v2ny1_large.png?1521316553',
    generalManagerName: 'Danny Ainge',
    ownerName: 'Harlod Irving Grousbeck, Stephen Pagliuca and Wyc Grousbeck',
    coachName: 'Doc Rivers',
    numberOfPlayers: 15,
    teamHistory: `Founded in 1946 as one of the original eight NBA teams to survive the league's
     first decade, the team is owned by Boston Basketball Partners LLC. The Celtics play their
     home games at the TD Garden, which they share with the National Hockey League (NHL)'s Boston
     Bruins. The franchise is the most successful in NBA history, with 17 championships, which
     accounts for 23.9 percent of all NBA championships since the league's founding.The Celtics have a
     notable rivalry with the Los Angeles Lakers, and have played the Lakers a record 12 times in
     the NBA Finals (including their most recent appearances in 2008 and 2010), of which the Celtics
     have won 9. Four Celtics players (Bob Cousy, Bill Russell, Dave Cowens and Larry Bird) have won
     the NBA Most Valuable Player Award for an NBA record total of 10 MVP awards.[8] Both the nickname
     "Celtics" and their mascot "Lucky the Leprechaun" are a nod to Boston's historically large Irish
     population. After winning 16 championships throughout the 20th century, the Celtics, after struggling through
     the 1990s, rose again to win a championship in 2008 with the help of Kevin Garnett, Paul Pierce,
     and Ray Allen in what was known as the new "Big Three" era, following the original "Big Three"
     era that featured Larry Bird, Kevin McHale, and Robert Parish, which combined to win the 1981,
     1984, and 1986 championships.`
  });

   general.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
  }, (err) => {
    console.log(err);
  });
}
