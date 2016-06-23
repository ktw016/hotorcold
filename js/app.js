
$(document).ready(function() {
	
	/*--- Display information modal box ---*/
  	$('.what').click(function() {
    	$('.overlay').fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function() {
  		$('.overlay').fadeOut(1000);
  	});

  	// New game
	$('.new').click(newGame);
		
	// Ensure user supplies numeric input between 1 - 100
	$('form').submit(function(event) {
		event.preventDefault();
		if (wonGame === true){
			updateFeedback('Start a new game');
			return;
		}
		guess = +$('#userGuess').val();
		if (guess % 1 !== 0 || guess > 100 || guess < 0) {
			alert('Not a Valid Number. Please enter a whole number 1 - 100.');
		}
		else {
			handleGuess(guess);
		}

		// if (wonGame === false) {
		// 	guess = +$('#userGuess').val();
		// 	if (guess % 1 !== 0 || guess > 100 || guess < 0){
		// 		alert('Not a Valid Number');
		// 	}
		// 	else {
		// 		handleGuess(guess);
		// 	}
		// }
		// else {
		// 	updateFeedback('Start a new game.');
		// }
	});

	newGame();
});

// global variables
var secretNumber;
var guessCount;
var wonGame;

// Starts new game when page loads and button is clicked
function newGame() {
	generateNumber();
	updateGuessCount();
	wonGame = false;
	resetGuesses();	
	updateFeedback('Make your guess!');
};

// Secret number generated between 1 - 100 each time new game starts
var generateNumber = function() {
	secretNumber = Math.floor((Math.random() * 100) + 1); 
};

// Feedback
function updateFeedbackFromGuess(guess) {
	var diff = Math.abs(secretNumber - guess);
	if ( secretNumber === guess ) {
		updateFeedback('You won!');
	}
	else if ( diff > 50 ) {
		updateFeedback('Ice Cold');
	}
	else if ( diff > 30 || diff <= 50) {
		updateFeedback('Cold');
	}
	else if ( diff > 20 || diff <= 30) {
		updateFeedback('Warm');
	}
	else if ( diff > 10 || diff <= 20) {
		updateFeedback('Hot');
	}
	else if ( diff >= 1 || diff <= 10) {
		updateFeedback('Very Hot');
	}
	else {
		updateFeedback('Cold');
	}
};

// Display feedback
function updateFeedback(feedback) {
	$('#feedback').html(feedback);
};

function handleGuess(guess) {
	$('.guessBox').append('<li>' + guess + '</li>');
	updateGuessCount();
	updateFeedbackFromGuess(guess);
	clearGuessInput();
};

function updateGuessCount() {
	guessCount++;
	$('#count').text(guessCount);
};

// Clear guess text section
var clearGuessInput = function() {
	$('#userGuess').val('').focus();
};

var resetGuesses = function() {
	guessCount = 0;
	$('ul.guessBox li').remove();
 	clearGuessInput();
};
















