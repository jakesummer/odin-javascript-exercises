const sumAll = function(a, b) {
    if (
        a < 0 || 
        b < 0 || 
        typeof a !== "number" || 
        typeof b !== "number" || 
        !Number.isInteger(a) || 
        !Number.isInteger(b)
    ) {
        return "ERROR";
    }

    let lower;
    let upper;

    if (a > b) {
        lower = b;
        upper = a;
    } else {
        lower = a;
        upper = b;
    }

    let sum = 0;

    for (let i = lower; i <= upper; i++) {
        sum += i;
    }

    return sum
};

// Do not edit below this line
module.exports = sumAll;
