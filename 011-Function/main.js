function print() {
	console.log('Hello World');
}
print();

// Function with parameter
function printer(name, surname) {
	console.log(name, surname);
}
printer('İbrahim Karabulut');

// Function with default paramter
function defaultPrinter(name='name', surname='surname'){
	console.log(name, surname);
}
defaultPrinter('İbrahim');

//Function return
const plus = function(x,y) {
	return x+y;
}
console.log(plus(5,10));

// Arrow Function
const area = value => {
	console.log(value);
}
area(10);

// if syntax are 1 row
const area1 = (value) => console.log(value);

// if you have a parameter you have to use ()
// 1 row syntax return
const area2 = (x,y) => x+y;


const name = 'Ahmet';

// Function
const namePrint = () => name;
console.log(namePrint());

// Function with method
const bigNamePrint = () => name.toUpperCase();
console.log(bigNamePrint());