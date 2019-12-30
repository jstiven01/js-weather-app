/* eslint import/no-unresolved: 2 */
import 'bootstrap';
import './css/style.scss';
import weather from './js/weather';

const submit = document.getElementById('submit');
submit.addEventListener('click', weather.getWeatherLocation);