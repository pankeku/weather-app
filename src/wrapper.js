import { getCurrentWeather } from './api';

async function getWeatherData(location) {
  const currentWeatherData = await getCurrentWeather(location);
  return currentWeatherData;
}

function roundNumbers(data) {
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'number') {
      data[key] = Math.round(value);
    }
  }
  return data;
}

function weatherDataWrapper(current) {
  const { name, sys, main, weather, wind, rain } = current;

  return {
    location: name,
    country: sys.country,
    description: weather[0].description,
    temperature: main.temp,
    feelsLikeTemp: main.feels_like,
    humidity: main.humidity,
    windSpeed: wind.speed,
    precipitation: !rain ? 0 : current.rain['1h'],
  };
}

function checkErrors(data) {
  if (data.cod === '404') {
    return '404';
  }
  return data;
}

function compose(roundNums, wrapData, checkErrs, getData) {
  return async function fn(location) {
    const getDataResult = await getData(location);
    const validData = checkErrs(getDataResult);
    if (validData === '404') {
      return '404';
    }
    const wrappedData = wrapData(validData);
    const result = roundNums(wrappedData);

    return result;
  };
}

const displayableWeatherData = compose(
  roundNumbers,
  weatherDataWrapper,
  checkErrors,
  getWeatherData
);

function getDataToDisplay(location) {
  const data = displayableWeatherData(location);
  return data;
}

export { getDataToDisplay };
