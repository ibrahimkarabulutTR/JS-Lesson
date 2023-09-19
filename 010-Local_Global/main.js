// Global variable usable in local and global
let age=35;
console.log('Age of outside',age);

if(true) {
	// Local variables arent callable only (var) you can call
	// console.log(age); its give error

	let age=20;
	console.log(age);

	var globalAge=30;
}

console.log(globalAge);