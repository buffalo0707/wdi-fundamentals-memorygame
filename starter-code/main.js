
//Create variables for each card.
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

//Compare card values to eachother and alert user
// if (cardOne === cardFour) {
// 	alert("Sorry, try again.");
// } else if (cardThree === cardFour) {
// 	alert("You found a match!");
// } else if (cardOne === cardTwo) {
// 	alert("You found a match!");
// }

//Function for creating cards. Will create the number of cards passed in as parameter
var createCards = function(a){
	//For each card
	for (var i = 1; i <= a; i++){
		//Add a new div element
		var newCard = document.createElement('div');
		//with class of 'card'
		newCard.className = 'card';
		//add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
	}
}

//Variable to number of cards
var numCards = 4
//Run function to create cards
createCards(numCards);