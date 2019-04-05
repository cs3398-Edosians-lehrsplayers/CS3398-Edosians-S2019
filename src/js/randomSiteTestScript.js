var links = [
	"wikipedia.org/",
	"stackoverflow.com/",
	"gizmodo.com/",
	"geeksforgeeks.org/",
	"nytimes.com/",
	"theguardian.com/",
	"narratively.com/",
	"wired.com/",
	"grantland.com/",
	"bloomberg.com/",
	"nymag.com/",
	"laphamsquarterly.org/",
	"theatlantic.com/",
	"macrumors.com/",
	"digitaltrends.com/",
	"pbs.org/",
	"nationalpost.com/",
	"businessinsider.com/",
	"motherjones.com/",
	"hthenextweb.com/",
	"espn.com/",
	"venturebeat.com/",
	"nybooks.com/",
	"theringer.com/",
	"techradar.com/",
	"smithsonianmag.com/",
	"theamericanscholar.org/",
	"firstpost.com/",
	"arktimes.com/",
	"eater.com/",
	"mashable.com/",
	"beltmag.com/",
	"engadget.com/",
	"synacor.com/",
	"thecut.com/",
	"droid-life.com/",
	"newyorker.com/",
	"slashgear.com/",
	"gq.com/",
	"atlantamagazine.com/",
	"medium.com/",
	"techcrunch.com/",
	"theverge.com/"];

	var facts = [
    "Animals that lay eggs don't have belly buttons.  ",
    "Beavers can hold their breath for 45 minutes under water.  ",
    "Slugs have four noses. ",
    "Camels have three eyelids. ",
    "A honey bee can fly at 15mph.  ",
    "A queen bee can lay 800-1,500 eggs per day.  ",
    "A bee has five eyelids.  ",
    "The average speed of a housefly is 4.5 mph.  ",
    "Mosquitoes are attracted to people who just ate bananas. ",
    "Flamingos turn pink from eating shrimp.  ",
    "Emus and kangaroos cannot walk backward. ",
    "Cats have over 100 vocal cords.  ",
    "Camel's milk does not curdle.  ",
    "All porcupines float in water. ",
    "The world's termites outweigh the world's humans about 10 to 1.  ",
    "A hummingbird weighs less than a penny.  ",
    "A jellyfish is approximately 95% water.  ",
    "Children tend to grow faster in the spring.  ",
    "Broccoli is the only vegetable that is also a flower.  ",
    "Peaches are members of the almond family.  ",
    "Alaska has the highest percentage of people who walk to work.  ",
    "The San Francisco cable cars are the only mobile national monument.  ",
    "The Hawaiian alphabet has only 12 letters. ",
    "A ball of glass will bounce higher than a ball of rubber.  ",
    "On average a human being will spend up to 2 weeks kissing in his/her lifetime. ",
    "Fish have eyelids. ",
    "Termites eat through wood two times faster when listening to rock music! ",
    "If you keep a goldfish in a dark room it will eventually turn white. ",
    "A snail breathes through its foot. ",
    "Fish cough.  ",
    "An ant's sense of smell is stronger than a dog's.  ",
    "It is possible to lead a cow up stairs but not down. ",
    "Frogs cannot swallow with their eyes open. ",
    "A cat's lower jaw cannot move sideways.  ",
    "The bullfrog is the only animal that never sleeps. ",
    "Elephants are capable of swimming 20 miles per day.  ",
    "Elephants are the only mammals that can't jump.  ",
    "Giraffes have no vocal cords.  ",
    "Cats can hear ultrasound.  ",
    "Despite its hump, a camel has a straight spine.  ",
    "Mosquitoes have 47 teeth.  ",
    "There are 63,360 inches in a mile. ",
    "About 11% of the people in the world are left-handed.  ",
    "The average smell weighs 760 nanograms.  ",
    "A human brain weighs about three pounds. ",
    "1/4 of the bones in your body are in your feet.  ",
    "You blink over 10,000,000 times a year.  ",
    "A sneeze travels out of your mouth at over 100 miles an hour.  ",
    "Brain waves can be used to power an electric train.  ",
    "The tongue is the fastest healing part of the body.  ",
    "Pigs can get sunburn.  ",
    "The life span of a taste bud is about ten days.  ",
    "The average human produces 10,000 gallons of saliva in a lifetime. "
  ];



var randomSiteArray = [];


document.getElementById("randomsite").addEventListener("click", openSite);
function openSite() {
	var randIdx = Math.random() * links.length;
	randIdx = parseInt(randIdx, 10);
	var link = 'http://' + links[randIdx];
	var win = window.open(link, '_blank');
	win.focus();
};


document.getElementById("randomfact").addEventListener("click", openFact);
function openFact() {
	var rand = Math.floor(Math.random()*facts.length);
	if (confirm(facts[rand] + "\n\nPress OK to google fact or Cancel to close window!"))
	{
		var newURL = "http://www.google.com/search?q=" + facts[rand];
  		chrome.tabs.create({ url: newURL });
	}
}