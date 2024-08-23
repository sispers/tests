

var sum = (a, b) => {
    return a + b;
};

var sub = (a, b) => {
    return a - b;
};

var mult = (a, b) => {
    return a * b;
};

var div = (a, b) => {
    return a / b;
};

var calculator = (a, b, operator) => {
    var result;
    if (operator ===`+`) {
        result = sum(a, b);
        } else if (operator === `-`) {
            result = sub(a, b);
            } else if (operator === `*`) {
                result = mult(a, b);
               } else if (operator === `/`) {
                  result = div(a, b);
                    } else {result = `error`}

    return result;
};

var operation = calculator (65, 25, `%`)
console.log(operation)