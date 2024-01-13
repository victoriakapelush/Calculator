const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll('.number');
const clearBtn = document.getElementsByClassName("AC")[0];
const equalBtn = document.getElementsByClassName("equal")[0];
const operatorButtons = document.querySelectorAll(".operator");

let firstOperand = '';
let secondOperand = '';
let selectedOperator = null;

// Display numbers and operators on the screen
numberButtons.forEach(element => {
  element.addEventListener('click', function () {
    if (selectedOperator === null) {
      firstOperand += element.textContent;
    } else {
      secondOperand += element.textContent;
    }
    updateScreen();
  });
});

operatorButtons.forEach(element => {
  element.addEventListener('click', function () {
    selectedOperator = element.textContent;
    updateScreen();
  });
});

// Button "AC" (clear screen)
clearBtn.addEventListener("click", clear);

function clear() {
  firstOperand = '';
  secondOperand = '';
  selectedOperator = null;
  updateScreen();
}

function updateScreen() {
  // Update the screen with the current operands and operator
  screen.textContent = firstOperand + (selectedOperator ? ' ' + selectedOperator + ' ' + secondOperand : '');
}

// Calculate and display result on the screen
equalBtn.addEventListener('click', function () {
  const result = calculate();
  screen.textContent = result;
});

function calculate() {
  // Convert operands to numbers and perform the calculation
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);
  switch (selectedOperator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    default:
      return NaN; // Invalid operator
  }
}
