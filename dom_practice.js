// function myFunction1() {
// 	console.log("I've been clicked!");
// }

// document.getElementbyId("myButton")


// template:
// document.[PICKYOURSELECTOR (getElementById("[ID}"))].[addEventListener]("click", [function]);




// define function bottom

// selector = where
// addEventListen = when
// function = what you do

// getElementbyClassName
// getElementbyTagName
// querySelector
// querySelectorAll
// onPageLoad

// document.getElementById("myButton").onClick = function (){
// 	console.log("I AM CLICKED!");

// }


function greetOnLoad () {
    var name = prompt("Hi! What's your name?");
    var myelement = document.getElementById("greeting");
    for (var i = 0; i < 5; i ++){

    myelement.append("Hello " + name + ", it's nice to meet you!");
	
	}
}

greetOnLoad();


// document.getElementById("avengers").onLoad