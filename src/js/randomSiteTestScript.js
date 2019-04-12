var links = [
	"wikipedia.org/",
	"stackoverflow.com/",
	"gizmodo.com/",
	"geeksforgeeks.org/",
	"nytimes.com/",
	"theguardian.com/",
	"narratively.com/",
	"wired.com/",
	"grantland.com/",
	"bloomberg.com/",
	"nymag.com/",
	"laphamsquarterly.org/",
	"theatlantic.com/",
	"macrumors.com/",
	"digitaltrends.com/",
	"pbs.org/",
	"nationalpost.com/",
	"businessinsider.com/",
	"motherjones.com/",
	"hthenextweb.com/",
	"espn.com/",
	"venturebeat.com/",
	"nybooks.com/",
	"theringer.com/",
	"techradar.com/",
	"smithsonianmag.com/",
	"theamericanscholar.org/",
	"firstpost.com/",
	"arktimes.com/",
	"eater.com/",
	"mashable.com/",
	"beltmag.com/",
	"engadget.com/",
	"synacor.com/",
	"thecut.com/",
	"droid-life.com/",
	"newyorker.com/",
	"slashgear.com/",
	"gq.com/",
	"atlantamagazine.com/",
	"medium.com/",
	"techcrunch.com/",
	"theverge.com/"];
    	
var randomSiteArray = [];

document.getElementById("randomsite").addEventListener("click", openSite);
function openSite() {
	var randIdx = Math.random() * links.length;
	randIdx = parseInt(randIdx, 10);
	var link = 'http://' + links[randIdx];
	var win = window.open(link, '_blank');
	win.focus();
};