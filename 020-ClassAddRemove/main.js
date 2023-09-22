document.querySelector('#p1').classList.add('first');
document.querySelector('#p3').classList.add('middle', 'paragraph');
document.querySelector('#p3').classList.remove('paragraph');
document.querySelector('#p5').classList.add('last');



// Find word and edit example
const paragraph = document.querySelectorAll('p');
let paragraphArray = [];
paragraph.forEach(index => {
  if(index.textContent.includes('error')) {
    paragraphArray = index.textContent.split(' ');
    for(var word of paragraphArray) {
      for(let i=0; i<paragraphArray.length; i++) {
        if(paragraphArray[i] == 'error'){
          paragraphArray[i] = `<span style="color:red">${paragraphArray[i]}</span>`
        }
      }
      // if(word == 'error') {
      //   word = `<span style="color:red">${word}</span>`;
      // }
    }
    index.innerHTML = paragraphArray.join(' ');
  }
})