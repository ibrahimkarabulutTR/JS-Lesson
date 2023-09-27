const startDate = new Date('08/15/2018 8:45:00');

const now = new Date();

const diff = now.getTime() - startDate.getTime();

console.log(diff);

const min = Math.round(diff/1000);
const hour = Math.round(min/60);
const day = Math.round(hour/24);
const year = Math.round(day/365);

console.log(`Video shooting started ${min} minutes ago`);
console.log(`Video shooting started ${hour} hour ago`);
console.log(`Video shooting started ${day} day ago`);
console.log(`Video shooting started ${year} year ago`);


const timeStamp = 164685465521;
console.log(new Date(timeStamp));