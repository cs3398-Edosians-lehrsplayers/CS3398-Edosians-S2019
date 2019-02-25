var CONTEXT_MENU_ITEMS = [
    'Test Item 1',
    'Another Item',
    'WE IN BUSINESS, BOIS'
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
});

function googleIt(e) {
  var newURL = "http://www.google.com/search?q=" + e.selectionText;
  chrome.tabs.create({ url: newURL });
}