import { getDataToDisplay } from './wrapper';

async function displayWeatherData(current) {
  let date = new Date();
  document.querySelector('.description').textContent = current.description;
  document.querySelector(
    '.place'
  ).textContent = `${current.place}, ${current.country}`;
  document.querySelector('.current-date').textContent = date.toDateString();
  document.querySelector('.time').textContent = `${date.getHours()}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()}`;
  document.querySelector('.temperature').textContent = current.temperature;
  document.querySelector('.feels-like-temperature').textContent =
    current.feelsLikeTemp;
  document.querySelector('.humidity').textContent = `${current.humidity}%`;
  document.querySelector('.chance-of-rain').textContent = `${current.rain} mm`;
  document.querySelector(
    '.wind-speed'
  ).textContent = `${current.windSpeed} m/s`;
}

function toggleLoadingElement() {
  const container = document.querySelector('.container');
  const loading = document.querySelector('.loading');
  const weatherContainer = document.querySelector('.current-weather-container');
  if (loading) {
    container.removeChild(loading);
    weatherContainer.classList.toggle('current-weather-container--hidden');
    return;
  }
  weatherContainer.classList.toggle('current-weather-container--hidden');
  const waitElement = document.createElement('div');
  waitElement.classList.add('loading');
  container.append(waitElement);
}

async function displayWeather(place) {
  toggleLoadingElement();
  const data = await getDataToDisplay(place);
  toggleLoadingElement();

  displayWeatherData(data);
}

async function init() {
  displayWeather('Vilnius');
}

export { init, displayWeather };
