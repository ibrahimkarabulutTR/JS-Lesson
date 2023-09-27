const now = new Date();

console.log(now);
console.log(typeof now);
console.log(`we are in ${now.getFullYear()}`);
console.log(`we are in the ${now.getMonth()}`);
console.log(`face on the ${now.getDate()} of the month`);
console.log(`face on the ${now.getDay()} of the week`);
console.log(`we are in ${now.getHours()}`);
console.log(`we are in ${now.getMinutes()}`);
console.log(`we are in ${now.getSeconds()}`);

console.log(`Time Stamp ${now.getTime()}`);
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());