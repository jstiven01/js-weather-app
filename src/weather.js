import dom from './dom'

const weatherAPI = (() => {
    let location;
    const url = 'http://api.openweathermap.org/data/2.5/weather?q=';
    const API = 'c09b7b383de915e8d54efbee3298eb08';
    const takeLocation = (place) => {
        location = place;
    }
    const getWeatherLocation = async () => {
        console.log(setUrl());
        try {
            const response = await fetch(setUrl(), {mode: 'cors'});
            const weatherData = await response.json();
            dom.creatingWeatherObj(weatherData);
            
        } catch (error) {
            console.log({error});   
        }
    }
    const setUrl = () => {
        return `${url}${location}&appid=${API}`
    }

    return {
        takeLocation, getWeatherLocation
    }

})();

export default weatherAPI;