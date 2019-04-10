^hello fellow edosians
# Google Chrome Learning Extension ![Brain!](src/images/ml_brain128.png)


Welcome to the Google Chrome Learning Extension! The goal of this project is to provide google chrome users with a convenient extension that allows them to learn more about the topics that matter to them. Using the user's data, the extension will make reccomendations for sites and articles that the user may find interesting. Want to spice up your learning? We can also give randomized results and get you learning something you would have otherwise never thought interested you! Our goal is to save you time, and help you learn!

As regular chrome users as well as students, our team has many things we either need or want to be learning about, however don't like taking the time out of our busy schedule to scour sites for relevent search results. As such, we decided that google could help us with that. The Google Chrome Learning Extension uses your own preferences as well as Chrome user data to recommend sites and articles that you find interesting to learn about. 

# Getting Started
Our goal is to have the Learning Extension available for download on the Chrome Web Store. The extension will then prompt the user to enter some basic information about topics they are interested in learning more about, and every time you use your browser from that point forward you will be given suggestions for relevent information pertaining to your topics. Over time the results will be more refined as the extension gains a better grasp on what suggestions you like more or like less.

Step 1: Clone and Download directory.

Step 2: 
(2.1)Open the Extension Management page by navigating to chrome://extensions.
The Extension Management page can also be opened by clicking on the Chrome menu, hovering over More Tools then selecting Extensions.
(2.2)Enable Developer Mode by clicking the toggle switch next to Developer mode.
(2.3)Click the LOAD UNPACKED button and select the extension directory.

Code compiles, drop down box is presented when selecting extension. Search box will also appear. There is no logic behind these features.

# Team Contributions
Status and next steps of each member: 

**Jaysen** has implemented a console alarm which sends an alert to the console to test that a button has been toggled , file alarm.js was removed from remote until database is implemented.(https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/commit/4cb6fd84ede78e2806ea8f4b3c63548139220d81).
He also implemented a random array of links corresponding to the default catergories in the drop down menu,(https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/commit/865a8af4007363e60462096b53f2e726a2c80c81).
He plans to implement user specific interests to be added in the drop down menu as well as removing catergories.  

**Ozy** has further customized the user interface and added a background image and style to buttons on the popup as well as experiment with the UI for the options page: https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/css/main.css. His next step is to add basic functionality and style to the options page while working with the team to implement a database that will make the design more robust. https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/css/options.css & https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/options.js.

**Warren** has implemented the Chinese character checker in the context menu, and its [corresponding interface in the popup] (https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/kanjiOutput.js), which, after selecting Chinese characters and clicking "Check for Kanji" in the context menu, displays the translation of the character in English and a video of how to write the character in Japanese. His next step will be to add information on common character compounds made from characters using queries and to display multiple characters in the popup concurrently.

**Spencer** has implemented the random fact generator and link tracer, as well as a user feedback feature to record user interest. (ttps://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/randomSiteTestScript.js). His next step will be to research and implement the backend database with the team to save user info and implement a recommender system in order to refine suggested user content.

**John** has implimented a random website feature into the popup menu, as well as researched how to store things on the user's local machine. The next step is to be able to retrieve random articles from the websites that are in our code, as well as actually storing user interests/saved things on the user's machine. https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/randomSiteTestScript.js
