'use strict'

const name = prompt('What is your name ?');
const nameEle = document.querySelector('.yourname');
console.log(nameEle);
nameEle.textContent = ` ${name} `;

const height = prompt('What is your height ?');
const hrightEle = document.querySelector('.yourheight');
console.log(hrightEle);
hrightEle.textContent = `Height: ${height}CM`;

const weight = prompt('What is your weight ?');
const wrightEle = document.querySelector('.yourweight');
console.log(wrightEle);
wrightEle.textContent = `Weight: ${weight}Kg`;

const theLocation = prompt('What is your location ?');
const locationEle = document.querySelector('.yourlocation');
console.log(locationEle);
locationEle.textContent = `Location: ${theLocation}`;

const maxim = prompt('What is your favorite maxim ?');
const maximEle = document.querySelector('.maxim');
console.log(maximEle);
maximEle.textContent = `${maxim}`;