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
Sprint 3 accomplishments: 

**Jaysen** has started implementation on grabbing trending topics using an API provided by https://newsapi.org/v2/top-headlines?. The API grabs trending news and will display it on our pop-up window.

**Ozy** designed the UI for the options page, including some dummy option buttons for the user (these buttons do not currently do anything, logic needs to be implemented): https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/css/options.css & https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/options.html. He also implemented a very basic notification feature that appears, as a reminder to use our extension to learn, upon clicking the extension icon.https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/popup.js

**Warren** has implemented the Chinese character checker in the context menu, and its [corresponding interface in the popup] (https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/kanjiOutput.js), which, after selecting Chinese characters and clicking "Check for Kanji" in the context menu, displays the translation of the character in English and a video of how to write the character in Japanese. His next step will be to add information on common character compounds made from characters using queries and to display multiple characters in the popup concurrently.

**Spencer** has implemented the random fact generator and link tracer, as well as a user feedback feature to record user interest. (https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/randomSiteTestScript.js). His next step will be to research and implement the backend database with the team to save user info and implement a recommender system in order to refine suggested user content.

**John** has attempted to impliment Google Chrome local storage for our application. This is a work in progress and is currently unfinished, but this is a good way to store user information such as interests, saved articles, etc. Doing this will also allow us to begin creating an algorithm that can give content based on the users interests and browsing habits. Artifact: https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/randomSiteTestScript.js The local storage section in this code is a test to see exactly how it works and logs information. There are also links at the top that I have been referencing to understand some of these things.
