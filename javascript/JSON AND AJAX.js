//https://learnwebcode.github.io/json-example/animals-1.json

var youtubeRequest = new XMLHttpRequest();
youtubeRequest.open ("GET", "https://learnwebcode.github.io/json-example/animals-1.json");
youtubeRequest.onload = function(){
	var youtubeData = JSON.parse(youtubeRequest.responseText); 
	console.log(youtubeData[0]);
}

console.log(youtubeData[1]);
youtubeRequest.send();



