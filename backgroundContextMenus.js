var str = ["spencer", "john", "jaysen"];

var i = Math.floor(Math.random() * 3);

var CONTEXT_MENU_ITEMS = [
    'Test Item 1',
    'Another Item',
    'WE IN BUSINESS, BOIS',
    str[i]
];

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
	"theverge.com/"]


chrome.runtime.onInstalled.addListener(function() {
  CONTEXT_MENU_ITEMS.forEach(function(item) {
    chrome.contextMenus.create({
      "id": "_" + item,
      "title": item,
      "contexts": ["all"]
    });   
  });
  
  chrome.contextMenus.create({
    "id": "Google it",
    "title": "Google \'%s\'",
    "contexts": ["selection"],
    "onclick": googleIt
HEAD
	});

	chrome.contextMenus.create({
		"id": "Random Site",
		"title": "Click for random site!",
		"contexts": ["all"],
		"onclick": openSite
	});


  });
  
  chrome.contextMenus.create({
     "id": "isKanji",
     "title": "Check for kanji",
     "contexts": ["selection"],
     "onclick": checkForKanji
  });
e3d807074e8660b804aae846d531ef6e27e6b35c
  // This will alow the browser to show a full-color page icon in the browser
  // toolbar when users navigate to a URL containing "developer.chrome.com". 
  // When the icon is full-color, users can click it to view popup.html
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [
        new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

  // test to be used with options.js
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });

});

function googleIt(e) {
  var newURL = "http://www.google.com/search?q=" + e.selectionText;
  chrome.tabs.create({ url: newURL });
}

HEAD
var openSite = function () {
	var randIdx = Math.random() * links.length;
	randIdx = parseInt(randIdx, 10);
	var link = 'http://' + links[randIdx];
	var win = window.open(link, '_blank');
	win.focus();

};

// Checks selected text for kanji. If found, prints character and grade to console.
function checkForKanji(e) {
    var str = e.selectionText;
    var i;
    for(i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 0x4E00 && str.charCodeAt(i) <= 0x9FAF) {
            //var json = $.getJSON("https://kanjialive-api.p.rapidapi.com/api/public/kanji/" + str.charAt(i));
            $.ajax({
                url: "https://kanjialive-api.p.mashape.com/api/public/kanji/" + str.charAt(i),
                dataType: "JSON",
                headers: {
                    "X-RapidAPI-Key": "06dd6c2851msh7d0e21955b66957p16986cjsn4b054ebb5f8c"
                }
            }).done(function(data) {
                console.log(data.kanji.character + ": Grade " + data.references.grade);
            });
            //console.log(str.charAt(i) + typeof json);
            
        }
    }
}
e3d807074e8660b804aae846d531ef6e27e6b35c
