//<reference path="angular.js/">

var myApp=angular.module("myModule",[]);

myApp.controller("myController",function($scope,$location,$anchorScroll) {

	 $scope.message1="1. Manchester City wins Premier League 2018/19 by a margin of 1 point and become the first team to retain the Premier League title in decade";

	 $scope.message2="2. Liverpool crowned European Champions for the sixth time as they beat Tottenham Hotspur by 2-0 in UCL final";

	 $scope.message3="3. Portugal win the inagural UEFA Nations League defeating Netherlands 1-0";

	 $scope.message4="4. Barcelona crowned champions of La Liga once again but fail in their major target of winning the UCL";
	 
	 $scope.message5="5. Paris-Saint-German, Bayern Munich and Juventus continue their dominance in their respective domestic leagues by winning yet another League title";

	 $scope.update="Last updated - 12/06/2019 (18:12:52 IST) "

	 var cl1=[
	 {position:1,club:"Manchester City",matches:38,won:32,draw:2,lost:4,gd:"+72",points:98},
	 {position:2,club:"Liverpool",matches:38,won:30,draw:7,lost:1,gd:"+67",points:97},
	 {position:3,club:"Cheslea",matches:38,won:21,draw:9,lost:8,gd:"+24",points:72},
	 {position:4,club:"Tottenham Hotspur",matches:38,won:23,draw:2,lost:13,gd:"+28",points:71}
	 ];
	 $scope.cl1=cl1;

	 var el1=[
	 {position:5,club:"Arsenal",matches:38,won:21,draw:7,lost:10,gd:"+22",points:70},
	 {position:6,club:"Manchester United",matches:38,won:19,draw:9,lost:10,gd:"+11",points:70}
	  ]; 
	 $scope.el1=el1;

	 var mid1=[
	
	 {position:7,club:"Wolverhampton Wanderers",matches:38,won:16,draw:9,lost:13,gd:"+1",points:57},
	 {position:8,club:"Everton",matches:38,won:15,draw:9,lost:14,gd:"+8",points:54},
	 {position:9,club:"Leicester City",matches:38,won:15,draw:7,lost:16,gd:"+3",points:52},
	 {position:10,club:"West Ham United Everton",matches:38,won:15,draw:7,lost:16,gd:"-3",points:52},
	 {position:11,club:"Watford",matches:38,won:14,draw:8,lost:16,gd:"-7",points:50},
	 {position:12,club:"Crystal Palace",matches:38,won:14,draw:7,lost:17,gd:"-2",points:49},
	 {position:13,club:"Newcastle United",matches:38,won:12,draw:9,lost:17,gd:"-6",points:45},
	 {position:14,club:"AFC Bournemouth",matches:38,won:13,draw:6,lost:19,gd:"-14",points:45},
	 {position:15,club:"Burnley",matches:38,won:11,draw:7,lost:20,gd:"-23",points:40},
	 {position:16,club:"Southampton",matches:38,won:9,draw:12,lost:17,gd:"-14",points:39},
	 {position:17,club:"Brighton & Hove Albion",matches:38,won:9,draw:9,lost:20,gd:"-25",points:36}
	 ];
	 $scope.mid1=mid1;

	 var rel1=[ 
	 {position:18,club:"Cardiff City",matches:38,won:10,draw:4,lost:24,gd:"-35",points:34},
	 {position:19,club:"Fulham",matches:38,won:7,draw:5,lost:26,gd:"-47",points:26},
	 {position:20,club:"Huddersfield Town",matches:38,won:3,draw:7,lost:28,gd:"-54",points:16}
	 ];
	 $scope.rel1=rel1;


	 var goal1=[
	 {position:1,name:"Aubameyang",club:"Arsenal",goals:22},
	 {position:1,name:"Salah",club:"Liverpool",goals:22},
	 {position:3,name:"Mane",club:"Liverpool",goals:22}
	 ];
	 $scope.goal1=goal1;

	 var assist1=[
	 {position:1,name:"Eden Hazard",club:"Chelsea",assists:15},
	 {position:2,name:"Fraser",club:"AFC Bournemouth",assists:14},
	 {position:3,name:"Eriksen",club:"Tottenham Hotspur",assists:12}
	 ];
	 $scope.assist1=assist1;

	 var cs1=[
	 {position:1,name:"Allison",club:"Liverpool",cleansheets:21},
	 {position:2,name:"Ederson",club:"Manchester City",cleansheets:20},
	 {position:3,name:"Kepa",club:"Chelsea",cleansheets:16}
	 ];
	 $scope.cs1=cs1;


	 var cl2=[
	 {position:1,club:"Barcelona",matches:38,won:26,draw:9,lost:3,gd:"+44",points:87},
	 {position:2,club:"Athletico Madrid",matches:38,won:22,draw:10,lost:6,gd:"+26",points:76},
	 {position:3,club:"Real Madrid",matches:38,won:21,draw:5,lost:12,gd:"+17",points:68},
	 {position:4,club:"Valencia",matches:38,won:15,draw:16,lost:7,gd:"+16",points:61}
	 ];
	 $scope.cl2=cl2;

	 var el2=[
	 {position:5,club:"Getafe",matches:38,won:15,draw:14,lost:9,gd:"+13",points:59},
	 {position:6,club:"Sevilla",matches:38,won:17,draw:8,lost:13,gd:"+15",points:59} 
	 ]; 
	 $scope.el2=el2;

	 var mid2=[
	 {position:7,club:"Espanyol",matches:38,won:14,draw:11,lost:13,gd:"-2",points:53},
	 {position:8,club:"Athletic Club",matches:38,won:13,draw:14,lost:11,gd:"-4",points:53},
	 {position:9,club:"Real Sociedad",matches:38,won:13,draw:11,lost:14,gd:"-1",points:50},
	 {position:10,club:"Real Betis",matches:38,won:14,draw:8,lost:16,gd:"-8",points:50},
	 {position:11,club:"Depotivo Alaves",matches:38,won:13,draw:11,lost:14,gd:"-11",points:50},
	 {position:12,club:"Eibar",matches:38,won:11,draw:14,lost:13,gd:"-4",points:47},
	 {position:13,club:"Leganes",matches:38,won:11,draw:12,lost:15,gd:"-6",points:45},
	 {position:14,club:"Villarreal",matches:38,won:10,draw:14,lost:14,gd:"-3",points:44},
	 {position:15,club:"Levente",matches:38,won:11,draw:11,lost:16,gd:"-7",points:44},
	 {position:16,club:"Real Valladolid",matches:38,won:10,draw:11,lost:17,gd:"-19",points:41},
	 {position:17,club:"Celta de Vigo",matches:38,won:10,draw:11,lost:17,gd:"-9",points:41}
	 ];
	 $scope.mid2=mid2;

	 var rel2=[
	 {position:18,club:"Girona",matches:38,won:9,draw:10,lost:19,gd:"-16",points:37},
	 {position:19,club:"Huesca",matches:38,won:7,draw:12,lost:19,gd:"-22",points:33},
	 {position:20,club:"Rayo Vallecano",matches:38,won:8,draw:8,lost:22,gd:"-29",points:32}
	 ];
	 $scope.rel2=rel2;

	 var goal2=[
	 {position:1,name:"Messi",club:"Barcelona",goals:36},
	 {position:2,name:"Benzema",club:"Real Madrid",goals:21},
	 {position:3,name:"Suarez",club:"Barcelona",goals:21}
	 ];
	 $scope.goal2=goal2;

	 var assist2=[
	 {position:1,name:"Messi",club:"Barcelona",assists:13},
	 {position:2,name:"Sarabia",club:"Sevilla",assists:13},
	 {position:3,name:"Jony",club:"Depotivo Alaves",assists:10}
	 ];
	 $scope.assist2=assist2;

	 var cs2=[
	 {position:1,name:"Oblak",club:"Athletico Madrid",cleansheets:20},
	 {position:2,name:"Ter Stegen",club:"Girona",cleansheets:16},
	 {position:3,name:"Soria",club:"Getafe",cleansheets:13}
	 ];
	 $scope.cs2=cs2;


	 var cl3=[
	 {position:1,club:"Juventus",matches:38,won:28,draw:6,lost:4,gd:"+40",points:90},
	 {position:2,club:"Napoli",matches:38,won:24,draw:7,lost:7,gd:"+38",points:79},
	 {position:3,club:"Atlanta",matches:38,won:20,draw:9,lost:9,gd:"+31",points:69},
	 {position:4,club:"Inter Milan",matches:38,won:20,draw:9,lost:9,gd:"+24",points:69}
	 ];
	 $scope.cl3=cl3;

	 var el3=[
	 {position:5,club:"AC Milan",matches:38,won:19,draw:11,lost:8,gd:"+19",points:68},
	 {position:6,club:"Roma",matches:38,won:18,draw:12,lost:8,gd:"+18",points:66}
	 ]; 
	 $scope.el3=el3;

	 var mid3=[
	 {position:7,club:"Torino",matches:38,won:16,draw:15,lost:7,gd:"+15",points:63},
 	 {position:8,club:"Lazio",matches:38,won:17,draw:8,lost:13,gd:"+10",points:59},
	 {position:9,club:"Sampdoria",matches:38,won:15,draw:8,lost:15,gd:"+9",points:53},
	 {position:10,club:"Bologna",matches:38,won:11,draw:11,lost:16,gd:"-8",points:44},
	 {position:11,club:"Sassuolo",matches:38,won:9,draw:16,lost:13,gd:"-7",points:43},
	 {position:12,club:"Udinese",matches:38,won:11,draw:10,lost:17,gd:"-14",points:43},
	 {position:13,club:"SPAL",matches:38,won:11,draw:9,lost:18,gd:"-12",points:42},
	 {position:14,club:"Parma",matches:38,won:10,draw:11,lost:17,gd:"-20",points:41},
	 {position:15,club:"Cagliari",matches:38,won:10,draw:11,lost:17,gd:"-18",points:41},
	 {position:16,club:"Fiorentina",matches:38,won:8,draw:17,lost:13,gd:"+2",points:41},
	 {position:17,club:"Geno",matches:38,won:8,draw:14,lost:16,gd:"-18",points:38}
	 ];
	 $scope.mid3=mid3;

	 var rel3=[
	 {position:18,club:"Empoli",matches:38,won:10,draw:8,lost:20,gd:"-19",points:38},
	 {position:19,club:"Frosinone",matches:38,won:5,draw:10,lost:23,gd:"-40",points:25},
	 {position:20,club:"Chievo",matches:38,won:2,draw:14,lost:22,gd:"-50",points:17}
	 ];
	 $scope.rel3=rel3;

	 var goal3=[
	 {position:1,name:"Quagliarella",club:"Sampdoria",goals:26},
	 {position:2,name:"Zapata",club:"Atlanta",goals:23},
	 {position:3,name:"Paitek",club:"AC Milan",goals:22}
	 
	 ];
	 $scope.goal3=goal3;

	 var assist3=[
	 {position:1,name:"Gomez",club:"Atlanta",assists:11},
	 {position:2,name:"Mertens",club:"Napoli",assists:11},
	 {position:3,name:"Suso",club:"AC Milan",assists:10}
	 ];
	 $scope.assist3=assist3;

	 var cs3=[
	 {position:1,name:"Handanovic",club:"Inter Milan",cleansheets:17},
	 {position:2,name:"Sirigu",club:"FC Torino",cleansheets:15},
	 {position:3,name:"Donnarumma",club:"AC Milan",cleansheets:13}
	 ];
	 $scope.cs3=cs3;


	 var cl4=[
	 {position:1,club:"Bayern Munich",matches:34,won:24,draw:6,lost:4,gd:"+56",points:78},
	 {position:2,club:"Borrusia Dortmund",matches:34,won:23,draw:7,lost:4,gd:"+37",points:76},
	 {position:3,club:"RB Leipzig",matches:34,won:19,draw:9,lost:6,gd:"+34",points:66},
	 {position:4,club:"Bayer Leverkusen",matches:34,won:18,draw:4,lost:12,gd:"+17",points:58}
	 ];
	 $scope.cl4=cl4;

	 var el4=[
	 {position:5,club:"Borrusia Monchengladbach",matches:34,won:16,draw:7,lost:11,gd:"+13",points:55},
	 {position:6,club:"Wolfsburg",matches:34,won:16,draw:7,lost:11,gd:"+12",points:55} 
	 ]; 
	 $scope.el4=el4;

	 var mid4=[
	 {position:7,club:"Eintracht Frankfurt",matches:34,won:15,draw:9,lost:10,gd:"+12",points:54},
	 {position:8,club:"Wernder Bremen",matches:34,won:14,draw:11,lost:9,gd:"+9",points:53},
	 {position:9,club:"Hoffenheim",matches:34,won:13,draw:12,lost:9,gd:"+18",points:51},
	 {position:10,club:"Fortuna Dusseldorf",matches:34,won:13,draw:5,lost:16,gd:"-16",points:44},
	 {position:11,club:"Hertha BSC",matches:34,won:11,draw:10,lost:13,gd:"-8",points:43},
	 {position:12,club:"Mainz 05",matches:34,won:12,draw:7,lost:15,gd:"-11",points:43}, 
	 {position:13,club:"Freiburg",matches:34,won:8,draw:12,lost:14,gd:"-15",points:36},
	 {position:14,club:"Schalke 04",matches:34,won:8,draw:9,lost:17,gd:"-18",points:33},
	 {position:15,club:"Augsburg",matches:34,won:8,draw:8,lost:18,gd:"-20",points:32} 
	 ];
	 $scope.mid4=mid4;

	 var rel4=[
	 {position:16,club:"Stuttgart",matches:34,won:7,draw:7,lost:20,gd:"-28",points:28},
	 {position:17,club:"Hannover 96",matches:34,won:5,draw:6,lost:23,gd:"-40",points:21},
	 {position:18,club:"Nurnberg",matches:34,won:3,draw:10,lost:21,gd:"-42",points:19}
	 ];
	 $scope.rel4=rel4;

	 var goal4=[
	 {position:1,name:"Lewandowski",club:"Bayern Munich",goals:22},
	 {position:2,name:"Alcacer",club:"Borrusia Dortmund",goals:18},
	 {position:3,name:"Reus",club:"Borrusia Dortmund",goals:17}
	 ];
	 $scope.goal4=goal4;

	 var assist4=[
	 {position:1,name:"Sancho",club:"Borrusia Dortmund",assists:14},
	 {position:2,name:"Kimmich",club:"Bayern Munich",assists:13},
	 {position:3,name:"Brandt",club:"Bayer Leverkusen",assists:11}
	 ];
	 $scope.assist4=assist4;

	 var cs4=[
	 {position:1,name:"Gulacsi",club:"Leipzig",cleansheets:16},
	 {position:2,name:"Sommer",club:"Borrusia Monchengladbach",cleansheets:13},
	 {position:3,name:"Neuer",club:"Wolfsburg",cleansheets:11}
	 ];
	 $scope.cs4=cs4;


	 var cl5=[
	 {position:1,club:"Paris-Saint-German ",matches:38,won:29,draw:4,lost:5,gd:"+70",points:91},
	 {position:2,club:"Lille",matches:38,won:22,draw:9,lost:7,gd:"+35",points:75},
	 {position:3,club:"Olympique Lyonnais",matches:38,won:21,draw:9,lost:8,gd:"+23",points:72}
	 ];
	 $scope.cl5=cl5;

	 var el5=[
	 {position:4,club:"Saint-Etienne",matches:38,won:19,draw:9,lost:10,gd:"+18",points:66},
	 {position:5,club:"Olympique Marseille",matches:38,won:18,draw:7,lost:13,gd:"+8",points:61}
	 ]; 
	 $scope.el5=el5;

	 var mid5=[
	 {position:6,club:"Montpellier",matches:38,won:15,draw:14,lost:9,gd:"+11",points:59},
	 {position:7,club:"Nice",matches:38,won:15,draw:11,lost:12,gd:"-5",points:56},
	 {position:8,club:"Reims",matches:38,won:13,draw:16,lost:9,gd:"-3",points:55},
	 {position:9,club:"Nimes",matches:38,won:15,draw:8,lost:15,gd:"-1",points:53}, 
	 {position:10,club:"Rennes",matches:38,won:13,draw:13,lost:12,gd:"+3",points:52},
	 {position:11,club:"Strasbourg",matches:38,won:11,draw:16,lost:11,gd:"+10",points:49},
	 {position:12,club:"Nantes",matches:38,won:13,draw:9,lost:16,gd:"0",points:48},
	 {position:13,club:"Angers SCO",matches:38,won:10,draw:16,lost:12,gd:"-5",points:46}, 
	 {position:14,club:"Bordeaux ",matches:38,won:10,draw:11,lost:17,gd:"-8",points:41},
	 {position:15,club:"Amiens SC",matches:38,won:9,draw:11,lost:18,gd:"-21",points:38},
	 {position:16,club:"Tolouse",matches:38,won:8,draw:14,lost:16,gd:"-22",points:38},
	 {position:17,club:"Monaco",matches:38,won:8,draw:12,lost:18,gd:"-19",points:36}
	 ];
	 $scope.mid5=mid5;

	 var rel5=[
	 {position:18,club:"Dijon",matches:38,won:9,draw:7,lost:22,gd:"-29",points:34},
	 {position:19,club:"Caen ",matches:38,won:7,draw:12,lost:19,gd:"-25",points:33},
	 {position:20,club:"Guingamp",matches:38,won:5,draw:12,lost:21,gd:"-32",points:27}
	 ];
	 $scope.rel5=rel5;

	 var goal5=[
	 {position:1,name:"Mbappe",club:"Paris-Saint-German",goals:33},
	 {position:2,name:"Pepe",club:"Lille",goals:22},
	 {position:3,name:"Cavani",club:"Paris-Saint-German",goals:18}
	 ];
	 $scope.goal5=goal5;

	 var assist5=[
	 {position:1,name:"Savanier",club:"Nimes",assists:14},
	 {position:2,name:"Di Maria",club:"Paris-Saint-German",assists:11},
	 {position:3,name:"Pepe",club:"Lille",assists:11}
	 ];
	 $scope.assist5=assist5;

	 var cs5=[
	 {position:1,name:"Benitez",club:"Nice",cleansheets:16},
	 {position:2,name:"Maignan",club:"Lille",cleansheets:15},
	 {position:3,name:"Mendy",club:"Reims",cleansheets:14}
	 ];
	 $scope.cs5=cs5;


	 $scope.scrollTo=function(scroll_location){
	 	$location.hash(scroll_location);
	 	$anchorScroll();
	 }
});