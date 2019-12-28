const domHandler = (() => {
  let weatherDescription;
  let temperature;
  let nameCity;

  const creatingWeatherObj = (weatherData) => {
    const { weather, main, name } = weatherData;
    temperature = main;
    weatherDescription = weather;
    nameCity = name;
    console.log(weatherDescription, temperature, nameCity);
    document.getElementById('location').value = '';
  };

  const getLocationDOM = () => {
    const inputLocation = document.getElementById('location');
    return inputLocation.value;
  };

  return {
    creatingWeatherObj, getLocationDOM,
  };
})();
export default domHandler;