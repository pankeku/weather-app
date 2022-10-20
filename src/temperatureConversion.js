let preferedScale = 'celsius';

const scales = {
  celsius: {
    conversion(x) {
      return ((x - 32) * 5) / 9;
    },
    symbol: 'C',
  },

  fahrenheit: {
    conversion(x) {
      return (x * 9) / 5 + 32;
    },
    symbol: 'F',
  },
};

function switchTemperatureScales() {
  const available = Object.keys(scales);
  preferedScale = available.filter((scale) => scale !== preferedScale)[0];
}

function createTemperatureString(number, scale) {
  return `${Math.round(scale.conversion(number))} °${scale.symbol}`;
}

function getTemperatureNumbers(elements) {
  const numbers = elements.map((element) => element.textContent.split(' ')[0]);
  return numbers;
}

function getConvertedTemperature(...elements) {
  const scale = scales[preferedScale];
  const numbers = getTemperatureNumbers(elements);
  const convertedTemperature = numbers.map((value) =>
    createTemperatureString(value, scale)
  );

  return convertedTemperature;
}

export { switchTemperatureScales, getConvertedTemperature, preferedScale };
