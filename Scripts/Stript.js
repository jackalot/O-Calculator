 add = (a, b) => {
    return a + b;
}
 subtract = (c, d) => {
    return c - d;
}
 multiply = (e, f) => {
    return e * f;
}
 divide = (g, h) => {
    return g / h;
}

function Operate (num1, operation, num2) {
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