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

  const getLocationUnitsDOM = () => {
    const inputLocation = document.getElementById('location');
    const radios = document.getElementsByName('units');
    const checkedTUnits = radios[0].checked ? radios[0].value : radios[1].value;
    return [inputLocation.value, checkedTUnits];
  };

  return {
    creatingWeatherObj, getLocationUnitsDOM,
  };
})();
export default domHandler;