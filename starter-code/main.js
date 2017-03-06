console.log("JS file is connected to HTML! Woo!");

//Create variables for each card.
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardFour) {
	alert("Sorry, try agqin.");
} else if (cardThree === cardFour) {
	alert("You found a match!");
} else if (cardOne === cardTwo) {
	alert("You found a match!");
}