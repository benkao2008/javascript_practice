// function gratuity() {

// 	var userInput = prompt("How much of a percentage you would like to tip? 10%, 20% or 30%?")

// 	if(userInput === "10%"){
// 		percentage = .10
// 	} else if (userInput === "20%"){
// 		percentage = .20
// 	} else if (userInput === "30%"){
// 		percentage = .30
// 	} else {
// 		alert("Invalid percentage!!")
// 	}

// 	var gratuityAmount = billAmount * percentage;

// 	return gratuityAmount;
// }

// function totalWithGrat() {

// 	var gratuityAmount = gratuity(billAmount);

// 	var sum = billAmount + gratuityAmount;

// 	return sum;
// }


// var billAmount = parseInt(prompt("What is your bill amount?"));

// var sum = totalWithGrat(billAmount);

// // console.log("Your total including gratuity is $" + sum.toFixed(2));

// alert("Your total including gratuity is $" + sum.toFixed(2) + "!");


// Calculator Example

var calculator = {
	add: function(a, b){
		return a + b;
	}
	subtract: function(a, b){
		return a - b;
	}
	multiply: function(a, b){
		return a * b;
	}
	divide: function(a, b){
		return a / b;
	}
}

console.log(calculator.add(5, 1));