async function fetchWeatherData(url) {
  try {
    const response = await fetch(url, {
      mode: 'cors',
    });

    if (
      !(response.headers.get('Content-Type') || '').includes('application/json')
    ) {
      throw new Error(
        'Response header "content-type" does not contain "application/json".',
      );
    }
    const responseToJson = await response.json();
    return responseToJson;
  } catch (err) {
    console.log(err);
  }
}

function getUrl(place) {
  const apiKey = '9a40fda64112122250ff2786a779a184';
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${apiKey}&units=metric`;
  url = encodeURI(url);
  return url;
}

async function getCurrentWeather(place) {
  const result = await fetchWeatherData(getUrl(place));
  return result;
}

export { getCurrentWeather };
