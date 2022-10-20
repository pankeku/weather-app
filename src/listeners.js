import { displayWeather } from './ui';

function loadListeners() {
  document.querySelector('.search-submit').addEventListener('click', () => {
    const location = document.querySelector('.search').value;
    const currentlocation = document
      .querySelector('.location')
      .textContent.split(',')[0];
    if (location && location !== currentlocation) {
      displayWeather(location);
    }
    document.querySelector('.search').value = '';
  });
  document.querySelector('.search').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') document.querySelector('.search-submit').click();
  });
}

export { loadListeners };
