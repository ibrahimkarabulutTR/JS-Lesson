const points = [70,25,65,56,89,98,76];

const result = points.reduce((value, point) => {
	if (point > 50) {
		value++;
	}
	return value;
}, 0);
console.log(result);



const ali = [
	{name: 'Ali', point: 42},
	{name: 'Ali', point: 86},
	{name: 'Ali', point: 53},
];

const aliAverage = ali.reduce((value, index) => {
	value += index.point;
	return value;
}, 0);

console.log(aliAverage);