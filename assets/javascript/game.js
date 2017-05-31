$(document).ready(function() {

	var goalNumber = 0;
	var userScore = 0;
	var totalWins = 0;
	var totalLosses = 0;
	var gemOneValue = 0;
	var gemTwoValue = 0;
	var gemThreeValue = 0;
	var gemFourValue = 0;




	function getRandomNumber() {
		goalNumber = Math.floor(Math.random() * 100 + 20);
		console.log(goalNumber);
	}



	function getGemOneValue() {
		gemOneValue = Math.floor(Math.random() * 3 + 1);
		console.log(gemOneValue);
	}

	function getGemTwoValue() {
		gemTwoValue = Math.floor(Math.random() * 3 + 4);
		console.log(gemTwoValue);
	}

	function getGemThreeValue() {
		gemThreeValue = Math.floor(Math.random() * 3 + 7);
		console.log(gemThreeValue);
	}

	function getGemFourValue() {
		gemFourValue = Math.floor(Math.random() * 3 + 10);
		console.log(gemFourValue);
	}



	$('#gem-one').on('click', function() {
		userScore = userScore + gemOneValue;
		console.log(userScore);
		$('#user-score').html(userScore);
	});


	$('#gem-two').on('click', function() {
		userScore = userScore + gemTwoValue;
		console.log(userScore);
		$('#user-score').html(userScore);
	});


	$('#gem-three').on('click', function() {
		userScore = userScore + gemThreeValue;
		console.log(userScore);
		$('#user-score').html(userScore);
	});


	$('#gem-four').on('click', function() {
		userScore = userScore + gemFourValue;
		console.log(userScore);
		$('#user-score').html(userScore);
	});



	
	if (userScore === goalNumber) {
		totalWins = totalWins++;
		$('#user-wins').html(totalWins);
	}


	if (userScore > goalNumber) {
		totalLosses++;
		$('#total-losses').html(totalLosses);
	}




	getRandomNumber();
	getGemOneValue();
	getGemTwoValue();
	getGemThreeValue();
	getGemFourValue();

	$('#goal-number').html(goalNumber);
	$('#user-wins').html(totalWins);


});