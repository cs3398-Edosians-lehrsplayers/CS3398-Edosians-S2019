//To be updated, just to get UI started

function openSite(value){
  var selTop = document.getElementById('topic');
  urlmenu.onchange = function() {
      window.open(  this.options[ this.selectedIndex ].value );
 };

  
}

 