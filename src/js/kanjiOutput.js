// Get references to background page.
var page = chrome.extension.getBackgroundPage();
var kanjiData = page.kanjiData;
var compoundData = page.compoundData;
var displayVideo;
var clearButton, videoElement;
var currentKanji, kanjiHeader, kanjiDescription;

// If Kanji Data is defined, show kanji data in html file.
/*
 else */
if(compoundData !== undefined && compoundData.data !== undefined) {
    displayVideo = false;
    if(compoundData.data[0] === undefined)
        append("compounddetails", createHeaderFromText("Compound not recognized"));
    else {
        var compound = compoundData.data[0].slug;
        append("compounddetails", createHeaderFromText(compound));
        //createHeaderFromText(compound));
        append("compounddetails", kanaDescription());
        append("compounddetails", gradeDescription());
        append("compounddetails", translationDescription());
        createRadioButtons(compound);
    }
}
kanjiDetails();


function kanjiDetails() {
    if (kanjiData === undefined || kanjiData[0] === undefined || kanjiData[0].kanji === undefined || currentKanji === undefined || currentKanji == -1) {
        console.log(currentKanji);
        return;
    }
    
    clearButton = createClearButton();
    kanjiHeader = createHeaderFromText(kanjiData[currentKanji].kanji.character);
    append("kanjidetails", clearButton);
    append("kanjidetails", kanjiHeader);
    append("kanjidetails", createDescription(currentKanji));
    videoElement = createVideoElement(currentKanji);
    document.getElementById("kanjivideooutput").appendChild(videoElement);
}

function clearKanjiDetails() {
    document.getElementById("kanjidetails").innerHTML = "";
    document.getElementById("kanjivideooutput").innerHTML = "";
}

function append(parentId, child) {
    document.getElementById(parentId).appendChild(child);
}

function createRadioButtons(compound) {
    var array = [];
    var selection = document.getElementById("kanjiselection");
    var elements = [];
    for(var i = 0, max = compound.length; i < max; i++) {
        array.push(compound.charAt(i));
        console.log(compound.charAt(i) + array[i]);
        var radio = document.createElement("input");
        var label = document.createElement("label");
        radio.type = "radio";
        radio.name = "kanjiSelection";
        radio.value = array[i];
        radio.addEventListener('change',  function() {
            getCurrentKanjiSelection();
            console.log(currentKanji);
            clearKanjiDetails();
            kanjiDetails();
        });
        
        label.setAttribute("for", array[i]);
        label.innerHTML = array[i];
        selection.appendChild(radio);
        selection.appendChild(label);
        elements.push({ label:label, radio:radio });
    }
}

function clearRadioButtons() {
    document.getElementById("kanjiselection").innerHTML = "";
}

function getCurrentKanjiSelection() {
    var elements = document.getElementsByName("kanjiSelection");
    for(var i = 0, max = elements.length; i < max; i++) {
        console.log("E: " + elements[i].value);
        if (elements[i].checked) {
            currentKanji = getKanjiDataIndex(elements[i].value);
            console.log("C: " + currentKanji);
            return;
        }
    }
    
    currentKanji = -1;
    return;
}

function getKanjiDataIndex(character) {
    for(var i = 0, max = kanjiData.length; i < max; i++) {
        console.log(kanjiData[i].kanji.character.charAt(0) + " " + character);
        if (kanjiData[i].kanji.character.charAt(0) == character) {
            return i;
        }
    }
    return -1;
}

function createClearButton() {
    var buttonText = "Clear kanji info";
    var lmnt = document.createElement("input");
    lmnt.type = "button";
    lmnt.value = buttonText;
    lmnt.className = "button";
    lmnt.onclick = function() {
        clearKanjiDetails();
        currentKanji = -1;
        clearRadioButtons();
        createRadioButtons(compoundData.data[0].slug);
    };
    return lmnt;
}

// Creates the video of how the kanji is written.
function createVideoElement(index) {
    var lmnt = document.createElement("VIDEO");
    lmnt.width = 160;
    lmnt.height = 160;
    lmnt.controls = true;
    lmnt.src = kanjiData[index].kanji.video.mp4;
    return lmnt;
}

function createHeaderFromText(headerText) {
    var lmnt = document.createElement("h1");
    lmnt.textContent = headerText;
    return lmnt;
}

function kanaDescription() {
    return generateText("h3", compoundData.data[0].japanese[0].reading);
}

function translationDescription() {
    return generateText("h3", compoundData.data[0].senses[0].english_definitions);
}

function gradeDescription() {
    var grade = "JLPT ";
    switch(compoundData.data[0].jlpt[0]) {
        case "jlpt-n1":
            grade += "N1";
            break;
        case "jlpt-n2":
            grade += "N2";
            break;
        case "jlpt-n3":
            grade += "N3";
            break;
        case "jlpt-n4":
            grade += "N4";
            break;
        case "jlpt-n5":
            grade += "N5";
            break;
        default:
            grade = "";
    }
    return generateText("h3", grade);
}

function generateText(type, content) {
    var lmnt = document.createElement(type);
    lmnt.textContent = content;
    return lmnt;
}

function createDescription(index) {
    var lmnt = document.createElement("h2");
    lmnt.textContent = kanjiData[index].kanji.meaning.english;
    return lmnt;
}