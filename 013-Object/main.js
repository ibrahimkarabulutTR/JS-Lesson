let student = {
	name: 'İbrahim',
	surname: 'Karabulut',
	email: 'job.ibrahimkarabulut@gmail.com',
	class: 12,
	lessons: ['Math', 'Phyics', 'Chemical']
}

console.log(student);
console.log(student.name);
console.log(student['lessons']);
console.log(student.lessons[2]);
console.log(student.class);
student.class = 25;
console.log(student.class);
console.log(typeof student);


let teacher = {
	name: 'Yusuf',
	surname: 'Karabulut',
	email: 'job.ibrahimkarabulut@gmail.com',
	class: 10,
	lessons: ['Math', 'Biology', 'Software'],
	students: [
		{
			name: 'Ramazan Kalkan',
			point: 87
		},
		{
			name: 'Abdullah Ökmen',
			point: 50
		},
		{
			name: 'Cihat Eren Bilisik',
			point: 36
		}
	],
	print(){
		this.lessons.forEach((lesson, id) => {
			console.log(`${id}: ${lesson}`);
		})
	},
	// this method doesent support (this)
	print2: () => {
		console.log(teacher.name);
	},
	printArray(){
		this.students.forEach(index => {
			console.log(`${index.name} -> ${index.point}`);
		})
	}
}

console.log(teacher);

teacher.print();
teacher.print2();
teacher.printArray();