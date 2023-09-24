const ul = document.querySelector('ul');
const form = document.querySelector('form');

// Add new element
form.addEventListener('submit', e => {
	e.preventDefault();
	if(e.target.valueInput.value.length > 0){
		let value = e.target.valueInput.value;
		e.target.valueInput.value = "";
		let li = document.createElement('li');
		li.innerHTML = value+'<span class="del"></span>';
		ul.append(li);
	} else {
		alert('Content required');
	}
})

// Delete the element
ul.addEventListener('click', e => {
	e.preventDefault();
	if(e.target.className == 'del') {
		e.target.parentElement.remove();
	}
})

// x.addEventListener('keyup');
// x.addEventListener('mousemove');
// x.addEventListener('wheel');
// ...