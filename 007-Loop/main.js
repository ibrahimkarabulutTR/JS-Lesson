// FOR
// Variable, Variable condition, Variable mission

/* First Method */
for(let x=0; x<10; x++) {
	console.log(x);
}

let names = ['Ahmet', 'Mahmut', 'Mehmet'];
for(let x1=0; x1<names.length; x1++) {
	console.log(names[x1]);
}

/* Second Method */
for(let name of names) {
	console.log(name);
}



// WHILE
let y=0;
while(y<10) {
	console.log(y);
	y++;
}

let y1=0;
while(y1<names.length) {
	console.log(names[y1]);
	y1++;
}



// DO-WHILE
let z=0;
do {
	console.log(names[z]);
	z++;
} while (z<names.length);