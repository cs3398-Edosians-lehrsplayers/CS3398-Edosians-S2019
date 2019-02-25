chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "testContextMenu",
    "title": "Test Context Menu Item",
    "contexts": ["all"]
  });      
});