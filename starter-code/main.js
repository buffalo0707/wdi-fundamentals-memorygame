
var cards = ['ace', 'king', 'queen', 'jack', 'ten', 'joker', 'ace', 'king', 'queen', 'jack', 'ten', 'joker',];
var cardsInPlay = [];
var score = 0
var flippedCards = 0

// Function for creating cards. Will create the number of cards passed in as parameter
var createBoard = function(a) {
	// shuffle cards
	cards.sort(function(a, b){return 0.5 - Math.random()});
	// For each card
	for (var i = 0; i < a; i++){
		//Add a new div element
		var newCard = document.createElement('div');
		// with class of 'card'
		newCard.className = 'card';
		// and data-card element showing the card type (i.e. queen, king, etc.)
		newCard.setAttribute('data-card', cards[i]);
		// show all cards face up
		if (newCard.getAttribute('data-card') === 'king') {
			// king
			newCard.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/2000px-King_of_hearts2.svg.png'>";
		} else if (newCard.getAttribute('data-card') === 'queen') {
			// queen
			newCard.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/2000px-Queen_of_hearts2.svg.png'>";
		} else if (newCard.getAttribute('data-card') === 'jack'){
			// jack
			newCard.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/2000px-Jack_of_hearts2.svg.png'>";
		} else if (newCard.getAttribute('data-card') === 'ace') {
			// ace
			newCard.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/2000px-Playing_card_heart_A.svg.png'>";
		} else if (newCard.getAttribute('data-card') === 'ten') {
			// ten
			newCard.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/2000px-Playing_card_heart_10.svg.png'>"
		} else {
			// joker
			newCard.innerHTML = "<img src='http://monolithicgames.com/wp-content/uploads/2014/06/45-Joker.png'>"

		}
		// add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
		newCard.addEventListener('click', isTwoCards)
		}
}

var isTwoCards = function() {
	// if card is not flipped (not showing card image), proceed. Nothing will happen if card is already flipped
	if (this.innerHTML === ""){
		//increment card
		flippedCards += 1;
		console.log (flippedCards);
	  // add card to array of cards in play
	  cardsInPlay.push(this.getAttribute('data-card'));
		// show the card's image (flip face up)
		console.log(this.getAttribute('data-card'));
		if (this.getAttribute('data-card') === 'king') {
			// king
			this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/King_of_hearts2.svg/2000px-King_of_hearts2.svg.png'>";
		} else if (this.getAttribute('data-card') === 'queen') {
			// queen
			this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Queen_of_hearts2.svg/2000px-Queen_of_hearts2.svg.png'>";
		} else if (this.getAttribute('data-card') === 'jack'){
			// jack
			this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Jack_of_hearts2.svg/2000px-Jack_of_hearts2.svg.png'>";
		} else if (this.getAttribute('data-card') === 'ace'){
			// ace
			this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Playing_card_heart_A.svg/2000px-Playing_card_heart_A.svg.png'>";
		} else if (this.getAttribute('data-card') === 'ten') {
			// ten
			this.innerHTML = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Playing_card_heart_10.svg/2000px-Playing_card_heart_10.svg.png'>"
		} else {
			// joker
			this.innerHTML = "<img src='http://monolithicgames.com/wp-content/uploads/2014/06/45-Joker.png'>"
		}
	  // if you have two cards in play, check for a match
	  	if (cardsInPlay.length === 2) {

	    // pass the cardsInPlay as an argument to the isMatch function
	    isMatch(cardsInPlay);

	    // clear cards in play array for your next try
	    cardsInPlay = [];
		}
	}
 }

// check to see if cards are a match
var isMatch = function(cardsInPlay) {
	// if cards are a match
	if (cardsInPlay[0] === cardsInPlay[1]) {
		// display message that cards match
		alert("That's a match - +1 internets for you!");
		// increment score total by 1
		score += 1;
		// update score element with new score
		document.getElementById('score').innerHTML = "Score: " + score + " Internets";
	} else {
		// if cards do not match, display message of complete failure
		alert("Not a match... Try again!");
	}
	// if all cards have been flipped
	if (flippedCards === cards.length) {
		// tell player the game is over, and show score
		alert("Game Over! Your score is: " + score);
	}
}

// Run function to create cards. Cards are face up at first in order for player to memorize pattern
createBoard(cards.length);

// Clicking reset button flips all cards face down and sets score to 0
document.getElementById("reset").addEventListener("click", function(){
	//find all cards on the board
	var cardsInPlay = document.getElementsByClassName('card');
    //loop through each card on the board
    for (var i = 0; i < cardsInPlay.length; i++) {
   		//remove image from card (flip face down)
    	cardsInPlay[i].innerHTML = "";
    }
    // set score variable back to 0
	score = 0;
	// set score display to equal variable, which is 0
	document.getElementById('score').innerHTML = "Score: " + score + " Internets";
	// change button label after clicked
	document.getElementById('reset').innerHTML = "Flip and Reset";
});

