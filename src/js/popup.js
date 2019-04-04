//To be updated, just to get UI started

chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('popup.html', {
    id: 'main',
    bounds: { width: 620, height: 500 }
  });
});
chrome.alarms.onAlarm.addListener(function( alarm ) {
  console.log("Got an alarm!", alarm);
});