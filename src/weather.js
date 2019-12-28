import dom from './dom';

const weatherAPI = (() => {
  let location;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const API = 'c09b7b383de915e8d54efbee3298eb08';

  const setUrl = () => `${url}${location}&appid=${API}`;

  const getWeatherLocation = async () => {
    location = dom.getLocationDOM();
    if (location !== '') {
      try {
        console.log('hey', setUrl());
        const response = await fetch(setUrl(), { mode: 'cors' });
        const weatherData = await response.json();
        dom.creatingWeatherObj(weatherData);
      } catch (error) {
        console.log({ error });
      }
    }
  };

  return {
    getWeatherLocation,
  };
})();

export default weatherAPI;