
var cards = ['queen', 'queen', 'queen', 'king', 'king', 'king', 'jack', 'jack', 'jack', 'ace', 'ace', 'ace'];
var cardsInPlay = [];
var score = 0

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
		newCard.setAttribute('data-card', cards[i]);
		// show all cards face up
		if (newCard.getAttribute('data-card') === 'king') {
		// king
			newCard.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
		} else if (newCard.getAttribute('data-card') === 'queen') {
		// queen
			newCard.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
		} else if (newCard.getAttribute('data-card') === 'jack'){
			// jack
			newCard.innerHTML = "<img src='http://www.madore.org/~david/images/cards/english/jack-hearts.png'>";
		} else {
			// ace
			newCard.innerHTML = "<img src='http://www.cs.nyu.edu/courses/fall09/V22.0061-001/newcards/images/Ace%20of%20Hearts%201.jpg'>";
		}
		// add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
		newCard.addEventListener('click', isTwoCards)
		}
}

var isTwoCards = function() {
  // add card to array of cards in play
  cardsInPlay.push(this.getAttribute('data-card'));
	// show the card's image (flip face up)
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		// king
		this.innerHTML = "<img src='http://i.imgur.com/bnuv5Im.png'>";
	} else if (this.getAttribute('data-card') === 'queen') {
		// queen
		this.innerHTML = "<img src='http://i.imgur.com/v6buNt2.png'>";
	} else if (this.getAttribute('data-card') === 'jack'){
		// jack
		this.innerHTML = "<img src='http://www.madore.org/~david/images/cards/english/jack-hearts.png'>";
	} else {
		// ace
		this.innerHTML = "<img src='http://www.cs.nyu.edu/courses/fall09/V22.0061-001/newcards/images/Ace%20of%20Hearts%201.jpg'>";
	}
  // if you have two cards in play, check for a match
  	if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];
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
		document.getElementById('score').innerHTML = "Score: " + score
	} else {
		// if cards do not match, display message of complete failure
		alert("Not a match... Try again!");
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
	document.getElementById('score').innerHTML = "Score: " + score;
	// change button label after clicked
	document.getElementById('reset').innerHTML = "Flip and Reset";
});

