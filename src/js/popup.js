//To be updated, just to get UI started



var urlmenu = document.getElementById( 'topic' );
 urlmenu.onchange = function() {
      window.open( this.options[ this.selectedIndex ].value );
 };