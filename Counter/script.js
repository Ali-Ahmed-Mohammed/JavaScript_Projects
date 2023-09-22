
let decrease = document.querySelector('#decrease')
let initial = document.querySelector('#initial')
let increase = document.querySelector('#increase')
let result = document.querySelector('#result')

let counter = 0

decrease.addEventListener('click', () => {
  counter--;
  result.innerHTML = counter
})

initial.addEventListener('click', () => {
  counter = 0
  result.innerHTML = counter
})

increase.addEventListener('click', () => {
  counter++;
  result.innerHTML = counter
})

