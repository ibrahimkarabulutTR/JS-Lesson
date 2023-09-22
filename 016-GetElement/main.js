let lead = document.getElementsByTagName('p');
console.log(lead);

let wrapper = document.getElementsByClassName('wrapper');
console.log(wrapper);

for(let i=0; i<wrapper.length; i++) {
  console.log(wrapper[i]);
}

for(let item of wrapper) {
  console.log(item);
}

let container = document.getElementById('container');
console.log(container);