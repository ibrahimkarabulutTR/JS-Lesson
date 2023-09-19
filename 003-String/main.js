let text = 'Hi, My name is Ibrahim Karabulut';

// Is it have your query inside that variable
console.log(text.includes('name'));

// Length of value
console.log(text.length);

// Is that value start with your query
console.log(text.startsWith('a'));

// Is that value end with your query
console.log(text.startsWith('.'));

// Tells where the query first starts
console.log(text.indexOf('b'));

// Tells where the query last starts
console.log(text.lastIndexOf('b'));

// Tells what have in your query location
console.log(text.charAt(8));

// Tells when your query start using
console.log(text.search('name'));

// Convert your text uppercase letter or lowercase letter
console.log(text.toUpperCase(), text.toLowerCase());

// Convert your text uppercase letter or lowercase letter with your locale alphabet
console.log(text.toLocaleUpperCase('tr'), text.toLocaleLowerCase('tr'));

// Choose where to start and end the selection within the text
console.log(text.substring(5,10));
console.log(text.slice(5,10));

// Choose where to start and how many step will selection within the text
console.log(text.substr(5,10));

// Edit your variable
console.log(text.replace('name is', 'names'));

// Choose the when to divide your value and add to array
const textArray = text.split(' '); // Its will divide every space

// It will clean the beginning and end the blank of the text
console.log(text.trim());

// Choose the how many times print your value
console.log(text.repeat(3));

// Convert your variable type (string)
console.log(toString(text));

// Take to value of the variable
console.log(text.valueOf());