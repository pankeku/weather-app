import { displayWeather } from './ui';

function debounce(fn, delay) {
  let timeoutID;
  return function () {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(fn, delay);
  };
}

function loadListeners() {
  document.querySelector('.search').addEventListener(
    'keypress',
    debounce(() => {
      const location = document.querySelector('.search').value;
      const currentlocation = document
        .querySelector('.location')
        .textContent.split(',')[0];

      if (location && location !== currentlocation) {
        displayWeather(location);
      }
    }, 500)
  );
}

export { loadListeners };
