
let name = document.querySelector('#name')
let age = document.querySelector('#age')
let paragraph = document.querySelector('p')
let btn = document.querySelector('button')

btn.addEventListener('click', displayResult)

let result;

function displayResult() {
  let Name = name.value
  let Age = age.value

  paragraph.textContent = `Hello my name is ${Name}, I am ${Age} years old `

  result = paragraph
 
}