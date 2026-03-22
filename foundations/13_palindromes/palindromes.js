const palindromes = function (str) {
    const lettersNumbers = "abcdefghijklmnopqrstuvwxyz0123456789";

    str = str.
        toLowerCase().
        split("").
        filter((char) => lettersNumbers.includes(char)).
        join("");

    let reversed = str.
        split("").
        reverse().
        join("");

    return reversed === str; 
};

// Do not edit below this line
module.exports = palindromes;
