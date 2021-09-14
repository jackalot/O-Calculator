 add = (a, b) => {
    let sum = a + b;
    changeDisplay("=" + sum);
}
 subtract = (c, d) => {
    let remaining =  c - d;
    changeDisplay("=" + remaining);
}
 multiply = (e, f) => {
    let answer = e * f;
    changeDisplay("=" + answer);
}
 divide = (g, h) => {
    let answer =  g / h;
    changeDisplay("=" + answer);
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
    equation = display.value;
   // console.log(value);
   // console.log(equation);
}
let equation = ""; //stores the entire equation
let operatorCount = 0;
//adds an operator ie + - / *
function Operator (operator) {
    if(operatorCount === 0)
    {
        changeDisplay(operator);
        operatorCount++;

    }
    else
    {
       pressedEnter();
    }
}

function Clear()
{
    equation = "";
    display.value = "";
    operatorCount = 0;
}
function seperateEquation (equation, operatorIndex) {
    console.log(equation);
    let slice1 = equation.slice(0, operatorIndex);
    let num1 = parseFloat(slice1);
    let slice2 = equation.slice(operatorIndex + 1, equation.length);
    let num2 = parseFloat(slice2);
    let ourOperation = equation.slice(operatorIndex, operatorIndex + 1);
    console.log(ourOperation);
    operate(num1, ourOperation, num2);
}
function pressedEnter()
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