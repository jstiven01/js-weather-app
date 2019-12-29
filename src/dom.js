const domHandler = (() => {
  let weatherDescription;
  let temperature;
  let nameCity;
  let tempUnits;


  const creatingWeatherObj = (weatherData) => {
    const { weather, main, name } = weatherData;
    temperature = main;
    weatherDescription = weather;
    nameCity = name;
    console.log(weatherDescription, temperature, nameCity, weatherData);
    document.getElementById('location').value = '';
  };

  const getLocationUnitsDOM = () => {
    const parentElement = document.getElementById('current-weather');
    parentElement.innerHTML = '';
    const inputLocation = document.getElementById('location');
    const radios = document.getElementsByName('units');
    const checkedTUnits = radios[0].checked ? radios[0].value : radios[1].value;
    tempUnits = checkedTUnits;
    return [inputLocation.value, checkedTUnits];
  };

  const getCurrentNameDay = () => {
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[d.getDay()];
    return dayName;
  };

  const urlIconWeather = () => {
    const urlIcon = 'http://openweathermap.org/img/wn/';
    return `${urlIcon}${weatherDescription[0].icon}@2x.png`;
  };

  const showUnits = (weatherParam) => {
    switch (weatherParam) {
      case 'pressure': return 'hPA';
      case 'humidity': return '%';
      case 'imperial': return '°F';
      case 'metric': return '°C';
      default:
        return '';
    }
  };

  const showAdditionalInfo = () => {
    const ulAddInfo = document.createElement('ul');
    const h5Title = document.createElement('h5');
    h5Title.innerHTML = 'Additional Info.';
    ulAddInfo.appendChild(h5Title);
    ulAddInfo.setAttribute('class', 'col-6');
    let unitsInfo;
    for (let i = 1; i < 6; i += 1) {
      const li = document.createElement('li');
      unitsInfo = showUnits(Object.keys(temperature)[i]);
      if (unitsInfo === '') unitsInfo = showUnits(tempUnits);
      li.innerHTML = `${Object.keys(temperature)[i].replace(/_/g, ' ')}: ${Object.values(temperature)[i]} ${unitsInfo}`;
      ulAddInfo.appendChild(li);
    }
    return ulAddInfo;
  };

  const showWeather = (weatherData) => {
    creatingWeatherObj(weatherData);
    const parentElement = document.getElementById('current-weather');
    const errorElement = document.querySelector('.alert-danger');
    if (errorElement) errorElement.remove();
    // Name city
    const h2NameCity = document.createElement('h2');
    h2NameCity.setAttribute('class', 'col-12');
    h2NameCity.innerHTML = nameCity;
    parentElement.appendChild(h2NameCity);
    // Current Day
    const h4CurrentDay = document.createElement('h4');
    h4CurrentDay.setAttribute('class', 'col-12');
    h4CurrentDay.innerHTML = getCurrentNameDay();
    parentElement.appendChild(h4CurrentDay);
    // Description weather
    const h4Description = document.createElement('h4');
    h4Description.innerHTML = weatherDescription[0].description;
    // Temperature
    const h2Temperature = document.createElement('h2');
    h2Temperature.setAttribute('class', 'col-2 d-flex flex-column align-self-center');
    h2Temperature.innerHTML = `${temperature.temp}${showUnits(tempUnits)}`;
    h2Temperature.appendChild(h4Description);
    parentElement.appendChild(h2Temperature);
    // icon weather
    const iconWeather = document.createElement('img');
    iconWeather.setAttribute('class', 'col-2');
    iconWeather.alt = 'icon weather';
    iconWeather.src = urlIconWeather();
    parentElement.appendChild(iconWeather);


    // Additional Info
    parentElement.appendChild(showAdditionalInfo());
  };

  const showError = (error) => {
    const errorElement = document.querySelector('.alert-danger');
    if (errorElement) errorElement.remove();
    const parentElement = document.getElementById('form-weather');
    const divError = document.createElement('div');
    divError.setAttribute('class', 'my-3 alert alert-danger');
    divError.innerHTML = `Location ${error}`;
    parentElement.appendChild(divError);
  };

  return {
    showWeather, getLocationUnitsDOM, showError,
  };
})();
export default domHandler;