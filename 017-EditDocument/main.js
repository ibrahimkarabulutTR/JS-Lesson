let p = document.querySelector('p');
console.log(p);

p.innerText = 'lead paragraph';

let allParagraph = document.querySelectorAll('p');
allParagraph.forEach(p => {
  console.log(p.innerText);
})

let content = document.querySelector('.content');
console.log(content);

content.innerHTML += '<div class="icerik">Testing innerHTML</div>';
content.innerText += 'Testing innerText';

// Prank Virus Code
// let icerik = document.querySelector('html')
// icerik.innerText=icerik.innerHTML