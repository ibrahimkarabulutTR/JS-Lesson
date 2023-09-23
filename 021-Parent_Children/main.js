// > this means only main child
const allChild = document.querySelector('main > *');

const main  = document.querySelector('main');
console.log(main.children);


//Print all child
// 1.Method
for(let item of main.children) {
  console.log(item);
}

// 2.Method
Array.from(main.children).forEach(item => {
  item.classList.add('foreach-class');
})

const head = document.querySelector('h1');
console.log(head.parentElement);
console.log(head.nextElementSibling);
console.log(head.previousElementSibling);