async function fetchWeatherData(url) {
  const response = await fetch(url, {
    mode: 'cors',
  });
  const responseToJson = await response.json();

  return responseToJson;
}

function getUrl(place) {
  const apiKey = '9a40fda64112122250ff2786a779a184';
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}&units=metric`;
  return url;
}

async function getWeatherCurrent(place) {
  const result = await fetchWeatherData(getUrl(place));
  return result;
}

export { getWeatherCurrent };