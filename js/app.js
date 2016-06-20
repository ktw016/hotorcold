
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


// starts new game when page loads
function newGame () {

}

// secret number generated between 1 - 100 each time new game starts
function generateNumber() {
	var secretNumber = Math.floor((Math.random() * 100) + 1);
}

// feedback for each guess using div#feedback

// greater than 50 = ice gold, 30 - 50 = cold, 20 - 30 = warm, 10 - 20 = hot, 1 - 10 = very hot

function generateFeedback() {
	if ( secretNumber === userInput ) {
		winner();
	}
	else if ( i > 50 ) {
		userFeedback('Ice Cold');
	}
	else if ( i > 30 || i <= 50) {
		userFeedback('Cold');
	}
	else if ( i > 20 || i <= 30) {
		userFeedback('Warm');
	}
	else if ( i > 10 || i <= 20) {
		userFeedback('Hot');
	}
	else if ( i >= 1 || i <= 10) {
		userFeedback('Very Hot');
	}
	else {
		userFeedback('Cold');
	}
}

// "Make your guess!" text each time page loads

function guess () {

}

// track how many guesses the user has made using span#count

function numberOfGuesses () {

}

// supply list of numbers user has guessed

function numberList () {

}

// ensure user supplies numeric input between 1 - 100

function validateInput(inputNumber) {
	var isDecimalorNeg = inputNumber % 1 !==0;
	if (isDecimalorNeg) {
		displayError('Input positive whole number');
	}
	else if (isNaN(inputNumber)) {
		displayError('Input is not a number');
	}
	else if (inputNumber === 0) {
		displayError('Input cannot be 0!');
	}
	else {
		doGuess(inputNumber);
	}
}

function convertToNumber () {
	return +userInput
}

