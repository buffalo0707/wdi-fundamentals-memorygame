
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var score = 0

//Compare card values to eachother and alert user
// if (cardOne === cardFour) {
// 	alert("Sorry, try again.");
// } else if (cardThree === cardFour) {
// 	alert("You found a match!");
// } else if (cardOne === cardTwo) {
// 	alert("You found a match!");
// }

//Function for creating cards. Will create the number of cards passed in as parameter
var createCards = function(a) {
	//For each card
	for (var i = 0; i < a; i++){
		//Add a new div element
		var newCard = document.createElement('div');
		//with class of 'card'
		newCard.className = 'card';
		newCard.setAttribute('data-card', cards[i]);
		//add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
		newCard.addEventListener('click', isTwoCards)
	}
}

var isTwoCards = function() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>"; // king
	} else {
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>"; //queen
	}

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];
	}
  }

var isMatch = function(cardsInPlay) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("That's a match - you win!");
		score += 1;
		console.log(score)
		document.getElementById('score').innerHTML = "Score: " + score
	} else {
		alert("Not a match... Try again!");
	}
	for (var i = 0; i < this.length; i++) {
		this.innerHTML = "";
	}

}

//Run function to create cards
createCards(cards.length);

document.getElementById("reset").addEventListener("click", function(){
    var cardsInPlay = document.getElementsByClassName('card');
    for (var i = 0; i < cardsInPlay.length; i++) {
    	cardsInPlay[i].innerHTML = "";
    }
});