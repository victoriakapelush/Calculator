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
      // If no operator is selected, update the first operand
      firstOperand += element.textContent;
    } else {
      // If an operator is selected, update the second operand
      secondOperand += element.textContent;
    }
    updateScreen();
  });
});

operatorButtons.forEach(element => {
  element.addEventListener('click', function () {
    // Set the selected operator
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

equalBtn.addEventListener('click', function () {
  // Perform the calculation based on the selected operator
  const result = calculate();
  // Display the result on the screen
  screen.textContent = result;
});

function calculate() {
  // Convert operands to numbers and perform the calculation
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(secondOperand);
  switch (selectedOperator) {
    case '+':
      return num1 + num2;
    // Add more cases for other operators if needed
    default:
      return NaN; // Invalid operator
  }
}
