/*
const points = [70,25,65,56,89,98,76];

const studentsPassed = points.filter(index => {
	return index > 70
});

// const studentsPassed = points.filter(index => index > 70)
*/

const students = [
	{name: 'Ali', passed: true},
	{name: 'Fırat', passed: false},
	{name: 'Serhat', passed: true},
	{name: 'Levent', passed: false}
];

// Filter always ask is it true or false that answer just giving them
const passedStudents = students.filter(item => item.passed);
console.log(passedStudents);