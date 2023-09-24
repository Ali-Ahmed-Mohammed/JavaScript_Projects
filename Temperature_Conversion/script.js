
const btn = document.querySelector('#submit')
const textBox = document.querySelector('#text-box')
const celcius = document.querySelector('#cbtn')
const fahrenheit = document.querySelector('#fbtn')
const result = document.querySelector('h3');
const reset = document.querySelector('#reset')



btn.addEventListener('click', function () {
  let temperature;
  if (celcius.checked) {
    temperature = textBox.value;
    temperature = Number(temperature);
    temperature = toCelsius(temperature)
    result.textContent = temperature + ' °C'
    
} else if (fahrenheit.checked) {
    temperature = textBox.value;
    temperature = Number(temperature);
    temperature = toFahrenheit(temperature)

    result.textContent = temperature + ' ℉'
} else
    result.textContent = "Please Select a unit"

  result.style.backgroundColor = '#fff'
  result.style.padding = '8px'
  result.style.borderRadius = '8px'
})

function toFahrenheit(temperature) {
  return Math.round(temperature * 9/5 + 32)
}

function toCelsius(temperature) {
  return Math.round((temperature - 32) * (5/9))
}

