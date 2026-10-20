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