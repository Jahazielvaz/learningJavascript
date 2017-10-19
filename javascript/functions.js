function br(){
	document.write("<br>");
}


/*
4 PARTS TO SENDING A REQUEST FOR DATA TO A SERVER

1- ESTABLISH COMMUNICATION WITH XMLHTTPREQUEST: Name the variable and establish a link with the other server.
	EXAMPLE:
	var myRequest = new XMLHttpRequest();

2- ESTABLISH RECEIVING OR SENDING DATA/WEB PAGE BEING CONNECTED: Open a link between your page and let the server know which page you're going to be accessing
	EXAMPLE:
	myRequest.open("GET", "https://www.MyChosenPage.com/json");

3- ONLOAD: Use the method named onload. This is where we say what should happen once the data is loaded. We're going to open an anonymous function, and in this function, we can do anything we'd like. 
	EXAMPLE:
	myRequest.onload = function(){
		console.log(myRequest.responseText); <I DON'T KNOW THE PURPOSE OF THE RESPONSE TEXT>
	}

4- SENDING THE REQUEST: Think of all the steps prior to this one, as you creating request document for some kind of government, so you created the form or letter, but now you have to send it, so they get it. This is this step
	EXAMPLE: 
	myRequest.send();

PASS!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!





	//SO FAR YOU'RE DOING GOOD ON THE ONES ABOVE. NEED TO PRACTICE THE BOTTOM ONE A LOT!!!!
	//REMEMBER THAT THE RESPONSE TEXT IS THE CONTENT THAT LIVES INSIDE THE URL.





5- CONSOLIDATION: Now it's time to put all of this code into one convenient variable
	EXAMPLE:
	var myData = myRequest.respnseText;

6- PARTIAL DATA: For this exercise, next we'll want only one object out of the 3 total objects in the array we're pulling data from 
	EXAMPLE:
	console.log(myData[0]);
	KEEP IN MIND THAT BEFORE YOU CAN MAKE THIS WORK, YOU HAVE TO TELL THE BROWSER THAT THAT'S AN ARRAY OF OBJECTS, AND NOT A SIMPLE STRING ARRAY.

7- TELLING BROWSER TYPE OF ARRAY: As previously stated, now we have to notify the browser the type of array this is.
	We do this by using the tool our browser has built in JSON.parse(myRequest.responseText); and within the parenthesis we can put the content that gets pulled from the url
	EXAMPLE:
	var myData = JSON.parse(myRequest.responseText);
*/




var darkMatter = new XMLHttpRequest();
darkMatter.open("GET", "https://learnwebcode.github.io/json-example/animals-3.json")
darkMatter.onload = function(){
	var dmData = JSON.parse(darkMatter.responseText);
 	console.log(dmData[0]);

}

darkMatter.send();



//FROM WHAT I CAN TELL, VARIABLES WITHIN OBJECTS, ONLY EXIST WITHIN THOSE OBJECTS. WE'LL TEST THIS THEORY OUT, BUT I THINK IT'S CORRECT.


/*
SECTION 2: Currently we're telling the browser to load the data as soon as the page load, but now we're going to want to tell it to load only if and when the green button is clickec
we'll do this by adding an EVENT LISTENER to the green button. And we'll only run our AJAX call when that event is triggered.

1- GIVE YOUR GREEN BUTTON AN ID IN THE HTML SECTION.

2- CREATE A VAR AND NAME IT WHAT EVER YOU WANT, AND THEN SELECT THAT HTML BUTTON
	EXAMPLE: 
	var btn = document.getElementById("btn");
	and now we have this convenient variable that points towards that element.

3- SET UP AN EVENT LISTENER FOR WHEN THE BUTTON GETS CLICKED(you're first going to put the variable name and execute witha period as usual)
	EXAMPLE:
	btn.addEventListener("click", )

	the first argument is what action needs to be taken in order for the event to happen which in this case is clicking
	the second argument is WHAT WE WANT TO ACTUALLY HAPPEN WHEN IT GETS CLICKED 

4- ADD AJAX CODE TO NEW FUNCTION WITHIN EVENT LISTENER: do this by creating a function instead of the second argument, and copy and paste all AJAX code inside it.
	EXAMPLE:
	btn.addEventListener("click", function(){
		var ourRequest = new XMLHttpRequest
	ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
	ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText); 
	console.log(ourData[0]);
	}

	ourRequest.send();

	});

5- ADD HTML PARAGRAPH ELEMENTS FOR EACH ANIMAL: Technically we could write html code inside the ourData function, but in order to stay organized, we're going to create a new function for it, at the bottom of your code.
	EXAMPLE:
	function renderHTML(){
	 
	}

6- WITHIN THE AJAX CALL, CALL THE NEW FUNCTION: right now the call is set up to call the console.log. Now we're replacing this with the new function.
	EXAMPLE:
	btn.addEventListener("click", function(){
		var ourRequest = new XMLHttpRequest
	ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
	ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText); 
	renderHTML();
	}

7- PASS THIS FUNCTION, THE OUR DATA VARIABLE:
	EXAMPLE:
	renderHTML(ourData); <NOTICE THAT THIS GOES INSIDE THE JSON CALL, AND IT'S NOT THE ONE YOU CREATED OUTSIDE OF IT.>


8- NOW WITHIN THE PARENTHESIS WHEN WE'RE CALLING THE FUNCTION, WE NEED TO INCLUDE ONE PARAMETER, WHICH WE CAN NAME WHAT EVER WE WANT.:
	EXAMPLE:
	function renderHTML(data){
	
	}

9- ACCESSING THE JSON DATA: Within the above function, we can now access the JSON data, that got pulled in with AJAX, by simply saying data
	EXAMPLE:
	function renderHTML(data){
	data
	}

10- ADD THE HTML DATA TO THE EMPTY DIV ELEMENT: So now we're going to direct all the html data to the empty div element we created.
	EXERCISE 1: Create a variable that points toward the empty div. We do this by selecting the empty div after you create the variable.
	EXAMPLE: var animalContainer = document.getElementById("animal-info")

11- TARGET THE EMPTY DIV BY USING THE VAR NAME THAT CONNECTED WITH IT INSIDE THE OBJECT FORM.
	EXAMPLE:
	function renderHTML(data) {
	animalContainer.insertAdjacentHTML();
	}

12- WE'LL WANT TO ADD HTML RIGHT BEFORE THE END OF THIS ELEMENT:
	EXAMPLE:
	animalContainer.insertAdjacentHTML("beforeend", "Testing 123") <THE SECOND ARGUMENT IS THE HTML WE WANT TO ADD>

13- CREATE A SEPARATE VAR WITH THE HTML CONCENT YOU WANT, AND INCLUDE THE VARIABLE NAME INSTEAD OF THE STRING INSIDE THE animalContainer FUNCTION.
	EXAMPLE:
	var htmlString = "HELLO WORLD";
	animalContainer.insertAdjacentHTML("beforeend", htmlString);

14- LOOP THROUGH OUR ARRAY OF PET OBJECTS USING THE FOR LOOP:
	EXAMPLE:
	function renderHTML(data){
	var htmlString = "";
	for (i = 0; 1 < data.length i++){

	}

	}

	<WE'RE GOING TO WANT THIS TO RUN AS LONG AS I IS LESS THAN THE LENGTH OF OUR ARRAY, BECAUSE THE PURPOSE IS FOR IT TO LOOP UNTIL THE TEXT IN THE ARRAY IS OVER. WE'RE USING DATA BECAUSE THAT'S WHERE WE'RE GOING TO ACCESS OUR ARRAY FROM.>
	WITHIN THE CURLY BRACKETS WE GET TO SAY WHAT SHOULD HAPPEN TO THE ARRAY.

15- ADD ON OR CONCACTENATE ON TO OUR htmlString VARIABLE: We do this by including the htmlString variable inside 
	our for loop, and using +=
	EXAMPLE:
	htmlString += "<p>" +
	DON'T FORGET TO CREATE A P TAG FOR EACH OBJECT IN THE ARRAY.

16- REMEMBER TO ACCESS YOUR ARRAY BY USING THE data VARIABLE: Make sure you also include the i variable in the array brackets
	htmlString += "<p>" + data[i].name + " is a " + data[i].species + ". </p>"
	<BECAUSE I HAS THE VALUE OF 0 TO BEGIN WITH, THIS WILL SELECT THE FIRST OBJECT IN THE ARRAY. AND ONCE THE LOOP RUNS AGAIN
	I WILL GET INCREMENTED, SO IT'LL SHOW THE SECOND OBJECT IN THE STRING
	
17- AT THIS POINT IF YOU KEEP CLICKING THE BUTTON, IT'LL KEEP GIVING YOU THE SAME DATA. WE WANT IT TO INCREMENTALLY LOAD FROM DIFFERENT PAGES SO THIS IS OUR NEXT STEP.
	CREATE A NEW VARIABLE THAT EQUALS ONE, AND MAKE IT SO THAT IT INCREASES BY 1 EVERY TIME IT GETS CLICKED.
	EXAMPLE:
	var pageCounter = 1;

18- REPLACE THE HARD CODED VALUE OF ONE FROM THE WEBPAGE WITH THE pageCounter VARIABLE.
	EXAMPLE:
	ORIGINAL: ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
	REPLACEMENT: ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-" + pageCounter + ".json");

19- AFTER THE ourRequest.send(); FUNCTION ADD THE pageCounter++; TO MAKE IT COUNT UP EVERY TIME THE EVENT TAKES PLACE.
	EXAMPLE:
	ourRequest.send();
	pageCounter++;

20- NOW WE WANT THE GREEN BUTTON TO DISSAPEAR AFTER THE 3RD CLICK, BECAUSE THERE'S NO MORE PAGES AFTER THAT.
	We'll do this by adding an if statement about the page counter
	EXAMPLE:
	if (pageCounter > 3){
		btn.classList.add("hide-me");
	}
	WE'LL ADD A CSS CLASS THAT HIDES THE BUTTON INSIDE THE FUNCTION OBJECT. SEE EXAMPLE ABOVE.

21- ADD YOUR CSS CLASS AND SET IT'S DISPLAY VALUE TO NONE. OR SET IT'S VISBILITY TO HIDDEN
	EXAMPLE:

	input.hide-me{
	display: none;
	or 
	visibility: hidden;
	}	

*/


var darkMatter = new XMLHttpRequest();
darkMatter.open("GET", "https://learnwebcode.github.io/json-example/animals-3.json")
darkMatter.onload = function(){
	var dmData = JSON.parse(darkMatter.responseText);
 	console.log(dmData[0]);

}

darkMatter.send();

/*
SECTION 3: ADDING FAVORITE AND LEAST FAVORITE FOODS OF THE ANIMALS.

1- SCROLL DOWN TO renderHTML FUNCTION, AND CHANGE THE STRING
	EXAMPLE:
	ORIGINAL: htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
	MODIFIED: htmlString += "<p>" + data[i].name + " is a " + data[i].species + " that likes to eat ";

2- CREATE A NEW LOOP INSIDE THE FOR LOOP, FOR THE FOODS THEY LIKE TO EAT:
	EXAMPLE:
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";

		for (ii = 0; ii < data[i].foods.likes.length) <NOTICE IN HERE WE WANT TO LOOK IN data[i] BECAUSE IT CONTAINS THE ENTIRE ARRAY. 
		THEN WE WANT TO KEEP LOOKING BY USING PERIODS. AND AT THE END WE PUT LENGTH TO TELL IT THAT WE WANT ALL THE VARIABLES IN THAT SECTION.>
	} 

3- NOW WE WANT TO CONCACTENATE htmlString:
	EXAMPLE:
	for (ii = 0; ii < data[i].foods.likes.length)
	htmlString += data[i].foods.likes[ii];

4- NOW OUTSIDE THE II FOR LOOP BUT INSIDE OUR I FOR LOOP WE WANT TO ADD THE CLOSING PARAGRAPH, AND PERIOD:
	EXAMPLE:
	for (i = 0; i < data.length; i++) {
		htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";

		for (ii = 0; ii < data[i].foods.likes.length){
		htmlString += data[i].foods.likes[ii];
		}
	htmlString += ".</p>"
	}

5- ADD A SPACE BETWEEN FOODS: First cut the htmlString += data[i].foods.likes[ii]; and replace it with an if statement.
	EXAMPLE:
	if (ii == 0) {
	
	} else {
	
	}

6- PASTE THE CLIPBOARD BACK IN THE IF STATEMENT SECTION, AND MAKE THE CORRECTION IN THE ELSE STATEMENT SECTION.
	EXAMPLE:
	if (ii == 0) {
		htmlString += data[i].foods.likes[ii];
	} else {
		htmlString += " and " + data[i].foods.likes[ii];
	}	

7- ADD THE FOODS THEY DON'T LIKE NOW: After the nested for loop, call the htmlString variable, and add a string
	EXAMPLE: 
	htmlString += " and dislikes "

8- COPY AND PASTE THE NESTED FOR LOOP AND TELL IT TO WORK WITH THE DISLIKES ARRAY INSTEAD OF THE LIKES ARRAY:
	EXAMPLE:

	htmlString += " and dislikes "
	
	for (i = 0; i < data.length; i++) {
		for(ii = 0; ii < data[i].foods.dislikes.length; ii++) {
			if (ii == 0){
				htmlString += data[i].foods.dislikes[ii];
			} else {
				htmlString += " and " + data[i].foods.dislikes[ii]; 
			}
		}

		htmlString += ".</p>"
	} 

9- SETTING UP ERROR HANDLING FOR AJAX: In case the load fails: Go right above ourRequest.send();
	EXAMPLE:
	ourRequest.onerror = function() {
	console.log("Connection error");
	}

10- SECOND METHOD FOR ERROR HANDLING: within the onload function add a new line, and let's add an if statement to look for poetential errors 
	EXAMPLE:
	ourRequest.onload = function() {
	if (ourRequest.status >= 200 && ourRequest.status < 400){
	var ourData = JSON.parse(ourRequest.responseText); 
	renderHTML(ourData);
	} else{
	console.log("We connected to the server, but it returned an error.");
	}
	}











*/


/*
PARTIAL LIST OF EVENTS

-DOMContentLoader
-load
-click
-scroll
-keydown
-keyup
-mouseenter: it creates a hover effect.
-mouseleave

*/






























