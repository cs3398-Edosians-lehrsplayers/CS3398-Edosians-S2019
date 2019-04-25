// Get references to background page.
var page = chrome.extension.getBackgroundPage();
var kanjiData = page.kanjiData;
var displayVideo;
var videoButton, videoElement;

// If Kanji Data is defined, show kanji data in html file.
if (kanjiData !== undefined && kanjiData.kanji !== undefined) {
    if(displayVideo === undefined)
        displayVideo = true;
    

    document.getElementById("kanjidetails").appendChild(createHeader());
    document.getElementById("kanjidetails").appendChild(createDescription());
    videoButton = createVideoButton();
    videoElement = createVideoElement();
    document.getElementById("kanjivideooutput").appendChild(videoButton);
    document.getElementById("kanjivideooutput").appendChild(videoElement);
    
} else if(kanjiData !== undefined && kanjiData.data !== undefined) {
    displayVideo = false;
    if(kanjiData.data[0] === undefined)
        document.getElementById("kanjidetails").appendChild(createHeaderFromText("Compound not recognized"));
    else {
        var header = kanjiData.data[0].slug;
        document.getElementById("kanjidetails").appendChild(createHeaderFromText(header));
        document.getElementById("kanjidetails").appendChild(createCompoundDescription());
    }
}

// Creates the button which hides the video of how the kanji is written.
function createVideoButton() {
    var buttonText = !displayVideo ? "Show kanji info" : "Hide kanji info";
    var lmnt = document.createElement("input");
    lmnt.type = "button";
    lmnt.value = buttonText;
    lmnt.className = "button";
    lmnt.onclick = function() {onVideoButtonClicked()};
    return lmnt;
}

// Creates the video of how the kanji is written.
function createVideoElement() {
    var lmnt = document.createElement("VIDEO");
    lmnt.width = 160;
    lmnt.height = 160;
    lmnt.controls = true;
    lmnt.src = kanjiData.kanji.video.mp4;
    return lmnt;
}

// Action run when button is pressed. 
function onVideoButtonClicked() {
    displayVideo = !displayVideo;
    videoButton.value = !displayVideo ? "Show kanji info" : "Hide kanji info";
    videoElement.style.visibility = displayVideo ? "visible" : "hidden";
    videoElement.width = displayVideo ? 160 : 0;
    videoElement.height = displayVideo ? 160 : 0;
}

function createHeaderFromText(headerText) {
    var lmnt = document.createElement("h1");
    lmnt.textContent = headerText;
    return lmnt;
}

function createHeader() {
    var lmnt = document.createElement("h1");
    lmnt.textContent = kanjiData.kanji.character;
    return lmnt;
}

function createCompoundDescription() {
    var lmnt = document.createElement("h3");
    lmnt.textContent = kanjiData.data[0].senses[0].english_definitions;
    return lmnt;
}

function createDescription() {
    var lmnt = document.createElement("h2");
    lmnt.textContent = kanjiData.kanji.meaning.english;
    return lmnt;
}