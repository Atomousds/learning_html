let myImage = document.querySelector('img');
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-icon.png') {
		myImage.setAttribute('src', 'images/firefox-icon.webp');
	 } else {
		myImage.setAttribute('src', 'images/firefox-icon.png');
	}
}

if(!localStorage.getItem('name')) {
	setUserName();
} else {
	let storedName = localStorage.getItem('mame');
	myHeading.textContent = 'Mozilla 酷毙了，' + sotredName;
}

function setUserName() {
	let myName = prompt('请输入你的名字。');
	if (!myName || myName === null) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = 'Mozilla 酷毙了，' + myName;
	}
}

myButton.onclick = function() {
	setUserName();
}
