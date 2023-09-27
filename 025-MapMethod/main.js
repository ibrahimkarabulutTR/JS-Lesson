/*
const points = [70,25,65,56,89,98,76];

const newPoints = points.map(index => {
	return index + 10
});

// const newPoints = points.map(index => index + 70)
*/

const students = [
	{name: 'Ali', point: 42},
	{name: 'Fırat', point: 86},
	{name: 'Serhat', point: 53},
	{name: 'Levent', point: 25}
];

// Filter always ask is it true or false that answer just giving them
const studentsHelp = students.map(item => {
	if (item.point < 50) {
		item.point+=15;
		item.name+=('(Helped)');
		return item;
	} else {
		return item;
	}
});

for(let index of studentsHelp){
	console.log(`${index.name} -> ${index.point}`);
}