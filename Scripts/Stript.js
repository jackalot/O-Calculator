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
function changeDisplay (value) {
     display.value += value;
    console.log(value);
}
let equation = ""; //stores the entire equation
let operatorCount = 0;
//adds an operator ie + - / *
function Operator (operator) {
    if(operatorCount === 0)
    {
        equation = display.value; 
        equation += operator;
        changeDisplay(operator);
        operatorCount++;

    }
    else
    {
        //find the equations operator since its count is 1
        for(i = 0; i < equation.length; i++)
        {
            if(equation[i] === "+" || equation[i] === "-" || equation[i] === "*" || equation[i] === "/")
            {
                console.log("found operand" + equation[i]);
                seperateEquation(equation, i);
                break;
            }
        }
    }
}
function seperateEquation (equation, operatorIndex) {
let slice1 = equation.slice(0, operatorIndex);
console.log(slice1);
let slice2 = equation.slice(operatorIndex + 1, equation.length);
console.log(slice2)
}