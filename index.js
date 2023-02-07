// Set Variables
const screenOutput = document.querySelector('.screen-output');
const buttons = document.querySelectorAll('button');

// Stores empty values for input
let operatorClicked = false;
let firstValue = '';
let secondValue = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    // set value to whatever button is clicked
    const value = e.target.innerText;

    // If C empty the input
    if (value === 'C') {
      screenOutput.innerText = '';
      operatorClicked = false;
      firstValue = '';
      secondValue = '';
      operator = '';
    } else if (
      value === '+' ||
      value === '-' ||
      value === '*' ||
      value === '/' ||
      value === '%'
    ) {
      operatorClicked = true;
      operator = value;
      firstValue = screenOutput.innerText;
      screenOutput.innerText = '';
    } else if (value === '=') {
      secondValue = screenOutput.innerText;
      let result;

      // Perform the calculation based on the operator
      switch (operator) {
        case '+':
          result = parseFloat(firstValue) + parseFloat(secondValue);
          break;
        case '-':
          result = parseFloat(firstValue) - parseFloat(secondValue);
          break;
        case '*':
          result = parseFloat(firstValue) * parseFloat(secondValue);
          break;
        case '/':
          result = parseFloat(firstValue) / parseFloat(secondValue);
          break;
        case '%':
          result = parseFloat(firstValue) % parseFloat(secondValue);
          break;
        default:
          result = 'Invalid input';
      }

      screenOutput.innerText = result;
    } else {
      if (operatorClicked === true) {
        screenOutput.innerText = '';
        operatorClicked = false;
      }
      screenOutput.innerText += value;
    }
  });
});
