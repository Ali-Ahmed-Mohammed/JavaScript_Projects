
document.getElementById("btn").addEventListener("click", function () {

  // when i click the calculate button get the value of number1 
  let operators = document.getElementById("selectOption").value;
  let num1 = document.querySelector(".num1").value;
  let num2 = document.querySelector(".num2").value;
  let result = document.getElementById("result");

  switch (operators) {
    case "Add":
      result.innerHTML = Number(num1) + Number(num2)
      break;
    case "Subtract":
      result.innerHTML = Number(num1) - Number(num2)
      break;
    case "Multiply":
      result.innerHTML = Number(num1) * Number(num2)
      break;
    case "Divide":
      result.innerHTML = Math.round(Number(num1) / Number(num2))
      break;
  }
})


