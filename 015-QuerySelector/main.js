let lead = document.querySelector('div.lead'),
    wrapper = document.querySelector('.wrapper'),
    container = document.querySelector('#container');

lead.innerHTML += 'This is a lead DIV';

console.log(lead);

let allQuery = document.querySelectorAll('div');
// console.log(allQuery);
// console.log(allQuery[1]);

allQuery.forEach(print => {
  console.log(print);
})