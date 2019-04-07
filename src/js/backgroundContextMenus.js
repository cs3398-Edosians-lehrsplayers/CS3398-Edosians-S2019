var CONTEXT_MENU_ITEMS = [
    'Test Item 1',
    'Another Item',
    'WE IN BUSINESS, BOIS'
];

var kanjiData;

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

	});

  });
  
  chrome.contextMenus.create({
     "id": "isKanji", 
     "title": "Check for kanji",
     "contexts": ["selection"],
     "onclick": checkForKanji
  });




  // test to be used with options.js
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });


function googleIt(e) {
  var newURL = "http://www.google.com/search?q=" + e.selectionText;
  chrome.tabs.create({ url: newURL });
}

// Checks selected text for kanji. If found, prints character and grade to console.
function checkForKanji(e) {
    var str = e.selectionText;
    var i;
    kanjiData = undefined;
    for(i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 0x4E00 && str.charCodeAt(i) <= 0x9FAF) {
            kanjiActive = true;
            $.ajax({
                url: "https://kanjialive-api.p.mashape.com/api/public/kanji/" + str.charAt(i),
                dataType: "JSON",
                headers: {
                    "X-RapidAPI-Key": "06dd6c2851msh7d0e21955b66957p16986cjsn4b054ebb5f8c"
                }
            }).done(function(data) {
                kanjiData = data;
            });            
        }
    }
}
