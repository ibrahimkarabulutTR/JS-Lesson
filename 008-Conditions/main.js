let note=85;

// IF
if(note >= 75) {
	console.log('Good');
} else if(note >= 50) {
	console.log('Middle')
} else {
	console.log('Bad');
}

// Other method
let result = note >= 75 ? console.log('Good') : note >= 50 ? console.log('Middle') : console.log('Bad');

// && All conditions result have to same
// || All conditions result have to different
let x=0;
let y=1;
if(x==0 && y==1) {
	console.log('all conditions are true');
} else if(x==1 || y==1) {
	console.log('1 of true 1 of false');
}

// Just print the 18 between 28 numbers
for(let a=0; a<30; a++) {
	if(a<18) {
		continue;
	} else if(a>28) {
		continue;
	} else {
		console.log(a);
	}
}