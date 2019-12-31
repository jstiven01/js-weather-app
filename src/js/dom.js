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
    document.getElementById('location').value = '';
  };

  const setTempUnits = (units) => { tempUnits = units };

  const getLocation = () => {
    return document.getElementById('location').value;
  };

  const getCurrentNameDay = () => {
    const d = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayName = days[d.getDay()];
    return dayName;
  };

  const setBackgroundWeather = (code = 0) => {
    const divBackground = document.getElementById('image-container');
    const classCode = code !== 800 ? `w${code.toString()[0]}` : `w${code.toString()}`;
    divBackground.setAttribute('class', `col-6 mx-auto background-weather-${classCode}`);
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
    ulAddInfo.setAttribute('class', 'col-12 d-flex');
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

  const showMainTemperature = () => {
    const divTemperature = document.createElement('div');
    const h1Temperature = document.createElement('h1');
    const buttonMetric = document.createElement('button');
    const buttonImperial = document.createElement('button');
    
    h1Temperature.innerHTML = `${temperature.temp}`;
    buttonMetric.innerHTML = '°C';
    buttonImperial.innerHTML = '°F';
    buttonMetric.setAttribute('id', 'metric');
    buttonImperial.setAttribute('id', 'imperial');
    if (tempUnits === 'metric'){
      buttonMetric.disabled = true;
      buttonImperial.disabled = false;
    } else {
      buttonMetric.disabled = false;
      buttonImperial.disabled = true;
    }


    divTemperature.setAttribute('class', 'col-4 align-self-center text-center');
    divTemperature.appendChild(h1Temperature);
    divTemperature.appendChild(buttonMetric);
    divTemperature.appendChild(buttonImperial);

    return divTemperature;

  };

  const showWeather = (weatherData) => {
    creatingWeatherObj(weatherData);
    const parentElement = document.getElementById('current-weather');
    parentElement.innerHTML = '';
    const errorElement = document.querySelector('.alert-danger');
    if (errorElement) errorElement.remove();
    
    const divCityDay = document.createElement('div');
    const h2NameCity = document.createElement('h2');
    h2NameCity.innerHTML = nameCity;
    divCityDay.appendChild(h2NameCity);

    const h4CurrentDay = document.createElement('h4');
    h4CurrentDay.innerHTML = getCurrentNameDay();
    divCityDay.setAttribute('class', 'col-4 align-self-center text-center');
    divCityDay.appendChild(h4CurrentDay);
    parentElement.appendChild(divCityDay);

    const h4Description = document.createElement('h4');
    h4Description.innerHTML = weatherDescription[0].description;


    parentElement.appendChild(showMainTemperature());

    const divIconDescription = document.createElement('div');
    const iconWeather = document.createElement('img');
    iconWeather.alt = 'icon weather';
    iconWeather.src = urlIconWeather();
    divIconDescription.setAttribute('class', 'col-4 text-center');
    divIconDescription.appendChild(iconWeather);
    divIconDescription.appendChild(h4Description);
    parentElement.appendChild(divIconDescription);

    const divAddInfo = document.createElement('div');
    const h6Title = document.createElement('h6');
    h6Title.setAttribute('class', 'col-12');
    h6Title.innerHTML = 'Additional Info.';
    divAddInfo.appendChild(h6Title);
    divAddInfo.appendChild(showAdditionalInfo());
    parentElement.appendChild(divAddInfo);

    setBackgroundWeather(weatherDescription[0].id);
  };

  const showError = (error) => {
    const currentWeather = document.getElementById('current-weather');
    const errorElement = document.querySelector('.alert-danger');
    const parentElement = document.getElementById('form-weather');
    const divError = document.createElement('div');
    
    currentWeather.innerHTML = '';
    if (errorElement) errorElement.remove();

    divError.setAttribute('class', 'my-3 alert alert-danger');
    if (error.message === '404') {
      divError.innerHTML = 'Location no found';
    } else {
      divError.innerHTML = 'Please Try it later';
    }
    setBackgroundWeather();

    parentElement.appendChild(divError);
  };

  return {
    showWeather, getLocation, showError, setTempUnits
  };
})();
export default domHandler;