const a = callBackA => {
	let age = 24;
	callBackA(age);
}

a(function(value){
	console.log(value);
})



let student = ['Ahmet', 'Mehmet', 'Mahmut'];

// How many students are there? Hi, print.
student.forEach(function() {
	console.log('Hi')
})
// person: student name, id: row number
student.forEach(function(person, id) {
	console.log(`${id}: ${person}`);
})


// Foreach with function
const print = function(person, id) {
	console.log(`${id}: ${person}`);
}
student.forEach(print);


// Foreach Example
let menu =  ['Home', 'About', 'Gallery', 'Contact'];
const ul = document.querySelector('ul');
menu.forEach(function(item){
	ul.append(item);
})