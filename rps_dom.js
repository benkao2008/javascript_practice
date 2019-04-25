var hands = ["rock", "paper", "scissors"];

var playerName = prompt("Enter your name: ");

var player1 = {
	name: playerName,
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

var rock = document.getElementById("rockButton");
var paper = document.getElementById("paperButton");
var scissors = document.getElementById("scissorsButton");

rock.addEventListener("click", rockClick);
paper.addEventListener("click", paperClick);
scissors.addEventListener("click", scissorsClick);

function rockClick() {

  var computerHand = hands[parseInt(Math.random()*2)];

  console.log("You chose Rock");

  if (computerHand === "rock") {
    console.log("Computer chose ROCK! TIE!");
    alert("Computer chose ROCK! TIE!");
  } else if (computerHand === "paper") {
    console.log('Computer chose PAPER! You lose!');
    alert('Computer chose PAPER! You lose!');
    player2.score.wins ++;
  } else {
    console.log('Computer chose SCISSORS. You win!');
    alert('Computer chose SCISSORS. You win!');
    player1.score.wins ++;
  }
  scoreUpdate();
}

function paperClick() {

  var computerHand = hands[parseInt(Math.random()*2)];

  console.log("You chose Paper");

  if (computerHand === "rock") {
    console.log("Computer chose ROCK! You win!");
    alert("Computer chose ROCK! You win!");
    player1.score.wins ++;
  } else if (computerHand === "paper") {
    console.log('Computer chose PAPER! TIE!');
    alert('Computer chose PAPER! TIE!');
  } else {
    console.log('Computer chose SCISSORS. You lose!');
    alert('Computer chose SCISSORS. You lose!');
    player2.score.wins ++;
  }
  scoreUpdate();
}

function scissorsClick() {

  var computerHand = hands[parseInt(Math.random()*2)];

  console.log("You chose Scissors");

  if (computerHand === "rock") {
    console.log("Computer chose ROCK! You lose!");
    alert("Computer chose ROCK! You lose!");
    player2.score.wins ++;
  } else if (computerHand === "paper") {
    console.log('Computer chose PAPER! You win!');
    alert('Computer chose PAPER! You win!');
    player1.score.wins ++;
  } else {
    console.log('Computer chose SCISSORS. TIE!');
    alert('Computer chose SCISSORS. TIE!');
  }
  scoreUpdate();
}

function scoreUpdate() {

		result.innerHTML = player1.name + " has " + player1.score.wins + " wins" + " vs. " + player2.name + " has " + player2.score.wins + " wins"

		endGame();
}

function endGame(){

	if (player1.score.wins == 5){

		title.innerHTML = "";

		result.innerHTML = player1.name + " is the CHAMPION!";

		all_buttons.innerHTML = "";

		championship.innerHTML = "<img class='img-responsive center-block' src='http://clipart-library.com/images/8TGEdddpc.jpg' width='300' height='300'>";


	} else if (player2.score.wins == 5) {

		title.innerHTML = "";

		result.innerHTML = player2.name + " is the CHAMPION!";

		all_buttons.innerHTML = "";

		championship.innerHTML = "<img class='img-responsive center-block' src='http://clipart-library.com/images/8TGEdddpc.jpg' width='300' height='300'>";

	}


}
	
	// playUntil(player1, player2);
	


// function playUntil(arg1, arg2){
// 	var winner = null;
// 	if (arg1.score.wins > arg2.score.wins){
// 		console.log(arg1.name + " is the overall winner!!");
// 		winner = arg1;
// 	}
// 	if (arg2.score.wins > arg1.score.wins){
// 		console.log(arg2.name + " is the overall winner!!");
// 		winner = arg2
// 	}

// 	if (arg2.score.wins === arg1.score.wins){
// 		console.log("Play again! There is no winner.");
// 		winner = null;
// 	}	
// 	return winner;
// }


