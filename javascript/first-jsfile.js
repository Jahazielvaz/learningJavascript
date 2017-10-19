


//VARIABLES
var test = "this is a test"
var Test = "this is another test"

alert(Test)

var number1 = "50"

alert(number1)

var myNameIs

myNameIs = "Jahaziel"

alert("My name is " + myNameIs)

//ARRAYS

var colors = ["blue", " green", " red"]

alert(colors[2]);



//Practice Round


var places = ["hotsprings", "ocean", "caves", "mountains"]

places[4] = "forests"; 

alert(places);

var puppies = new Array("Chato", " Kai", " Pelusa")

alert(puppies);

alert (puppies[3] = "tiempo");

puppies.push("Nina");

alert(puppies);

var numbers = [5, 77, 6, 43, 55, 66, 67, 78];

alert(numbers[0] + numbers[2]);
alert(numbers.length);
alert(numbers.sort())
alert(numbers.reverse())


//LOOPS

//console.log("HELLO");

//for(var i = 0; i < 110; i++)
//	console.log("number " + i);


var b = 0
while(b < 10){
	console.log("Number " + b);
	b++;
}

var numbers = [33, 55, 44, 52, 11, 22]; 

numbers.forEach(function(number){
	console.log(number);
});






//PRACTICE ROUND
var puppy = "Chato"
alert(puppy)

var redCar = "This is a beautiful car"
alert(redCar)

var chile = "jalapeno"
alert("I LOVE " + chile)

var JS = "software Engineer"
alert("I'm dying to live my dream which is, to become a " + JS)

var helloKitty = "I love purple kittens"
	console.log(helloKitty);

var dateOfBirth = "25"
	console.log("I was born on February " + dateOfBirth);
alert(redCar + " " + JS)


var myCologneCollection = ["212", " Dulce and Gabbana", " Armani Mania", " Ferrari Black"];
	console.log (myCologneCollection);

var money = ["Dollar Bill", " 5 Dollar Bill", " 10 Dollar Bill", " 20 Dollar Bill"];
	console.log(money)

var oneYearGoals = ["To become morally clean", " To be making at least $75k per year", " To have some money saved up for the future"];
	console.log(oneYearGoals)




var fullStackLanguages = ["Html5", " CSS", " JavaScript", " Java", "React", "AngularJS"];
	console.log(fullStackLanguages[2])


var utahNature = ["Arches", " Ensign Peak", " Clarke Planetarium"];
	console.log(utahNature[3] = "Zions")

var healthyFood = ["Spinach", " Broccoli", "Fruits"];
	console.log(healthyFood)

var videoGames = ["Mario Kart", " Mario Party", " Mario Tennis"]
	console.log(videoGames)



//TASK 1
/*
var task1 = ("Make a Variable, with an alert");
alert(task1)
alert("PASSED")


//TASK 2
var task2 = ("Concactenate 2 variables in an alert");
alert(task2);

var profession = ("Software Engineering");
var business = ("Real Estate Investing");
alert(profession + " " +business);
alert("PASSED: but forgot to add a space");



//TASK 3 
var task3 = ("make an array of strings");
alert(task3);

var fallActivityList = ["Haunted Houses", " Hanuted Corn Mazes", " Pumpkin Picking", " Nature Meditation Walks"];
alert(fallActivityList);
alert("FAILED: I added the + in between strings, and you're not supposed to add them inside an array");
*/
//TASK 3 20 PRACTICE ROUNDS
/*
var placesIveLivedIn = ["New Jersey ", "Chicago ", "Washington D.C ", "Maryland ", "New York ", "Utah "];

var carsIveOwned = ["Honda Accord 2003 ", "Honda Accord 2010 "];

var womenIveDated = ["Megan Marie ", "Chanelle Bowers ", "Eliana Johnson ", "Melinda ", "Kristen Orchowski "];

var myGoals = ["Become Temple Worthy by October 1, 2017 ", "Become a Software Engineer by May 1, 2017 ", "Pay off Debt by December 1, 2018"];

var myVision = ["To have the ability to become a digital nomad",  " To be a great servant of the Lord", " To find a beautiful, and worthy wife", " To build enough passive income to be able to live without having to work, and working just for fun"];

var myEngineeringGoals = ["Become a Software Engineer", " Specialize in a branch of IOS development", " Working freelance to command my own schedule"];

var languagesForMyCareer = ["HTML5", " CSS3", " JavaScript", " Java", " Swift", " React", " AngularJS", " Ruby"];

var seasons = ["Spring", " Summer", " Fall", " Winter"];

var favoriteThingsAboutUtah = ["The Culture", " The Mountains", " The Outdoor Life", " The influence of the Church"];

var favoriteColors = ["Green", " Black", " Blue"];

alert(placesIveLivedIn +" "+ carsIveOwned +" "+ womenIveDated +" "+ myGoals +" "+ myVision +" "+ myEngineeringGoals +" "+ languagesForMyCareer +" "+ seasons +" "+ favoriteThingsAboutUtah +" "+ favoriteColors);
*/


// TASK4 
/*
var task4 = ("contactenate 2 number strings in an alert and add a string directly to the alert");
alert(task4);

var number1 = "30";
var number2 = "20";
alert("I like these 2 numbers: " + number1 + " " + number2);
alert("FAILED: couldn't effectively combine the string, and the 2 arrays")


//TASK 5
var task5 = "Target Specific Values Within an Array";
	console.log(task5)

var trees = ["Cherry Blossom ", "Weeping Willow", " Antartic Beech", " Wisteria"];
	console.log(trees[3])
*/
//TASK 5 6 PRACTICE ROUNDS

/*
var trees2 = ["Japanese Maple ", "Angel Oak ", "Blooming Cherry"];
	console.log(trees2[0]);
	console.log(trees2[1]);

var trees3 = ["American Elm ", "Giant Sequoia ", "Socotra Dragon ", "Blue Jacaranda ", "Sagano Bamboo ", "Baobab"];
	console.log(trees3[1] + trees3[2] + trees3[5])

var galaxy = ["Nebula ", "Andromeda ", "Keplar ", "Milky Way"];
	console.log(galaxy[0])

var beautifulPlaces = ["Underwater Hotel ", "Atlantis ", "Iceland Ice-caves ", "Scottland"];
	console.log(beautifulPlaces[2])

var amazingActivities = ["Squirrel Suit Flying ", "Bubble Soccer ", "Helicopter Ride ", "Underwater Adventure"];
	console.log(amazingActivities[0] + amazingActivities[3])

var myWife = ["Beautiful ", "Cheerful ", "Loves God ", "Loves Nature ", "Likes a Nomadic Lifestyle"]
	console.log(myWife[0] + myWife[2] + beautifulPlaces[0] + trees3[4])
*/

//TASK 6 CONCACTENATING STRINGS AND VALUES COMBINED
/*
var shortHike = "Ensign Peak"
var utahPlaces = ["Temple Square ", "Arches ", "Provo River ", "Cottonwood Canyon"];
	console.log("Things I love about Utah: " + utahPlaces + " " + shortHike);
*/
//NOTE THAT WHEN YOU'RE CONCACTENATING VALUES COMBINED WITH STRINGS YOU CAN'T ADD COMMAS IN BETWEEN THEM OR THEY WON'T SHOW UP.

//TASK 6 10 PRACTICE ROUNDS


/*
var thingsILoveAboutUtah = ["Breath-Taking Landscapes", " Inspiring People", " The Gospel's Influence", " Beautiful Women", " True Promissed Land"];
	console.log("I love Utah, " + "for the following reasons: " + thingsILoveAboutUtah);

var thingsIHighlyEnjoy = ["Dreams ", "Really Powerful Music ", " Friends and Gatherings ", "Beautiful Nature", "Traveling to Remote places"];
	console.log("I think I'm a bit weird. " + "I have very weird interests. " + "I like: " + thingsIHighlyEnjoy);

var Passions = ["Creating", " Becoming a Rising Phoenix", " Turning the Tide", " Exploring the World"]
	console.log("Things I'm Passionate About:" + " " + Passions);

var colors = ["Red", " Green", " Blue"];
	console.log("Primary Colors:" +" "+ colors)

var colors2 = ["Blue-green", " Blue", " Purple", " Navy-Blue"];
	console.log(colors2 + " These are considered cool colors!")

var colors3 = ["Red", " Yellow", " Orange", " Pink"];
	console.log("These are considered warm colors," +" "+ colors3)

var nature = ["Colorado River", " Grand Canyon", " Yellowstone"];
	console.log(nature + "These are really cool places")

var nature2 = ["Cottonwood Canyon", " Indian Hot-Springs", " Adirondac", " Arches"];
	console.log("These are places I've been to in Utah" +" "+ nature2);

var nature3 = ["Donut Falls", " Sugar House", " Up House", " Provo River"];
	console.log(nature3 + " These are more places I've been to.")

var nature4 = ["Temple Square", " Ogden", " Syracuse", " Red Butte Gardens"];
	console.log("Of course, I've also been to these places:" +" "+ nature4);
*/


//TASK 7 MAKE AN ALGORYTHM THAT ADDS NUMBERS TOGETHER:
/*
var number1 = 145
var number2 = 7000
var number3 = 3928
var number4 = 785
var number5 = 9284

alert(number1 + number2 + number3 + number4 + number5);
console.log(number1 * number2 * number3 * number4 * number5);

var students = 10
var teachers = 4 
	console.log(students + teachers);
	console.log(students * teachers);

var puppies = 55
var kittens = 38
	console.log(puppies + kittens);	
	console.log(kittens * puppies);
*/
//TASK 8 PUSH FUNCTION

//var inovations = ["AI", " VR"];
//inovations.push("3D Printing");
//console.log(inovations);

//TASK 8 PUSH FUNCTION 10 PRACTICE ROUNDS

/*
var schools = ["NY Code Academy", " Strayer", " Udemy", " University of Utah" ];
schools.push("Code Camp");
console.log(schools);

var food = ["chinese", " Thai", " Mexican", " Indian", " Amercian", " Brazilian"];
food.push("Fast Food");
console.log(food);

var healthyFood = ["Spinach", " Broccoli", " Salad", " fish"];
healthyFood.push ("Chicken");
console.log(healthyFood);

var utensils = ["Knives", " Spoons"];
utensils.push(" Forks");
utensils[3] = "Spatulas"
console.log(utensils);

var appliances = ["Washing Machine",  "dryer",  "Microwave"];
appliances.push("Fridge", "Blender");
console.log(appliances);

var tools = ["hammer", " Knife", " Nail gun"];
tools.push("Tape Measurer");
tools[4] = " Screwdriver"
alert("Everyday Household Tools: " + tools);

var bathroomSupplies = ["Trash Can", " Windex", " Soap"];
bathroomSupplies.push(" Toilet Paper")
bathroomSupplies[4] = " Towel"
alert(bathroomSupplies);

var campingGear = ["Tent", " Sleeping Bag", " Blankets", " Pillows"];
campingGear[4] = "Fire Starter"
campingGear.push("Wood");
console.log("My Camping List: " + campingGear);

var paintball = ["Gun", " Balls", " Vest"];
paintball.push(" Mask", " CO2 Tank");
paintball[5] = " Smoke Granade"
console.log("I'm going paintballing. Here's the gear that I'm Bringing: " + paintball);

var roadTrip = ["Blankets", " Picnick Table", " Food"];
roadTrip[3] = " Boogie Boards"
roadTrip.push(" Sun Tan Lotion", " Bikes");
console.log("Item List for my Ocean City trip: " + roadTrip);

*/

//LOOPS 
//TASK 9 FOR LOOP: BUILD AN ADDITION FOR LOOP

/*
for(var i = 0; i < 10; i++){
	console.log(i);
}

for(x = 0; x< 20; x+=5){
	document.write ("WITH JAHAZIEL VAZQUEZ <br><br>");
}

//TASK 9 FOR LOOP: 15 PRACTICE ROUNDS:

for(doggie = 0; doggie < 15; doggie++){
	console.log(doggie)
}

for(p = 0; p < 11; p++){
	document.write("Hi ");
}

for(y = 0; y < 13; y+=2){
	document.write("Cute Cow, ");
}


for(yolo = 0; yolo < 100; yolo+= 20){
	document.write("Cool Catz, <br><br>");
}

for(g=0; g<11; g++){
	console.log(g)
}

for(f = 0; f < 4; f++){
	console.log(f);
}



for(jv = 0; jv < 17; jv++){
	document.write("<b>JV rocks,</b> ")
}


for(h = 0; h < 12; h+=3){
	document.write("<em>Repeat,</em> ");
}


for(fdr = 0; fdr < 6; fdr++){
	document.write("<br> CodeJunkie, ")
}


for(jm = 0; jm < 9; jm++){
	console.log(jm)
}

*/


var FULLTEST = "full-test"



//QUESTION 1: WRITE 1 STRING VARIABLE AND 1 NUMBER VARIABLE. MAKE AN ALERT FOR EACH OF THEM

var myPuppy = "Chato"
var numberOne = 45
alert(myPuppy);
alert(numberOne);
//CORRECT!


//QUESTION 2: MAKE 1 ARRAY OF STRINGS, AND 1 ARRAY OF NUMBERS. VERIFY EACH ARRAY USING CONSOLE.

var galaxy = ["Andromeda", " Sun", " Pluto", " Mars"];
	console.log(galaxy);

var numbersSectionOne = [5, 10, 30, 33, 45];
	console.log(numbersSectionOne);
//CORRECT!


//QUESTION 3: CONCACTENATE 2 STRINGS IN THE CONSOLE SECTION

var love = "Wife"
var explore = "Travel"
	console.log("This is my future life: " + love +" "+ explore);
//WRONG: I FORGOT TO ADD A + BETWEEN MY STRING AND LOVE


//QUESTION 4: CONCACTENATE 2 NUMBER VARIABLES IN AN ALERT, AND ADD A STRING DIRECTLY TO THE ALERT

var numberSection = 7
var numberSectionTwo = 3
alert("My favorite number is: " + numberSection +" "+ numberSectionTwo);
//WRONG: I FORGOT TO ADD A + BETWEEN MY STRING AND NUMBERSECTION. ALSO I HAD THE INTENT OF ADDING THEM BOTH TOGETHER, AND IT DIDN'T ADD THEM.

//QUESTION 5: TARGET SPECIFIC VALUES WITHIN AN ARRAY

var variedAr = ["Random ", 5, " Tongue", " Crazy", 3];
console.log(variedAr[0] + variedAr[4]);
//CORRECT!


//QUESTION 6: CONCACTENATE STRINGS AND VALUES COMBINED TOGETHER

var numbArray = [10, 20, 22, 50];
var strngArray = ["Haunted House", " Corn Maze", " Apple Cider"];
//console.log(numbArray[0] + strngArray[0] + numbArray[3] + strngArray[2]);
//WRONG: CONSOLE SECTION. FORGOT TO ADD LOG!


//QUESTION 7: MAKE AN ALGORHYTHM THAT ADDS NUMBERS TOGETHER
 
for(it = 0; it < 11; it++){
	console.log(it);
}
//CORRECT!


//QUESTION 8: CREATE 3 EXAMPLES OF THE PUSH FUNCTION

var air = ["Plane", " Bird", " Glider"];
air.push(" Rocket");
console.log(air);
//CORRECT!!

var ground = ["Drill", " Mine Cart", " Train Tracks"];
ground.push(" Submarine");
ground[4] = "Steel Hog"
console.log(ground);
//CORRECT!

var spaceX = [" Ship", " Moon Base", " Venus"];
spaceX.push(" Black Hole");
spaceX[4] = "Galactic Kitten"
console.log(spaceX);
//CORRECT

//QUESTION 9: CREATE 3 DIFFERENT EXAMPLES OF THE FOR LOOP

for(sf = 0; sf < 10; sf++){
	document.write("Victory,<br> ");
}
//CORRECT

for(Yosh = 0; Yosh < 15; Yosh+=3){
	document.write("<b>Yoshi,</b> ");
}
//CORRECT

for(jt = 0; jt < 12; jt++){
	console.log(jt);
}
//CORRECT


//QUESTIONS TO REHEARSE


//QUESTION 6: CONCACTENATE STRINGS AND VALUES COMBINED TOGETHER
//FORGOT TO ADD LOG!
//10 ROUND PRACTICE

/*
var testNumber = 38
var tdragon = "Toothless "
var tfantasy =["Dwarf, " + "Elf, " + "Dragon, "];
	console.log(tdragon + tfantasy + testNumber);

var tnumbers = [12 + 11 + 10 + 43];
var tstrings1 = ["Hello", " I'm Learning JS", " To apply as a front end developer"];
	tstrings1[3] = " I'm SO EXCITED"
	tnumbers[4] = 100
	console.log("My Career: " + tnumbers +" "+ tstrings1);

var tstrings2 = ["house", " car", " computer"];
var tnumbers2 = [10 + 10 + 10 + 10]
	tnumbers2[4] = +30
	tstrings2[3] = " Private Jet"
	console.log("My crazy combination: " + tstrings2 + " " + tnumbers2);

var tstrings3 = ["Bed, " + " Chair", " Lamp"]
	tstrings3[3] = "Desk"
var	tnumbers3 = [10 + 23 + 235 + 33];
	tnumbers3[4] = +5000
	console.log("Round 3: " + tstrings3[2] + " " + tnumbers3[0] + tnumbers3);

var tstrings4 = ["Scriptures, " + "Temple, " + "Church Attendance, "]
var tnumbers4 = [8 + 29 + 84 + 78]
tstrings4[3] = "Keeping the Commandments, "
tnumbers4[4] = 100
	console.log("To gain Salvation and Ultimately Exhaltation, I need to do this: " + tstrings4 + tnumbers4 + "times.");

var tstrings5 = ["Service, " + "Repentance, " + "Patience, " + "Hope, "]
var tnumbers5 = [1000 / 2 + 500 * 10]
tstrings5.push("Faith, ")
tnumbers5[4] =  11111
	console.log("These things are also vital in order to return to God: " + tstrings5 + tnumbers5); 

var tstrings6 = ["Yellow, " + "Green, " + "Purple, " + "Orange, "];
var tnumbers6 = [848, 34, 98, 334, 222,];
tstrings6.push("Silver bullet, ")
tnumbers6.push(399)
alert(tstrings6 + tnumbers6);

var tstrings7 = ["Apple, " + "Banana, " + "Pineapple, " + "Papaya, "]
var tnumbers7 = [38 * 44 * 22 * 2]
tstrings7.push("Dragon Fruit, ")
tnumbers7.push(3234)
alert("I like green cammels, because they're fluffy! " + tstrings7 + tnumbers7);

var tstrings8 = ["Tornado, " + "Tsunami, " + "Earthquake, "];
var tnumbers8 = [10000 / 2 / 3 / 10];
tnumbers8.push(44);
tstrings8.push("Armagedon, ");
console.log("CRAZY!!! " + tstrings8 + tnumbers8);

var tstrings9 = ["Priesthood, " + "Relief Society, " + "Primary, "]
var tnumbers9 = [28 + 345 + 22 + 532];
tnumbers9.push(-50000);
tstrings9.push("Bishopric")
console.log("Peaceful: " + tnumbers9 + tstrings9);

*/





//QUESTION 3: CONCACTENATE 2 STRINGS IN THE CONSOLE SECTION
//WRONG: I FORGOT TO ADD A + BETWEEN MY STRING AND LOVE

/*
var testNumber = 38
var tdragon = "Toothless "
var tfantasy =["Dwarf, " + "Elf, " + "Dragon, "];
	console.log(tdragon + tfantasy + testNumber);

var tnumbers = [12 + 11 + 10 + 43];
var tstrings1 = ["Hello", " I'm Learning JS", " To apply as a front end developer"];
	tstrings1[3] = " I'm SO EXCITED"
	tnumbers[4] = 100
	console.log("My Career: " + tnumbers +" "+ tstrings1);

var tstrings2 = ["house", " car", " computer"];
var tnumbers2 = [10 + 10 + 10 + 10]
	tnumbers2[4] = +30
	tstrings2[3] = " Private Jet"
	console.log("My crazy combination: " + tstrings2 + " " + tnumbers2);

var tstrings3 = ["Bed, " + " Chair", " Lamp"]
	tstrings3[3] = "Desk"
var	tnumbers3 = [10 + 23 + 235 + 33];
	tnumbers3[4] = +5000
	console.log("Round 3: " + tstrings3[2] + " " + tnumbers3[0] + tnumbers3);

var tstrings4 = ["Scriptures, " + "Temple, " + "Church Attendance, "]
var tnumbers4 = [8 + 29 + 84 + 78]
tstrings4[3] = "Keeping the Commandments, "
tnumbers4[4] = 100
	console.log("To gain Salvation and Ultimately Exhaltation, I need to do this: " + tstrings4 + tnumbers4 + "times.");

var tstrings5 = ["Service, " + "Repentance, " + "Patience, " + "Hope, "]
var tnumbers5 = [1000 / 2 + 500 * 10]
tstrings5.push("Faith, ")
tnumbers5[4] =  11111
	console.log("These things are also vital in order to return to God: " + tstrings5 + tnumbers5); 

var tstrings6 = ["Yellow, " + "Green, " + "Purple, " + "Orange, "];
var tnumbers6 = [848, 34, 98, 334, 222,];
tstrings6.push("Silver bullet, ")
tnumbers6.push(399)
alert(tstrings6 + tnumbers6);

var tstrings7 = ["Apple, " + "Banana, " + "Pineapple, " + "Papaya, "]
var tnumbers7 = [38 * 44 * 22 * 2]
tstrings7.push("Dragon Fruit, ")
tnumbers7.push(3234)
alert("I like green cammels, because they're fluffy! " + tstrings7 + tnumbers7);

var tstrings8 = ["Tornado, " + "Tsunami, " + "Earthquake, "];
var tnumbers8 = [10000 / 2 / 3 / 10];
tnumbers8.push(44);
tstrings8.push("Armagedon, ");
console.log("CRAZY!!! " + tstrings8 + tnumbers8);

var tstrings9 = ["Priesthood, " + "Relief Society, " + "Primary, "]
var tnumbers9 = [28 + 345 + 22 + 532];
tnumbers9.push(-50000);
tstrings9.push("Bishopric")
console.log("Peaceful: " + tnumbers9 + tstrings9);

*/


//QUESTION 4: CONCACTENATE 2 NUMBER VARIABLES IN AN ALERT, AND ADD A STRING DIRECTLY TO THE ALERT
//I FORGOT TO ADD A + BETWEEN MY STRING AND NUMBERSECTION. ALSO I HAD THE INTENT OF ADDING THEM BOTH TOGETHER, AND IT DIDN'T ADD THEM.

/*
var crazyNumbers = [10, 29, 383, 22, 1, 8, 742];
var crazyStrings = ["Geeze",  " dlg", " iedh",  " 3ids",];
alert(crazyNumbers[1] + crazyNumbers[6] + crazyStrings[0]);

var cN = [83, 38, 73, 754];
alert(cN[0] + cN[3]);

var cS = ["kdj", " ekes", " wodk", " doos", " plkd"]
alert(cS[1] + cS[3] + cS[4])

var cN2 = [8484, 93, 4, 948, 39, 39784];
var cS2 = [" iee ", " ldo ", " kdlwo ", " slow "];
alert(cN2[0] + cS2[0] +cN2[5] + cS2[3]);

var cN3 = [838, 93, 84, 948, 00923, 383];
var cS3 = ["orhsd, ", " ood,", " o23di,", " dksk, "]
console.log(cS3[0] + cN3[4] + cS3[3] + cN3[3]);

var cN4 = [6, 292, 983, 38, 29, 93];
var cS4 = [" kdk, " + "kek, " + "owk, " + "dkdi, "];
console.log(cS4 + "Boss Status!");


var cn5 = [838, 832, 9983, 9283, 2023];
var cs5 = ["hkd, " + "kdow, " + "wokd, " + "osdk35, "];
console.log(cn5[2] + cn5[3] + cs5 + "Cool Beans")


var dl39 = [938 + 9293 / 3334 * 223];
var sks = [" khsd, ", "lskd, ", "kdi, ", "kdke, "]
console.log("This is going to be sick: " + dl39 + sks[0]);



var odid = ["kdkd, ", "kdie, ", 3, "kdkd5, ", 9, 2]
alert(odid[0] + odid[5]);
var lwee = [393, 933, 003, 23, 2354];
console.log("kdkseh: " + 88888 + lwee[3] + odid[1]);

*/

//INPUTTING TEXT DIRECTLY ONTO THE PAGE:
/*
document.write("<br>");

document.write("Hello World <br>");

document.write("I love green Camels, Because they're fluffy. <br>");

document.write("Man I'm good <br>");

document.write("I love chocolate <br>");

document.write("This is getting kinda fun! <br>");

document.write("Pretty soon I'll be an engineer! <br>");

document.write("I'll be chilling in some Island sippin' on coconut Juice with my beautiful wife! <br>");

document.write("All I'll need is a mac, and a portable internet service, to build my empire! <br>");

document.write("I'm coming back to the Lord too, so my life will be amazing! <br>");

document.write("I can do anything I put my mind to. And I'm becoming a software engineer! <br>")
*/


//CONCACTENATING MULTIPLE VARIABLES INTO ONE 
/*
var helloPuppy = "Holy, ";
var HelloDragon = "Molly,  ";
var HelloHendgehog = "Guacamole ";
var combination = helloPuppy + HelloDragon + HelloHendgehog;
alert(combination);



var kdik = "Hello, "
var oskd = "World, "
var ls = "Life's Good."

var combo2 = kdik + oskd + ls;
console.log(combo2);

var ld = "Oh, "
var le = "my "
var od = "goodness."

var combo3 = ld + le + od;
console.log(ld + le + od);

var os = "This "
var oes = "is "
var oas = "the "
var esdt = "life!"

var combo4 = os + oes + oas + esdt;
console.log(combo4);

var asd = "My friend, "
var odses = "Diego "
var opdkl = "is old. "
var lskd = 26;
var lddc = 83; 
var owd = " years old, to be exact!"

var combo5 = asd + odses + opdkl + lskd + lddc + owd;
console.log(combo5);


var ldkl = "rubbish, "
var odnd = "and nonesense!"

var combo6 = ldkl + odnd;
console.log(combo6);


lll = "Cows, "
ttt = "it's raining cows!"

var combo7 = lll + ttt; 
console.log(combo7);

eee = "kdkjx, " 
ggg = "okn, "
uuu = "esdfc"

combo8 = "Narly " + eee + ggg + uuu;
console.log(combo8);

pppp = "kdkl, "
ffff = "wosxjx"

combo9 = pppp + ffff;


hhhh = "htosdi, "
mmmm = "owsj"

combo10 = hhhh + mmmm;
console.log(combo10);

vvvv = 5;
llll = " lscj"

combo11 = vvvv + llll
console.log(combo11);
*/


//CONCACTENATING VARIABLES
/*
var num1 = 39;
var num2 = 293;
var total = num1 * num2;
document.write(total);

var num3 = 838; 
var num4 = 9348;
var total2 = num3 / num4;
document.write(total2);  

var num5 = 9283;
var num6 = 932;
var total3 = num5 + num6;
console.log(total3);


var num7 = 923;
var num8 = 29;
var total4 = num7 + num8;
console.log(total4);

var num9 = 32; 
var num10 = 838;
var total5 = num9 * num10;
console.log("Sonic: " + total5);


var num11 = 563; 
var num12 = 2385;
var total6 = num11 / num12;
console.log(total6);


var num13 = 564;
var num14 = 928347;
var total7 = num13 * num14;
console.log(total7);

var num15 = 8342;
var num16 = 73;
var total8 = num15 + num16;
console.log(total8);


var num17 = 9283;
var num18 = 238;
var total9 = num17 / num18;
console.log(total9);

var num19 = 847;
var num20 = 99834;
var finalTotal = ++num19 * num20;
console.log(finalTotal);
*/


//ARRANGE AND REVERSE

//BOTH METHODS OF ADDING STRINGS TO ARRAYS



//FINDING PROPERTIES INSIDE VARIABLES AND ARRAYS. (DON'T FORGET TO DISCOVER ALL THE PROPERTIES THERE ARE)
/*
var alpha = "hey there";
var length = alpha.length;
console.log(length);


var beta = ["dhd, ", "dic, "];
var betaLength = beta.length;
console.log(betaLength);

var lskd = "kdkd";
var lskdLength = lskd.length;
console.log(lskdLength);

var ksf = "sdofiuu43";
var ksfLength = ksf.length;
console.log(ksfLength);

var oiui = "owdc";
var oiuiLength = oiui.length;
console.log(oiuiLength);

var oslk = "r klsdj, "
var oslkLength = oslk.length;
console.log("oslk Lenght: " + oslkLength);

var osid = "klerwhdfc"
var osidLength = osid.length;
console.log(osidLength);

var lsc = "lskjc sdlc sdjhc sdoc, "
var lscLength = lsc.length;
console.log("Lsc Length: " + lscLength);


var ks = "ksfhjfes "
var ksLength = ks.length;
	console.log("Ks Length: " + ksLength);


var lkrs = "lsjdfsbhj djskb";
var lkrsLength = lkrs.length;
 console.log("lkrs Length: " + lkrsLength);
*/


//USING METHODS (DON'T FORGET TO DISCOVER ALL THE METHODS THERE ARE.)
/*
var omega = "dkshkd, ";
var omeResult = omega.substring(1, 4);
console.log(omeResult);

var coolBeans = "kjdshjsdh, ";
var coolRes = coolBeans.substring(0, 5);
console.log(coolRes);
*/

//METHOD 2 FOR CREATING ARRAYS:
/*
var a = new Array(6);
a[0] = "cat";
a[1] = "dog";
a[2] = 23;
a[5] = true;

document.write(a[5]);


var b = new Array(5);
b[0] = "Zebra, ";
b[1] = "Llama";
b[2] = 100;
b[3] = false;
b[4] = 23;
b[5] = "Giraffe, ";

document.write(b);

var c = new Array (4);
c[0] = "sun, "
c[1] = "stars"
c[2] = "moon"
c[3] = "planet"

document.write(c[0] + c[2]);


d = new Array(3);
d[0] = "Magnetar";
d[1] = "Black Hole";
d[2] = 2345;
document.write(d);


var e = new Array(5);
e[2] = "golden goose";
e[3] = 233;
e[4] = false ;
document.write(e);

var f = new Array(4);
f[0] = "Taylorsville ";
f[1] = "Murray ";
f[2] = "Herriman ";
f[3] = "Lehi "

document.write(f[0] + f[2]);


var g = new Array(2);
g[0] = 234;
g[1] = 234;

document.write(g[0] + g[1]);


var h = new Array(4);
h[0] = "Commercial ";
h[1] = "Facebook ";
h[2] = "Twitter ";
h[3] = "Instagram ";

document.write(h);


var i = new Array(2);
i[0] = "Love "
i[1] = "life"
document.write(i);

var j = new Array(4);
j[0] = "Jahaziel "
j[1] = "Vazquez "
j[2] = "Alvarez "
j[3] = "Emmanuel "

document.write("My Full Name: " + j);
*/

//FUNCTIONS

sayHello();
br();
br();
sayHello("Bob");
br();
sayHello("Mary");
hr();
br();
Lion("Simba");
br();
Lion("Scar");
br();
br();
Wolf("Snowy");
br();
br();
Eagle("Sky: ");
br();
br();
Honeybadger("Beast: "); 

a= 22;
if(a > 10){
alert(a);
}




















































































