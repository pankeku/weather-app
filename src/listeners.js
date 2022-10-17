import { displayWeather } from './ui';

function loadListeners() {
  document.querySelector('.search-submit').addEventListener('click', () => {
    const place = document.querySelector('.search').value;
    displayWeather(place);
  });
}

export {loadListeners};
