function getOption(){
    
}


function addOption(){
	var select = document.getElementById("jumpmenu");
    select.options[select.options.length] = new Option('New Element', '0', false, false);
}

function removeOption(){
   
}

function removeAllOptions(){
    var select = document.getElementById("jumpmenu");
    select.removeAllOptions;
}


document.getElementById("jumpmenu").onchange = function() {myFunction()};




function myFunction() {
	var x = document.getElementById("jumpmenu").value;
	var win = window.open(x, '_blank');
	win.focus();
}
