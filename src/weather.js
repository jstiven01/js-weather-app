import dom from './dom';

const weatherAPI = (() => {
  let location;
  let units;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const API = 'c09b7b383de915e8d54efbee3298eb08';

  const setUrl = () => `${url}${location}&units=${units}&appid=${API}`;

  const handleErrors = (response) => {
    if (!response.ok) throw Error(response.statusText);
  };

  const getWeatherLocation = async () => {
    [location, units] = dom.getLocationUnitsDOM();
    console.log(location, units);
    if (location !== '') {
      try {
        console.log('hey', setUrl());
        const response = await fetch(setUrl(), { mode: 'cors' });
        handleErrors(response);
        const weatherData = await response.json();
        // dom.creatingWeatherObj(weatherData);
        dom.showWeather(weatherData);
      } catch (error) {
        dom.showError(error);
      }
    }
  };

  return {
    getWeatherLocation,
  };
})();

export default weatherAPI;