
let userInput = document.querySelector('#date');
let btn = document.querySelector('date')
let result = document.querySelector('#result')
// Helps me to hide the future date
userInput.max = new Date().toISOString().split('T')[0];



function calculateAge() {
  let birthDate = new Date(userInput.value)

  let birthDay = birthDate.getDate()
  let birthMonth = birthDate.getMonth() + 1
  let birthYear = birthDate.getFullYear()

  let today = new Date()
 
  let currentDay = today.getDate()
  let currentMonth = today.getMonth() + 1
  let currentYear = today.getFullYear()

  let differenceDay, differenceMonth, differenceYear;

  differenceDay = currentDay - birthDay
  differenceMonth = currentMonth - birthMonth
  differenceYear = currentYear - birthYear

  if (currentMonth >= birthMonth) {
    differenceMonth = currentMonth - birthMonth
  } else {
    differenceYear--
    differenceMonth = 12 + currentMonth - birthMonth
  }

  if (currentDay >= birthDay) {
    differenceDay = currentDay - birthDay
  } else {
    differenceMonth--
    differenceDay = getDaysInMonth(birthYear,birthMonth)+currentDay - birthDay
  }

  if (differenceMonth < 0) {
    differenceMonth = 11
    differenceYear--
  }

  result.textContent = `You are  ${differenceYear}  years, ${differenceMonth} months and ${differenceDay} days`
}

function getDaysInMonth() {
  return new Date(year, month, 0).getDate()
}