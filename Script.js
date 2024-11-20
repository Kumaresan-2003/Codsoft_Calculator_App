// script.js

let display = document.getElementById('display');
let currentInput = '';

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    // Prevent two operators in a row
    if (currentInput && !isNaN(currentInput.slice(-1))) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function clearDisplay() {
    currentInput = '';
    display.value = currentInput;
}

function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = "Error";
    }
}
