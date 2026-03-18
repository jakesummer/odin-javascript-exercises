const convertToCelsius = function(temp) {
  let newTemp = ((5/9) * (temp - 32));

  if (Number.isInteger(newTemp)) {
    return newTemp;
  }
  return Number(newTemp.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let newTemp = ((temp * 1.8) + 32);

  if (Number.isInteger(newTemp)) {
    return newTemp;
  }
  return Number(newTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
