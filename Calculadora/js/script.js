const form = document.querySelector('form');
const result = document.getElementById('result');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const number1 = parseFloat(document.getElementById('number1').value);
  const operator = document.getElementById('operator').value;
  const number2 = parseFloat(document.getElementById('number2').value);
  let answer;
  
  switch (operator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    case '/':
      answer = number1 / number2;
      break;
    default:
    }
    result.innerHTML = "La operacion de los numeros es : " + answer;
})