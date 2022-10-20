import { getDataToDisplay } from './wrapper';

function displayWeatherData(current) {
  const date = new Date();
  document.querySelector('.description').textContent = current.description;
  document.querySelector(
    '.location'
  ).textContent = `${current.location}, ${current.country}`;
  document.querySelector('.current-date').textContent = date.toDateString();
  document.querySelector('.time').textContent = `${date.getHours()}:${
    date.getMinutes() < 10 ? '0' : ''
  }${date.getMinutes()}`;
  document.querySelector(
    '.temperature'
  ).textContent = `${current.temperature} °C`;
  document.querySelector(
    '.feels-like-temperature'
  ).textContent = `${current.feelsLikeTemp} °C`;
  document.querySelector('.humidity').textContent = `${current.humidity}%`;
  document.querySelector('.rain').textContent = `${current.precipitation} mm`;
  document.querySelector(
    '.wind-speed'
  ).textContent = `${current.windSpeed} m/s`;
}

function toggleLoadingElement() {
  const container = document.querySelector('.container');
  const loading = document.querySelector('.loading-container');
  const weatherContainer = document.querySelector('.current-weather-container');
  if (loading) {
    container.removeChild(loading);
    weatherContainer.classList.toggle('current-weather-container--hidden');
    return;
  }
  weatherContainer.classList.toggle('current-weather-container--hidden');

  const loadingContainer = document.createElement('div');
  loadingContainer.classList.add('loading-container');

  const loadingElement = document.createElement('div');
  loadingContainer.append(loadingElement);
  loadingElement.classList.add('loading');
  container.insertBefore(loadingContainer, container.firstChild);
}

function displayError() {
  document.querySelector('.info').textContent = 'City not found';
}

function clear() {
  document.querySelector('.info').textContent = '';
}

async function displayWeather(location) {
  clear();
  toggleLoadingElement();

  const data = await getDataToDisplay(location);

  if (data === '404') {
    displayError();
    toggleLoadingElement();
    return false;
  }
  toggleLoadingElement();

  displayWeatherData(data);
  return true;
}

function init() {
  displayWeather('Vilnius');
}

export { init, displayWeather };
