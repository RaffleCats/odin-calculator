function add(array) {
    return array[0] + array[1];
};

function subtract(array) {
    return array[0] - array[1];
};

function multiply(array) {
    return array[0] * array[1];
};

function divide(array) {
    return array[0] / array[1];
};

function extractUserInput() {
    return document.querySelector(".screen").textContent;
};

function processString(string) {
    return string.split(" ");
};

function displayToScreen(string) {
    document.querySelector(".screen").textContent = string;
};

function operate() {
    let userInput = extractUserInput();
    console.log(userInput);
    let operationArray = processString(userInput);
    console.log(operationArray);

    const symbol = operationArray[1];
    console.log(typeof symbol);
    const values = [parseInt(operationArray[0]), parseInt(operationArray[2])]
    console.log(values);
    
    switch (symbol) {
        case "/":
            displayToScreen(divide(values));
            break;
        case "x":
            displayToScreen(multiply(values));
            break;
        case "+":
            displayToScreen(add(values));
            break;
        case "-":
            displayToScreen(subtract(values));
            break;
        default:
            displayToScreen("ERROR");
    };
};

const screen = document.querySelector(".screen");
const buttons = document.querySelector(".buttons");

const numbers = buttons.querySelectorAll(".number");
numbers.forEach((number) => {
    number.addEventListener("click", function(event) {
        let content = event.target.textContent;
        screen.textContent += content;
    });
});

const clearButton = buttons.querySelector("#clear");
clearButton.addEventListener("click", () => {
    screen.textContent = "";
});

const operators = buttons.querySelectorAll(".operator");
operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        let content = event.target.textContent;
        screen.textContent += ` ${content} `;
    });
});

const equals = buttons.querySelector(".operate");
equals.addEventListener("click", (event) => {
    operate();
});