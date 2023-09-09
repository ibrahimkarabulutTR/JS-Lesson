// For global usage. No difference local & global. Variable are changeable
var firstName = 'İbrahim';
firstName = 'Halil İbrahim';

// It's have a difference local & global. Variable are changeable
let lastName = 'Karabulut';
lastName = 'Kara Bulut';

// It's have a difference local & global. Variable are not changeable
const age = 24;

// Multiple variable creation
let kindergarten = false,
		primaryEducation = true,
		secondarySchool = true,
		highSchool = true,
		universty = true;

// First variable print method. There is no space you have to add on string
console.log('Hello my name is '+firstName+' '+lastName+'. I am '+age+' years old.')

// Second variable print method.
console.log('Hello my name is',firstName,lastName,'. I am',age,'years old.')

// Third variable print method.
console.log(`Hello my name is ${firstName} ${lastName}. I am ${age} years old.`)




////////////////////////////////////////////////////////////////////////




// Undefined means no creation
let birthday;
console.log(birthday);
console.log(birthday += 5);

// Null means empty
let certificate = null;
console.log(certificate);
console.log(certificate += 5);

// Ask for type of variable
console.log(typeof certificate)

// Change the type of variable
birthday = Number(birthday)
console.log(typeof birthday)