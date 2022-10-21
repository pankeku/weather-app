let preferedUnit = 'celsius';

const scales = {
  celsius: {
    symbol: 'C',
  },

  fahrenheit: {
    symbol: 'F',
  },
};

function convertUnits(x) {
  if (preferedUnit === 'celsius') {
    return ((x - 32) * 5) / 9;
  }

  return (x * 9) / 5 + 32;
}

function switchTemperatureScales() {
  const availableUnits = Object.keys(scales);
  preferedUnit = availableUnits.find((scale) => scale !== preferedUnit);
}

function stringifyTemperature(degree, scale) {
  return `${Math.round(convertUnits(degree))} °${scale.symbol}`;
}

function parseTemperatureData(elements) {
  const degrees = (elements || []).map(
    (element) => element.textContent.split(' ')[0]
  );
  return degrees;
}

function getConvertedTemperatures(...elements) {
  const scale = scales[preferedUnit];
  const degrees = parseTemperatureData(elements);
  const convertedTemperature = degrees.map((value) =>
    stringifyTemperature(value, scale)
  );

  return convertedTemperature;
}

export { switchTemperatureScales, getConvertedTemperatures, preferedUnit };
