$(document).ready(function() {

	var goalNumber = 0;
	var userScore = 0;
	var totalWins = 0;
	var totalLosses = 0;
	var gemOneValue = 0;
	var gemTwoValue = 0;
	var gemThreeValue = 0;
	var gemFourValue = 0;

	// Audio Sounds
	var gemOneAudio = new Audio('https://www.freesound.org/data/previews/387/387647_3905081-lq.mp3');
	var gemTwoAudio = new Audio('https://www.freesound.org/data/previews/387/387646_3905081-lq.mp3');
	var gemThreeAudio = new Audio('https://www.freesound.org/data/previews/387/387645_3905081-lq.mp3');
	var gemFourAudio = new Audio('https://www.freesound.org/data/previews/387/387644_3905081-lq.mp3');
	var gameWinner = new Audio('https://www.freesound.org/data/previews/393/393621_3905081-lq.mp3');
	var gameLoser = new Audio('https://www.freesound.org/data/previews/387/387653_3905081-lq.mp3');



	// Generates the Numbers We Need for the Game
	function numGen() {

		// Gets Random Number For Game Between 20 - 120
		function getRandomNumber() {
		goalNumber = Math.floor(Math.random() * 100 + 20);
		console.log(goalNumber);
		$('#goal-number').html(goalNumber);
		}

		// Gives GemOne Value Between 1 - 3 For Gem One
		function getGemOneValue() {
		gemOneValue = Math.floor(Math.random() * 3 + 1);
		console.log(gemOneValue);
		}

		// Gives GemTwo Value Between 4 - 6 For Gem Two
		function getGemTwoValue() {
		gemTwoValue = Math.floor(Math.random() * 3 + 4);
		console.log(gemTwoValue);
		}

		// Gives GemThree Value Between 7 - 9 For Gem Three
		function getGemThreeValue() {
		gemThreeValue = Math.floor(Math.random() * 3 + 7);
		console.log(gemThreeValue);
		}

		// Gives GemFour Value Between 10 - 12 Gem Four
		function getGemFourValue() {
		gemFourValue = Math.floor(Math.random() * 3 + 10);
		console.log(gemFourValue);
		}

		getRandomNumber();
		getGemOneValue();
		getGemTwoValue();
		getGemThreeValue();
		getGemFourValue();
	}

	numGen();


	// Adds Value of Gem One to the Total User Score
	$('#gem-one').on('click', function() {
		gemOneAudio.play();
		userScore = userScore + gemOneValue;
		console.log(userScore);
		$('#user-score').html(userScore);
		checkScore();
	});

	// Adds Value of Gem Two to the Total User Score
	$('#gem-two').on('click', function() {
		gemTwoAudio.play();
		userScore = userScore + gemTwoValue;
		console.log(userScore);
		$('#user-score').html(userScore);
		checkScore();
	});

	// Adds Value of Gem Three to the Total User Score
	$('#gem-three').on('click', function() {
		gemThreeAudio.play();
		userScore = userScore + gemThreeValue;
		console.log(userScore);
		$('#user-score').html(userScore);
		checkScore();
	});

	// Adds Value of Gem Four to the Total User Score
	$('#gem-four').on('click', function() {
		gemFourAudio.play();
		userScore = userScore + gemFourValue;
		console.log(userScore);
		$('#user-score').html(userScore);
		checkScore();
	});


	// Resets User Score and Generates New Numbers
	// at the Beginning of a New Game
	function reset() {
		userScore = 0;
		$('#user-score').html(userScore);
		numGen();
	}
	

	// Checks the User Score Against the Goal Number
	function checkScore() {
		if (userScore === goalNumber) {
			gameWinner.play();
			totalWins++;
			console.log(totalWins);
			$('#user-wins').html(totalWins);
			reset();
		}
		if (userScore > goalNumber) {
			gameLoser.play();
			totalLosses++;
			console.log(totalLosses);
			$('#user-losses').html(totalLosses);
			reset();
		}
	}

});