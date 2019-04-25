// var hands = ["rock", "paper", "scissors"];

// function playerSelection() {

// 	var player_input = prompt("Enter rock, paper or scissors: ").toLowerCase();

// 	while (player_input.length = 0 || player_input !== "rock" && player_input !== "paper" && player_input !== "scissors") {
// 		var player_input = prompt("Invalid input. Try again").toLowerCase();

// 	}

// 	return player_input;

// }


// function result(player_choice, computer_choice) {

// 	console.log("Computer: " + computer_choice + " vs. Player: " + player_choice);

// 	if (computer_choice === player_choice) {
// 		console.log("TIE! No one wins.")
// 	} else if (player_choice === "rock" && computer_choice === "paper") {
// 		console.log("Computer wins! Paper beats Rock ");
// 	} else if (player_choice === "rock" && computer_choice === "scissors") {
// 		console.log("YOU WIN! Rock beats Scissors ");
// 	} else if (player_choice === "paper" && computer_choice === "rock") {
// 		console.log("YOU WIN! Paper beats Rock ")
// 	} else if (player_choice === "paper" && computer_choice === "scissors") {
// 		console.log("Computer wins! Scissors beats paper ")
// 	} else if (player_choice === "scissors" && computer_choice === "rock") {
// 		console.log("Computer wins! Rock beats Scissors ")
// 	} else if (player_choice === "scissors" && computer_choice === "paper") { 
// 		console.log("YOU WIN! Scissors beats Paper ")
// 	}

// }

// function playGame (player1, player2, playUntil){

// }


// var computer_choice = hands[Math.floor(Math.random()*hands.length)];	

// var player_choice = playerSelection();

// result(player_choice, computer_choice);





// Solution In Class:

var hands = ["rock", "paper", "scissors"];

function getHand(){

	var myHand = hands[parseInt(Math.random()*2)];

	return myHand
}

var player1 = {
	name: "Ben",
	score: {
		wins: 0,
		ties: 0,
		losses: 0,
	}
}

var player2 = {
	name: "AI",
	score: {
		wins: 0,
		ties: 0,
		losses: 0,
	}
}



function playRound(p1, p2){

	p1.hand = getHand();
	p2.hand = getHand();

	if (p1.hand === p2.hand){
		p1.score.ties ++;
		p2.score.ties ++;
		console.log("It's a TIE!")
	}

	if (p1.hand === "rock"){
		if (p2.hand === "paper"){
			console.log(p2.name + " WINS!");
			p2.score.wins ++;
			p1.score.losses ++;
		}
		if (p2.hand === "scissors"){
			console.log(p1.name + " WINS!");
			p1.score.wins ++;
			p2.score.losses ++;
		}
	}

	if (p1.hand === "paper"){
		if (p2.hand === "rock"){
			console.log(p1.name + " WINS!");
			p1.score.wins ++;
			p2.score.losses ++;
		}

		if (p2.hand === "scissors"){
			console.log(p2.name + " WINS!");
			p2.score.wins ++;
			p1.score.losses ++;
		}


	}

	if (p1.hand === "scissors"){
		if (p2.hand === "rock"){
			console.log(p2.name + " WINS!");
			p2.score.wins ++;
			p1.score.losses ++;
		}
		if (p2.hand === "paper"){
			console.log(p1.name + " WINS!");
			p1.score.wins ++;
			p2.score.losses ++;
		}
	}

}

function playGame() {
	// for (var i = 0; i < 5; i ++){
	// 	playRound(player1, player2)
	// }

	// playUntil(player1, player2);

	// console.log("Player 1: " + player1.score + " vs. Player 2: " + player2.score)

	while(player1.score.wins < 5 && player2.score.wins < 5){
		playRound(player1, player2)
	}

	console.log(player1.name + " has " + player1.score.wins + " wins" + " vs. " + player2.name + " has " + player2.score.wins + " wins");
	playUntil(player1, player2);
	
}

function playUntil(arg1, arg2){
	var winner = null;
	if (arg1.score.wins > arg2.score.wins){
		console.log(arg1.name + " is the overall winner!!");
		winner = arg1;
	}
	if (arg2.score.wins > arg1.score.wins){
		console.log(arg2.name + " is the overall winner!!");
		winner = arg2
	}

	if (arg2.score.wins === arg1.score.wins){
		console.log("Play again! There is no winner.");
		winner = null;
	}	
	return winner;
}

playGame();

// playUntil(player1, player2);









