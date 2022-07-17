let inputField = document.getElementById('inputField');
let btn = document.getElementById('shorten');
let emptyField = document.querySelector('.addLink');
let resultContainer = document.querySelector('.resultContainer');


function zip(long, data) {
	inputField.style.border = "0px";
	emptyField.innerText = "";

	
	let result = document.createElement('div');
	result.classList.add('result');
	resultContainer.appendChild(result);

	let longLink = document.createElement('p');
	longLink.classList.add('longlink');
	result.appendChild(longLink);
	longLink.innerText = long;

	let hr = document.createElement('hr');
	hr.classList.add('hr');
	result.appendChild(hr);
	
	let answer = document.createElement('div');
	answer.classList.add('answer');
	result.appendChild(answer);

	let shortenedLink = document.createElement('a');
	shortenedLink.classList.add('shortenedLink');
	answer.appendChild(shortenedLink);
	// await 
	shortenedLink.innerText = `${data.result.short_link}`;

	let copy = document.createElement('button');
	copy.classList.add('copyButton');
	answer.appendChild(copy);
	copy.innerText = "Copy";

	copy.addEventListener('click', function(){
	navigator.clipboard.writeText(shortenedLink.innerText);
	copy.style.backgroundColor = "hsl(257, 27%, 26%)";
	copy.innerText = "Copied!";
	});
};


btn.addEventListener('click', function(){
	let inputFieldValue = inputField.value;

	if (typeof inputFieldValue === 'string' && inputFieldValue.trim().length === 0) {
		inputField.style.border = "2px solid #ff0000";
		emptyField.innerText = "Please add a link";
		btn.style.margin = "1.5rem 0rem 0rem 0rem";
	}

	else{
		btn.innerText = "Shortening...";

		fetch("https://api.shrtco.de/v2/shorten?url=" + inputFieldValue)
		.then((response) => response.json())
		.then((data) => {
			zip(inputFieldValue, data);
			btn.innerText = "Shorten it!";
		})

		.catch((error) => {
			console.log(error);
			btn.innerText = "Shorten it!";
		});
	}
});










		// .catch((error, long) => {
		// 	console.log(error);
		// 	long = "";
		// 	emptyField.innerText = "invalid URL";
		// 	btn.innerText = "Shorten it!";
		// });

	/*var result = document.createElement('div');
	result.classList.add('result-styling');
	result.innerText = inputField.value;*/