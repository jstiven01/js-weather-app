import './css/style.scss';
import weather from './js/weather';

const submit = document.getElementById('submit');
const currentWeather = document.getElementById('current-weather');
submit.addEventListener('click', weather.getWeatherLocation);
currentWeather.addEventListener('click', (e) => {
  if (e.target.id === 'metric' || e.target.id === 'imperial') weather.getWeatherLocation(e);
});