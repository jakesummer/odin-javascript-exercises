const fibonacci = function(num) {
    let sequence = [0, 1];

    if (num < 0) {
        return "OOPS";
    } else if (num <= 1) {
        return sequence[num];
    }

    for (let i = 2; i <= num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }

    return sequence[num];
};

// Do not edit below this line
module.exports = fibonacci;
