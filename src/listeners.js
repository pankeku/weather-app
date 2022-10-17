import { displayWeather } from './ui';

function loadListeners() {
  document.querySelector('.search-submit').addEventListener('click', () => {
    const place = document.querySelector('.search').value;
    const currentPlace = document
      .querySelector('.place')
      .textContent.split(',')[0];
    if (place !== '' && place !== currentPlace) displayWeather(place);
    document.querySelector('.search').value = '';
  });
  document.querySelector('.search').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.querySelector('.search-submit').click();
  });
}

export { loadListeners };
