//Rand code from stackoverflow babyyyyy


<a href="javascript:openSite()">Click to go to a random site</a>
<script>
var links = ["google.com",
             "youtube.com",
             "stackoverflow.com",
             "apple.com"]

var openSite = function() {
    var randIdx = Math.random() * links.length;
    randIdx = parseInt(randIdx, 10);
    var link = 'http://' + links[randIdx];
    
    var win = window.open(link, '_blank');
    win.focus();
    
};
</script>
