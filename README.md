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

**Jaysen** has implemented a console alarm which sends an alert to the console that a button has been toggled,(https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/commit/4cb6fd84ede78e2806ea8f4b3c63548139220d81). He also implemented a random array of links corresponding to the default catergories in the drop down menu. 

**Ozy** has introduced a user interface that includes the extension popup and options page, as well as a custom extension icon. He plans on further customizing the user interface, specifically the popup and options page, and working with the rest of the team to have a seemless integration between the front and backend. Here is the user interface that will be expanded: https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/popup.html

**Warren** has implemented the Chinese character checker in the context menu. His next step will be to add a user log to keep track of queries made by the user, and to add information on common character compounds made from characters from past queries.

**Spencer** has implemented the random fact generator and link tracer (https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/backgroundContextMenus.js). His next step will be to improve the grahpical implementation of the generator as well as design a user feedback tool to improve the suggested facts/articles.

**John** has implimented a random website feature into the popup menu, as well as researched how to store things on the user's local machine. The next step is to actually store user interests/saved things on the user's machine. https://github.com/cs3398-Edosians-lehrsplayers/CS3398-Edosians-S2019/blob/master/src/js/randomSiteTestScript.js
