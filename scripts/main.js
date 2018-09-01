var myHeading = document.querySelector('h1');
var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var appendString = 'Mozilla is cool, but you\'re faggit, mr. ';

myHeading.textContent = 'Hello fucking World BLYAT\'!';


if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = appendString + storedName;
}

function multiply(num1, num2) {
  var result = num1 * num2;
  return result;
}

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/random_pic.jpg') {
    myImage.setAttribute('src','images/random_pic2.jpeg')
  } else {
    myImage.setAttribute('src','images/random_pic.jpg')
  }
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  var myName = prompt('Please enter your fuckin\' name, bitch!');
  localStorage.setItem('name', myName);
  myHeading.textContent = appendString + myName;
}
