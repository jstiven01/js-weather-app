import 'bootstrap';
import './style.scss';
import weather from './weather';

const submit = document.getElementById('submit');
submit.addEventListener('click', weather.getWeatherLocation);