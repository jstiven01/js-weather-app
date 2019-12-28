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

  const showError = (error) => {
    const parentElement = document.getElementById('form-weather');
    const divError = document.createElement('div');
    divError.setAttribute('class', 'my-3 alert alert-danger');
    divError.innerHTML = `Location ${error}`;
    parentElement.appendChild(divError);
  };

  return {
    creatingWeatherObj, getLocationUnitsDOM, showError,
  };
})();
export default domHandler;