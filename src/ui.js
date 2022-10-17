import { getDataToDisplay } from './wrapper';

async function displayWeatherData(current) {
  const date = new Date();
  document.querySelector('.description').textContent = current.description;
  document.querySelector(
    '.place',
  ).textContent = `${current.place}, ${current.country}`;
  document.querySelector('.current-date').textContent = date.toDateString();
  document.querySelector('.time').textContent = `${date.getHours()}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()}`;
  document.querySelector(
    '.temperature',
  ).textContent = `${current.temperature} °C`;
  document.querySelector(
    '.feels-like-temperature',
  ).textContent = `${current.feelsLikeTemp} °C`;
  document.querySelector('.humidity').textContent = `${current.humidity}%`;
  document.querySelector('.rain').textContent = `${current.rain} mm`;
  document.querySelector(
    '.wind-speed',
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

function displayError() {
  document.querySelector('.info').textContent = 'City not found';
}

function clear() {
  document.querySelector('.info').textContent = '';
}

async function displayWeather(place) {
  clear();
  toggleLoadingElement();

  const data = await getDataToDisplay(place);

  if (data === '404') {
    displayError();
    toggleLoadingElement();
    return;
  }
  toggleLoadingElement();

  displayWeatherData(data);
}

async function init() {
  displayWeather('Vilnius');
}

export { init, displayWeather };
