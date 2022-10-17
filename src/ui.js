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

async function init() {
  const data = await getDataToDisplay('London');
  displayWeatherData(data);
}

export { init };
