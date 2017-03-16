
var cards = ['ace', 'king', 'queen', 'jack', 'ten', 'joker', 'ace', 'king', 'queen', 'jack', 'ten', 'joker',];
var cardsInPlay = []; //memory game selected cards
var score = 0; // memory game score
var flippedCards = 0; // counter for number of face up cards in memory game
var blackjackCards = []; // array for blackjack deck
var cardTotal = 0; // sum of dealt blackjack cards

// Function for creating cards. Will create the number of cards passed in as parameter
var createBoard = function(a) {
	// shuffle cards with a sort function I found somewhere on the internet
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
			newCard.innerHTML = "<img src='assets/king_of_hearts2.png'>";
		} else if (newCard.getAttribute('data-card') === 'queen') {
			// queen
			newCard.innerHTML = "<img src='assets/queen_of_hearts2.png'>";
		} else if (newCard.getAttribute('data-card') === 'jack') {
			// jack
			newCard.innerHTML = "<img src='assets/jack_of_hearts2.png'>";
		} else if (newCard.getAttribute('data-card') === 'ace') {
			// ace
			newCard.innerHTML = "<img src='assets/ace_of_hearts.png'>";
		} else if (newCard.getAttribute('data-card') === 'ten') {
			// ten
			newCard.innerHTML = "<img src='assets/10_of_hearts.png'>"
		} else {
			// joker
			newCard.innerHTML = "<img src='assets/joker.png'>"

		}
		// add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
		newCard.addEventListener('click', isTwoCards)
	}
}

var isTwoCards = function() {
	// if card is not flipped (not showing card image), proceed. Nothing will happen if card is already flipped
	if (this.innerHTML === "") {
		//increment card
		flippedCards += 1;
	  // add card to array of cards in play
	  cardsInPlay.push(this.getAttribute('data-card'));
		// show the card's image (flip face up)
		if (this.getAttribute('data-card') === 'king') {
			// king
			this.innerHTML = "<img src='assets/king_of_hearts2.png'>";
		} else if (this.getAttribute('data-card') === 'queen') {
			// queen
			this.innerHTML = "<img src='assets/queen_of_hearts2.png'>";
		} else if (this.getAttribute('data-card') === 'jack') {
			// jack
			this.innerHTML = "<img src='assets/jack_of_hearts2.png'>";
		} else if (this.getAttribute('data-card') === 'ace') {
			// ace
			this.innerHTML = "<img src='assets/ace_of_hearts.png'>";
		} else if (this.getAttribute('data-card') === 'ten') {
			// ten
			this.innerHTML = "<img src='assets/10_of_hearts.png'>"
		} else {
			// joker
			this.innerHTML = "<img src='assets/joker.png'>"

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
		alert("That's a match... +1 internets for you!");
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
		alert("Game Over! You've won " + score + " Internets!");
	}
}

var resetScore = function() {
	// set score variable back to 0
	score = 0;
	// set score display to equal variable, which is 0
	document.getElementById('score').innerHTML = "Score: " + score + " Internets";
};

// clicking the New Game button reschuffles board and flips cards faceup
document.getElementById("new").addEventListener("click", function() {
	// empty the game board
	document.getElementById('game-board').innerHTML = "";
	// repopulate the board
	createBoard(cards.length);
	//change button label
	document.getElementById('reset').innerHTML = "Begin!"
	// set score back to 0
	resetScore()
});

// Clicking reset button flips all cards face down and sets score to 0
document.getElementById("reset").addEventListener("click", function() {
	//find all cards on the board
	var cardsInPlay = document.getElementsByClassName('card');
    //loop through each card on the board
    for (var i = 0; i < cardsInPlay.length; i++) {
   		//remove image from card (flip face down)
    	cardsInPlay[i].innerHTML = "";
    }
	// set number of flipped cards back to 0
	flippedCards = 0;
	// change button label after clicked
	document.getElementById('reset').innerHTML = "Reset";
});

// blackjack

// function to create deck of cards to be used for playing
var createDeck = function() {
	// create array with each card type Ace through King
	var names = ['ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
	// create array for each suit
	var suits = ['hearts','diamonds','spades','clubs'];
	// counter to be used to count number of cards
	var cnt = 0;
	// for each suit
	for (var i = 0; i < suits.length; i++) {
		// and for each card type for each suit
		for (var j = 0; j < names.length; j++) {
			var value = 10; // variable for card value to be used for adding up hand values. Defaults to 10
			// if the card is 2-10, set the value to equal the card type. Otherwise, the value remains defaulted at 10 for face cards
			if (names[j] > 0) {
				value = names[j];
			}
			// add card name, suit, image name, and value to deck array
			blackjackCards[cnt++] = [names[j], suits[i], names[j] + "_of_" + suits[i] + ".png", value];
			}
		}
		return blackjackCards;
	}

// deal two cards to player
var blackjackDeal = function() {
	// shuffle cards with a sort function I found somewhere on the internet
	blackjackCards.sort(function(a, b){return 0.5 - Math.random()});
	// For each card
	for (var i = 0; i < 2; i++){
		//Add a new div element
		var newCard = document.createElement('div');
		// with class of 'card'
		newCard.className = 'card';
		// add card image
		newCard.innerHTML = "<img src='assets/" + blackjackCards[i][2] + "'>";
		// add new element to the element with id of 'game-board'
		document.getElementById('game-board').appendChild(newCard);
		// Add card value to score total
		if (blackjackCards[i][0] === 'ace') {
			cardTotal += 11;
		} else {
			cardTotal += blackjackCards[i][3];
		}
		flippedCards += 1;
		isTwentyOne();
	}
	// display total of cards in play
	document.getElementById('blackjackScore').innerHTML = "Total: " + cardTotal;
	// hide deal button
	document.getElementById('deal').className = "hidden"
	// show hit me button
	document.getElementById('hit_me').className = ""
}

var isTwentyOne = function() {
	// if total of cards in play equals 21
	if (cardTotal === 21) {
		// player wins hand
		alert("Blackjack! You win!");
		document.getElementById("hit_me").className = "hidden";
		document.getElementById("deal").className = "";
	// otherwise, if total of cards in play is greater than 21
	} else if (cardTotal > 21) {
		// player loses hand
		alert ("Bust. Bummer :(")
		document.getElementById("hit_me").className = "hidden";
		document.getElementById("deal").className = "";
	}
}

// when memory game button is clicked
document.getElementById("memory").addEventListener("click", function() {
	// remove hidden class from memory game section to show it
	document.getElementById("memory_game").className = "";
	// add hidden class to game selection section to hide it
	document.getElementById("select_game").className = "hidden";
	// Run function to create cards. Cards are face up at first in order for player to memorize pattern
	createBoard(cards.length);
});

//when blackjack button is clicked
document.getElementById("blackjack").addEventListener("click", function() {
	// remove hidden class from blackjack game section to show it
	document.getElementById("blackjack_game").className = "";
	// add hidden class to game selection section to hide it
	document.getElementById("select_game").className = "hidden";

});

//when blackjack deal button is clicked
document.getElementById("deal").addEventListener("click", function() {
	// make sure there are no cards on the board
	document.getElementById("game-board").innerHTML = "";
	// reset card total to 0 in case it previously had a value
	cardTotal = 0;
	//run blackjackDeal function
	createDeck();
	//deal two cards to playdr
	blackjackDeal();
});

//when Hit Me button is clicked
document.getElementById("hit_me").addEventListener("click", function() {
	// Increment flipped cards counter by 1
	flippedCards += 1;
	// Create a new div element
	var newCard = document.createElement('div');
	// with class of 'card'
	newCard.className = 'card';
	// add card image
	newCard.innerHTML = "<img src='assets/" + blackjackCards[flippedCards][2] + "'>";
	// add new element to the element with id of 'game-board'
	document.getElementById('game-board').appendChild(newCard);
	// Add card value to score total
	cardTotal += blackjackCards[flippedCards][3];
	// display updated score
	document.getElementById('blackjackScore').innerHTML = "Total: " + cardTotal;
	// check score
	isTwentyOne();
});
