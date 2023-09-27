const points = [70,25,65,56,89,98,76];

const firstHighPoint = points.find(point => point > 75);
console.log(firstHighPoint);


const firstHighPointPosition = points.findIndex(point => point > 75);
console.log(firstHighPointPosition);



const students = [
  {name: 'ahmet', point: 40},
  {name: 'ali', point: 60},
  {name: 'mustafa', point: 30},
  {name: 'bülent', point: 100}
]
const objectIndex = students.findIndex(student => student.name == 'bülent')
students[objectIndex].name = 'mehmet'
console.log(students)