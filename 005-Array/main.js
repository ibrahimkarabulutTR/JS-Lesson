let names = ['Mehmet', 'Ahmet', 'Mahmut'];
console.log(names[0], names[1], names[2]);

// Combines the elements of the array by adding between them
let name = names.join(' - ');
console.log(name);

// Know the order of your query
console.log(name.indexOf('Ahmet'));
console.log(name.search('Ahmet'));

// Add the element in array
names.concat('Mustafa');

// Delete the last element
names.pop();

// Add the element in the end of array
names.push('Mustafa');

// Delete the begin element
names.shift();

// Add the element in the begin of array
names.unshift('Muhammed (S.A.V)');