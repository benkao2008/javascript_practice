//array for each selection (selection bank)
var hands = ["rock", "paper", "scissors"];

//prompt for user's name
var playerName = prompt("Enter your name: ");

// player objects (player info bank)
var player1 = {
	name: playerName,
	score: {
		wins: 0,
		losses: 0,
	}
}

var player2 = {
	name: "AI",
	score: {
		wins: 0,
		losses: 0,
	}
}


// each button has its own addEventListener so it will know what to do when a button is clicked.

document.getElementById("rockButton").addEventListener("click", rockClick);

document.getElementById("paperButton").addEventListener("click", paperClick);

document.getElementById("scissorsButton").addEventListener("click", scissorsClick);


// in each function, when one button is clicked, computer generates a hand by randomly selecting from the array bank. after that, we compare both hands and decide who wins.

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



// innerHTML allows us to change what was on the HTML page for score update for the user to see
function scoreUpdate() {

		result.innerHTML = player1.name + " has " + player1.score.wins + " wins" + " vs. " + player2.name + " has " + player2.score.wins + " wins"

		endGame();
}



// this function is to change the HTML page to notify user that the game has ended when one of the players hit 5 wins.
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