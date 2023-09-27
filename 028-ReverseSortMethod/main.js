const names = ['ali', 'ahmet', 'mehmet', 'mahmut'];

// from small to large
console.log(names.sort());

// from large to small
console.log(names.reverse());



const points = [30,52,56,85,63,45,75];
points.sort();
console.log(points);

points.reverse();
console.log(points);

// thats means from large to small
points.sort((a,b) => b - a);
console.log(points);