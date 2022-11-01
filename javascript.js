const screen = document.getElementById("screen");
let number = document.querySelectorAll('.number');
const clear_btn = document.getElementsByClassName("AC")[0];
const equal = document.getElementsByClassName("equal")[0];
const operator = document.querySelectorAll(".operator")

number.forEach( element => {
  element.addEventListener('click', display);
 })

operator.forEach( element => {
  element.addEventListener('click', display);
})

function display(e) {
  const value = e.target.value;
      screen.textContent += value; 
 }

clear_btn.addEventListener("click", clear);

function clear() {
  return screen.textContent = "";
}

function calculate() {
  screen.textContent = eval(screen.textContent);
}

function percent() {

}

function changeSign() {
  
}
