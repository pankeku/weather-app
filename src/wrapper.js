import { getCurrentWeather } from './api';

async function getWeatherData(place) {
  const currentWeatherData = await getCurrentWeather(place);
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
  const place = current.name;
  const country = current.sys.country;
  const description = current.weather[0].description;
  const temperature = current.main.temp;
  const feelsLikeTemp = current.main.feels_like;
  const humidity = current.main.humidity;
  const windSpeed = current.wind.speed;
  const rain = !current.rain ? 0 : current.rain['1h'];

  return {
    place,
    country,
    description,
    temperature,
    feelsLikeTemp,
    humidity,
    windSpeed,
    rain,
  };
}

function composed(a, b, c) {
  return async function fn(x) {
    return a(b(await c(x)));
  };
}

const displayableWeatherData = composed(
  roundNumbers,
  weatherDataWrapper,
  getWeatherData
);

function getDataToDisplay(place) {
  const data = displayableWeatherData(place);
  return data;
}

export { getDataToDisplay };