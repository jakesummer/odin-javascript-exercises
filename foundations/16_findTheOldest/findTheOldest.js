const findTheOldest = function(arr) {
    const currentYear = (new Date()).getFullYear();
    return arr.sort((a, b) => {
        let aAge = ("yearOfDeath" in a) ? (a.yearOfDeath - a.yearOfBirth) : (currentYear - a.yearOfBirth);
        let bAge = ("yearOfDeath" in b) ? (b.yearOfDeath - b.yearOfBirth) : (currentYear - b.yearOfBirth);
        return bAge - aAge;
    })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
