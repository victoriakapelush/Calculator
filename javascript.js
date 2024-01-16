const screen = document.getElementById("screen");
const numberButtons = document.querySelectorAll('.number');
const clearBtn = document.getElementsByClassName("AC")[0];
const equalBtn = document.getElementsByClassName("equal")[0];
const operatorButtons = document.querySelectorAll(".operator");

let currentInput = '';

// Display numbers and operators on the screen
numberButtons.forEach(element => {
  element.addEventListener('click', function () {
    currentInput += element.textContent;
    updateScreen();
  });
});

operatorButtons.forEach(element => {
  element.addEventListener('click', function () {
    if (currentInput !== '') {
      // Only add the operator if there's a current input
      currentInput += ' ' + element.textContent + ' ';
      updateScreen();
    }
  });
});

// Button "AC" (clear screen)
clearBtn.addEventListener("click", clear);

function clear() {
  currentInput = '';
  updateScreen();
}

// Update the screen with the current input
function updateScreen() {
  screen.textContent = currentInput;
}

// Calculate and display result on the screen
equalBtn.addEventListener('click', function () {
  const result = calculate();
  screen.textContent = result;
  currentInput = '';
});

function calculate() {
  // Convert the currentInput string to an array of operands and operators
  const expressionArray = currentInput.split(' ');

  // Separate operands and operators
  const operands = expressionArray.filter((element, index) => index % 2 === 0);
  const operators = expressionArray.filter((element, index) => index % 2 !== 0);

  // Convert operands to numbers and perform the calculation
  let result = parseFloat(operands[0] || 0);
  for (let i = 0; i < operators.length; i++) {
    const num = parseFloat(operands[i + 1] || 0);
    switch (operators[i]) {
      case '+':
        result += num;
        break;
      case '-':
        result -= num;
        break;
      case '*':
        result *= num;
        break;
      case '/':
        result /= num;
        break;
      default:
        return NaN; // Invalid operator
    }
  }
  return result;
}
