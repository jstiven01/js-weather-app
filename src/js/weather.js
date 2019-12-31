import dom from './dom';

const weatherAPI = (() => {
  let location;
  let units;
  const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
  const API = 'c09b7b383de915e8d54efbee3298eb08';

  const setUrl = () => `${url}${location}&units=${units}&appid=${API}`;

  const handleErrors = (response) => {
    if (!response.ok) throw Error(response.status);
  };

  const getWeatherLocation = async (e) => {
    if (e.target.id === 'submit') {
      dom.setTempUnits('metric');
      location = dom.getLocation();
      units = 'metric';
    } else {
      dom.setTempUnits(e.target.id);
      units = e.target.id;
    }
    if (location !== '') {
      try {
        const response = await fetch(setUrl(), { mode: 'cors' });
        handleErrors(response);
        const weatherData = await response.json();
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