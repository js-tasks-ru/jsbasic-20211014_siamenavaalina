function highlight(table) {
	let status = table.querySelectorAll('tbody tr > td:last-child');
	for(let i = 0; i < status.length; i++){
		let statusData = status[i].getAttribute('data-available');
		if(statusData == 'true'){
			status[i].parentNode.classList.add('available'); 
		}
		else if(statusData == 'false'){
			status[i].parentNode.classList.add('unavailable'); 
		}
		else {
			status[i].parentNode.setAttribute('hidden', 'hidden'); 
		}

		let gender = table.querySelectorAll('tbody tr > td:nth-child(3)');
		for(let i = 0; i < gender.length; i++){
			if(gender[i].innerText == 'm'){
				gender[i].parentNode.classList.add('male');
			}
			else if(gender[i].innerText == 'f'){
				gender[i].parentNode.classList.add('female');
			}
		}
		let age = table.querySelectorAll('tbody tr > td:nth-child(2)');
		for(let i = 0; i < age.length; i++){
			let ageNumber = Number(age[i].innerText);
			if(ageNumber < 18){
				age[i].parentNode.style.textDecoration =  'line-through';
			}
		}
	}
}
