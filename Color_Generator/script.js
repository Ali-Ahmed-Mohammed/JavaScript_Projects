
let btn = document.querySelector('button')
let h3 = document.querySelector('h3')

function changeColor() {
  let symbols = '0123456789ABCDEF'
  let color = '#'
  
  for (let index = 0; index < 6; index++) {
     color = color + symbols[Math.floor(Math.random() * 16)]
    
  }
  document.body.style.background = color

  h3.textContent = color
  h3.style.background = color
}

btn.addEventListener('click', changeColor)