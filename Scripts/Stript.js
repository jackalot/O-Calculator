 add = (a, b) => {
    let sum = a + b;
}
 subtract = (c, d) => {
    let remaining =  c - d;
}
 multiply = (e, f) => {
    let answer = e * f;
}
 divide = (g, h) => {
    let answer =  g / h;
}
const display = document.querySelector("#display");
function operate (num1, operation, num2) {
    switch(operation)
    {
        case "+":
            add(num1, num2);
        break;
        case  "-":
            subtract(num1, num2);
        break;
        case "*":
            multiply(num1, num2);
        break;
        case "/":
            divide(num1, num2);
        break;
    }
}
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", changeDisplay(button.id));
})
function changeDisplay (id) {
     display.textContent = id;
    console.log(id);
}