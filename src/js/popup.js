function getOption(){
    
}


function addOption(){
	var select = document.getElementById("jumpmenu");
    select.options[select.options.length] = new Option('New Element', '0', false, false);
}

function removeOption(){
   
}

function removeAllOptions(){
    var select = document.getElementById("jumpmenu");
    select.removeAllOptions;
}


document.getElementById("jumpmenu").onchange = function() {myFunction()};

var games = ["ign.com/", "gamestop.com/","gamespot.com/","epicgames.com/","ea.com/","xbox.com/","ubisoft.com/","nintendo.com/","gameradar.com/","rockstargames.com/"];
var sports = ["sports.yahoo.com/","espn.com/","bleacherreport.com/","cbssports.com/","si.com/","nbcsports.com/","sbnation.com/","foxsports.com/","rantsports.com/","deadspin.com/","thepostgame.com/"];
var food = ["allrecipes.com/","foodnetwork.com/","food.com/","thekitchn.com/","yummly.com/","chow.com/","epicurious.com/","simplyrecipes.com/","cookinglight.com/","bettycrocker.com/","eatingwell.com/","cooks.com/"];
var javascript = ["codecademy.com/learn/learn-javascript","w3schools.com/js/","learn-js.org/","learnjavascript.online/"];


function myFunction() {

	var x = document.getElementById("jumpmenu").value;
	if(x == 'games')
	{
		var randIdx = Math.random() * games.length;
		randIdx = parseInt(randIdx, 10);
		var game = 'http://' + games[randIdx];
		var win = window.open(game, '_blank');
		win.focus();
	}
	else if(x == 'sports')
	{
		var randIdx = Math.random() * sports.length;
		randIdx = parseInt(randIdx, 10);
		var sport = 'http://' + sports[randIdx];
		var win = window.open(sport, '_blank');
		win.focus();

	}
	else if(x == 'food')
	{
		var randIdx = Math.random() * food.length;
		randIdx = parseInt(randIdx, 10);
		var foods = 'http://' + food[randIdx];
		var win = window.open(foods, '_blank');
		win.focus();

	}
	else if(x == 'javascript')
	{
		var randIdx = Math.random() * javascript.length;
		randIdx = parseInt(randIdx, 10);
		var java = 'http://' + javascript[randIdx];
		var win = window.open(java, '_blank');
		win.focus();

	}


  
}

/*** Notifications Begin ***/
var options = {
  type: "basic",
  title: "Micro Learning Extension",
  message: "Don't forget to do some learning today!",
  iconUrl: "/src/images/icon_website-48.png"
};

chrome.notifications.create(options, callBack);

function callBack() {
	console.log("Notification done!");
}

/*** Notifications End ***/
