var CONTEXT_MENU_ITEMS = [
    'Test Item 1',
    'Another Item',
    'WE IN BUSINESS, BOIS'
];

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
  ]

chrome.runtime.onInstalled.addListener(function() {

  CONTEXT_MENU_ITEMS.forEach(function(item) {
    chrome.contextMenus.create({
      "id": "_" + item,
      "title": item,
      "contexts": ["all"]
    });   
  });
  
  chrome.contextMenus.create({
    "id": "Google it",
    "title": "Google \'%s\'",
    "contexts": ["selection"],
    "onclick": googleIt

	});

    chrome.contextMenus.create({
        "id": "Random Fact",
        "title": facts[Math.floor(Math.random()*facts.length)],
        "contexts": ["all"],
        "onclick": findFact
    });

  });
  
  chrome.contextMenus.create({
     "id": "isKanji", 
     "title": "Check for kanji",
     "contexts": ["selection"],
     "onclick": checkForKanji
  });




  // test to be used with options.js
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });


function findFact() {
    var newURL = "http://www.google.com/search?q=" + facts[Math.floor(Math.random()*facts.length)];
    chrome.tabs.create({ url: newURL });
}

function googleIt(e) {
  var newURL = "http://www.google.com/search?q=" + e.selectionText;
  chrome.tabs.create({ url: newURL });
}

// Checks selected text for kanji. If found, prints character and grade to console.
function checkForKanji(e) {
    var str = e.selectionText;
    var i;
    for(i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 0x4E00 && str.charCodeAt(i) <= 0x9FAF) {
            //var json = $.getJSON("https://kanjialive-api.p.rapidapi.com/api/public/kanji/" + str.charAt(i));
            $.ajax({
                url: "https://kanjialive-api.p.mashape.com/api/public/kanji/" + str.charAt(i),
                dataType: "JSON",
                headers: {
                    "X-RapidAPI-Key": "06dd6c2851msh7d0e21955b66957p16986cjsn4b054ebb5f8c"
                }
            }).done(function(data) {
                console.log(data.kanji.character + ": Grade " + data.references.grade);
            });
            //console.log(str.charAt(i) + typeof json);
            
        }
    }
}
