const form = document.querySelector('form');
const label = document.querySelector('label');
const require = /^[a-z,A-Z,0-9,\,-,&,*,%]{8,16}$/;

// Add new element
form.addEventListener('keyup', e => {
	e.preventDefault();
	// e.require.test(form.password.value);
	if(e.target.value.search(require) >= 0) {
		label.textContent = 'your password meet the required condition';
		e.target.style.boxShadow="0 0 0 3px rgba(0,150,0,.5)";
	} else {
		label.textContent = 'your password does not meet the required condition';
		e.target.style.boxShadow="0 0 0 3px rgba(150,0,0,.5)";
	}
})
