var file = new File("/Users/Spencer/Documents/GitHub/CS3398-Edosians-S2019/Facts.txt")
//var file = new File(txtFile);

file.open("r");
var str;
var i = 0;
while (!file.eof) {
      str.push(file.readln() + "\n");
}
file.close();

var min = 0;
var max = 600;
var random = Math.floor(Math.random() * (+max - +min)) + +min;

var CONTEXT_MENU_ITEMS = [
    'Test Item 1',
    'Another Item',
    'WE IN BUSINESS, BOIS',
    str[random]
];


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

  // This will alow the browser to show a full-color page icon in the browser
  // toolbar when users navigate to a URL containing "developer.chrome.com". 
  // When the icon is full-color, users can click it to view popup.html
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'developer.chrome.com'},
      })
      ],
          actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });

});

function googleIt(e) {
  var newURL = "http://www.google.com/search?q=" + e.selectionText;
  chrome.tabs.create({ url: newURL });
}