// RUN CODE WHEN DOCUMENT IS LOADED
$(document).ready(function() {

	// GAME VARIABLES
	var goalNumber = 0;
	var userScore = 0;
	var totalWins = 0;
	var totalLosses = 0;
	var gemOneValue = 0;
	var gemTwoValue = 0;
	var gemThreeValue = 0;
	var gemFourValue = 0;

	// AUDIO SOUNDS
	var gemOneAudio = new Audio('https://www.freesound.org/data/previews/387/387647_3905081-lq.mp3');
	var gemTwoAudio = new Audio('https://www.freesound.org/data/previews/387/387646_3905081-lq.mp3');
	var gemThreeAudio = new Audio('https://www.freesound.org/data/previews/387/387645_3905081-lq.mp3');
	var gemFourAudio = new Audio('https://www.freesound.org/data/previews/387/387644_3905081-lq.mp3');
	var gameWinner = new Audio('https://www.freesound.org/data/previews/393/393621_3905081-lq.mp3');
	var gameLoser = new Audio('https://www.freesound.org/data/previews/387/387653_3905081-lq.mp3');


	// FUNCTION TO GENERATE THE NUMBERS WE NEED FOR THE GAME
	function numGen() {

		// CREATES RANDOM NUMBER BETWEEN 20-120
		// THIS WILL BE THE GOAL NUMBER FOR THE GAME
		function getRandomNumber() {
		goalNumber = Math.floor(Math.random() * 100 + 20);
		console.log(goalNumber);
		$('#goal-number').html(goalNumber);
		}

		// CREATES RANDOM NUMBER BETWEEN 1-3 FOR GEM ONE
		function getGemOneValue() {
		gemOneValue = Math.floor(Math.random() * 3 + 1);
		console.log(gemOneValue);
		}

		// CREATES RANDOM NUMBER BETWEEN 4-6 FOR GEM TWO
		function getGemTwoValue() {
		gemTwoValue = Math.floor(Math.random() * 3 + 4);
		console.log(gemTwoValue);
		}

		// CREATES RANDOM NUMBER BETWEEN 7-9 FOR GEM THREE
		function getGemThreeValue() {
		gemThreeValue = Math.floor(Math.random() * 3 + 7);
		console.log(gemThreeValue);
		}

		// CREATES RANDOM NUMBER BETWEEN 10-12 FOR GEM FOUR
		function getGemFourValue() {
		gemFourValue = Math.floor(Math.random() * 3 + 10);
		console.log(gemFourValue);
		}

		// CALLS ALL THE RANDOM NUMBER FUNCTIONS TO EXECUTE
		getRandomNumber();
		getGemOneValue();
		getGemTwoValue();
		getGemThreeValue();
		getGemFourValue();
	}

	// CALLS NUMGEN FUNCTION TO EXECUTE
	numGen();


	// ADDS VALUE OF GEM ONE TO THE TOTAL USER SCORE
	$('#gem-one').on('click', function() {
		gemOneAudio.play();
		userScore = userScore + gemOneValue;
		console.log(userScore);
		// DISPLAYS NEW SCORE ON PAGE
		$('#user-score').html(userScore);
		checkScore();
	});

	// ADDS VALUE OF GEM TWO TO THE TOTAL USER SCORE
	$('#gem-two').on('click', function() {
		gemTwoAudio.play();
		userScore = userScore + gemTwoValue;
		console.log(userScore);
		// DISPLAYS NEW SCORE ON PAGE
		$('#user-score').html(userScore);
		checkScore();
	});

	// ADDS VALUE OF GEM THREE TO THE TOTAL USER SCORE
	$('#gem-three').on('click', function() {
		gemThreeAudio.play();
		userScore = userScore + gemThreeValue;
		console.log(userScore);
		// DISPLAYS NEW SCORE ON PAGE
		$('#user-score').html(userScore);
		checkScore();
	});

	// ADDS VALUE OF GEM FOUR TO THE TOTAL USER SCORE
	$('#gem-four').on('click', function() {
		gemFourAudio.play();
		userScore = userScore + gemFourValue;
		console.log(userScore);
		// DISPLAYS NEW SCORE ON PAGE
		$('#user-score').html(userScore);
		checkScore();
	});


	// RESETS USER SCORE AND GENERATES NEW NUMBERS
	// AT THE BEGINNING OF A NEW GAME
	function reset() {
		userScore = 0;
		$('#user-score').html(userScore);
		numGen();
	}
	

	// CHECKS THE USER SCORE AGAINST THE GOAL NUMBER
	function checkScore() {
		// ADDS TO USER WINS AND CALLS RESET FUNCTION
		// IF USER MATCHES THE EXACT GOAL NUMBER
		if (userScore === goalNumber) {
			gameWinner.play();
			totalWins++;
			console.log(totalWins);
			// DISPLAYS TOTAL WINS ON PAGE
			$('#user-wins').html(totalWins);
			reset();
		}
		// ADDS TO USER LOSSES AND CALLS RESET FUNCTION
		// IF USER GOES OVER THE GOAL NUMBER
		if (userScore > goalNumber) {
			gameLoser.play();
			totalLosses++;
			console.log(totalLosses);
			// DISPLAYS TOTAL LOSSES ON PAGE
			$('#user-losses').html(totalLosses);
			reset();
		}
	}

});