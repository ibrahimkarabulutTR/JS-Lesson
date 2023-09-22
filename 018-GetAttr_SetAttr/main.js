const link = document.querySelector('a');
console.log(link);

link.textContent += ' -> Convert -> Google link';
link.setAttribute('href', 'https://www.google.com.tr/');

console.log(link.getAttribute('href'));
console.log(link.getAttribute('class'));
link.setAttribute('class', 'google');
link.setAttribute('style', 'color:red');
console.log(link.getAttribute('class'));

// const timeOut = setTimeOut(function(){}, 5000);