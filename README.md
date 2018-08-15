# 07-08-Celtics-API

A RESTful API that returns rich data about 2007-2008 champion Boston Celtics basketball team such as game results, fixtures, player details, and more information (Information in returned in JSON format).

 #*Usage*###base_url:`https://cryptic-taiga-72195.herokuapp.com/`
 
 ##Player information Boston Celtics API returns detailed information about all of the Celtics basketball players. Information such as player name, nationality, age, dateOfBirth, height, weight, jerseyNumber, position, averagePoints, averageRebound,and averageAssists is returned. You can get information about all players or about a specific player.
 
 ###Get all players In order to get information about all players make a call too:
 
 `base_url/players`
 
 ###Get player by name In order to get information about a certain player make a call too:
 
 `base_url/players/:name  //name in lowercase characters`
 
 List of player short names:
 
* allen
* allenone
* brown
* cassell
* davis
* garnett
* house
* perkins
* pierce
* pollard
* posey
* powe
* pruitt
* rondo
* scalabrine

 ##Results Information
You can also get detailed information about all Celtics playoff game results, or results by competition name. Information such as game title, competition, opposition, game date, score-line, playoff status, and top scorer is returned.

 ###Get all results In order to get all of Celtics results, no matter what the competition, make a call to:
 `base_url/results`
 
 ###Get results by competition type In order to get all of Celtics results this season, by competition type, make a call to:

`base_url/results/:round //round in all lowercase characters`

 List of competition types:
 * eastern-conference-first-round
 * eastern-conference-semifinals
 * eastern-conference-finals
 * nba-finals
 
 ##General Information Boston Celtics API also returns general infromation about the team such as team name, manager, image, history, number of players etc.
 
 ###Get general information about FC Barcelona In order to get general information about the football club make a call to:
 
 `base_url/general`

##Author Bala Aryal
