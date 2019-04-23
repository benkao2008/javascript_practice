// var car = {

// 	brand: "Tesla",
// 	model: "Model S",
// 	color: "Black",
// 	horsepower: 518,

// 	//object inside of object
// 	owner: {
// 		name: "Ben",
// 		purchase_year: 1989,
// 	},

// 	other_options: ["Model 3", "Model Y", "Model X"],
// }

// console.log(car.other_options[2])






// Addressing Objects Exercise

var course = {
	name: 'JavaScript Applications',
	awesome: true,
	teachers: ['Assaf', 'Shane'],
	students: [
		{
			name: 'Steve',
			computer: {
				OS: 'Linux',
				type: 'laptop'
			}
		},
		{
			name: 'Katy',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		},
		{
			name: 'Chuck',
			computer: {
				OS: 'OSX',
				type: 'macbook'
			}
		}

	],
	preReqs : {
		skills : ['html', 'css', 'git'],
		equipment: {
			laptop: true,
			OSOptions: ['linux', 'osx']
		}
	}
};


// 1
console.log(course.name);
// 2
console.log(course.teachers[1]);
// 3
console.log(course.students[0].name);
// 4
console.log(course.students[1].computer.type);
// 5
console.log(course.preReqs.equipment);
// 6
console.log(course.preReqs.equipment.OSOptions[1]);
// 7
console.log("OS Options are: " + course.preReqs.equipment.OSOptions.join(" or "));
// 8
// console.log([course.students[1].computer.OS, course.students[2].name]);



// Doing it the harder way

// if (course.students[0].computer.OS === "OSX") {
// 	studentOSX.push(course.students[0].name)
// } 

// if (course.students[1].computer.OS === "OSX") {
// 	studentOSX.push(course.students[1].name)
// }

// if (course.students[2].computer.OS === "OSX") {
// 	studentOSX.push(course.students[2].name)
// }

// Easier way

var studentOSX = [];

for (i = 0; i < course.students.length; i++) {
	if(course.students[i].computer.OS === "OSX"){
		studentOSX.push(course.students[i].name)
	}
	
} 

console.log(studentOSX);