const domHandler = (() => {
    let weatherDescrip;
    let temperature;

    const creatingWeatherObj = (weatherData) => {
        const {weather, main} = weatherData;
        temperature = main;
        weatherDescrip = weather;
        console.log(weatherDescrip, temperature);
    }

    return {
        creatingWeatherObj
    }

})();
export default domHandler;