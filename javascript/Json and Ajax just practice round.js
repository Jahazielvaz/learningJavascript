
/*
var myCat = {
	"name": "Meawsalot",
	"species" : "cat", 
	"favFood": "tuna"
}

myCat.name
myCat.favFood


var myFavColors = ["Green", "Blue", "Black", "Purple"]

myFavColors[1]
*/



//TOMORROW MAKE SURE YOU PRACTICE  A TON OF JSON UNTIL YOU MEMORIZE IT. MAKE SURE YOU FULLY UNDERSTAND THE PRINCIPLES TOO. 

var thePets = [
{
	"name": "Meawsalot",
	"species" : "cat", 
	"favFood": "tuna"
}, 

{
	"name": "Barky",
	"species" : "Dog", 
	"favFood": "Carrots"
}

]




var cars = [
{
	"make": "Honda",
	"model": "Accord",
	"cylinders": "4 cyl"
},

{
	"make": "Nissan",
	"model": "Altima",
	"cylinders": "4 cyl"
},

{
	"make": "Nissan",
	"model": "Maxima",
	"cylinders": "6 cyl"
}
]


var artists = [
{
	"name": "Linkin Park"
	"style": "Rock"
	"Top Tracks": "Numb, In the end, New Divide"
},
{
	"name": "Lindsey Stirling"
	"style": "Indie"
	"Top Tracks": "Crystalize, We are Giants, Elements"
},
{
	"name": "Pink Floyd"
	"style": "Rock"
	"Top Tracks": 
}
]



//TOMORROW MAKE SURE YOU PRACTICE SELECTING PROPERTIES WITHIN OBJECT ARRAYS, A TON, UNTIL YOU FULLY GET IT AND DON'T FORGET IT.


var cars = [
{
	"make": "Honda",
	"model": "Accord",
	"cylinders": "4 cyl"
},

{
	"make": "Nissan",
	"model": "Altima",
	"cylinders": "4 cyl"
},

{
	"make": "Nissan",
	"model": "Maxima",
	"cylinders": "6 cyl"
}
]

cars[2].model
alert(cars[2].model)


//PRACTICE THIS A TON UNTIL YOU FULLY GET IT!
var animalContainer = document.getElementById("animal-info")

var btn = document.getElementById("btn");
btn.addEventListener("click", function() {
	var ourRequest = new XMLHttpRequest();
ourRequest.open("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
ourRequest.onload = function() {
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};

ourRequest.send();


})

function renderHTML(data){
	var htmlString = "";
	animalContainer.insertAdjacentHTML("beforeend", htmlString);
}

 
































