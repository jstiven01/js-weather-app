import 'bootstrap';
import './style.scss';
import weather from './weather';

console.log('Installing the Basic Setup');
/*
weather.takeLocation('London');
weather.getWeatherLocation();
weather.takeLocation('Bogota');
weather.getWeatherLocation();
weather.takeLocation('Nairobi');
*/
const submit = document.getElementById('submit');
submit.addEventListener('click', weather.getWeatherLocation);