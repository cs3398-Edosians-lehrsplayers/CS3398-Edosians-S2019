var page = chrome.extension.getBackgroundPage();
var kanjiData = page.kanjiData;
//var kanjiActive = page.kanjiActive;
var displayVideo;
var videoButton, video;

if (kanjiData !== undefined && kanjiData.kanji !== undefined) {
    if(displayVideo === undefined)
        displayVideo = true;
    
    videoButton = createVideoButton();
    videoElement = createVideoElement();
    document.getElementById("kanjioutput").appendChild(videoButton);
    document.getElementById("kanjioutput").appendChild(videoElement);
}

// Creates the button which hides the video of how the kanji is written.
function createVideoButton() {
    var buttonText = !displayVideo ? "Show stroke order" : "Hide stroke order";
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
    videoButton.value = !displayVideo ? "Show stroke order" : "Hide stroke order";
    videoElement.style.visibility = displayVideo ? "visible" : "hidden";
    videoElement.width = displayVideo ? 160 : 0;
    videoElement.height = displayVideo ? 160 : 0;
}