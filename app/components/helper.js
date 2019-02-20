export function calc(number1, number2, opr) {
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch (opr) {
        case '/':
            return number1 / number2;
        case '*':
            return number1 * number2;
        case '-':
            return number1 - number2;
        case '+':
            return number1 + number2;
        case '%':
            return number1 % number2;
        case '^':
            return Math.pow(number1, number2);
    }
}

export function calc2(number1, opr) {
    number1 = parseFloat(number1);
    switch (opr) {
        case 'Sqr':
            return Math.sqrt(number1);
        case 'Sin':
            return Math.sin(number1);
        case 'Cos':
            return Math.cos(number1);
        case 'Tan':
            return Math.tan(number1);
    }
}