const removeFromArray = function(arr, ...itemsToRemove) {
    let output = [];

    for (item of arr) {
        if (!itemsToRemove.includes(item)) {
            output.push(item);
        }
    }

    return output;
};

// Do not edit below this line
module.exports = removeFromArray;
