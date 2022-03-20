import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './widgetWeather.scss';

const WidgetWeather = ({ zipCode, city }) => {
  const [temperature, setTemperature] = useState('-');

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},fr&APPID=f25240e8ed09d51144008f7d19b893d4&units=metric`)
    // To get the temperature in Fahrenheit, remove '&units=metric'
      .then((response) => {
        console.log(response);
        const temperatureFromApi =  response.data.main.temp;
        const temperatureToDisplay = temperatureFromApi.toFixed(0);
        setTemperature(temperatureToDisplay);
      }
    )},
    [city, zipCode]
  );

  // Background color changes depending on the temperature
  let color;
  function backgrounColor(color) {
    if (temperature > 32) color = 'high5';
    else if (temperature <=32 && temperature > 29) color = 'high4';
    else if (temperature <= 29 && temperature > 26) color = 'high3';
    else if (temperature <= 26 && temperature > 23) color = 'high2';
    else if (temperature <= 23 && temperature > 20) color = 'high1';
    else if (temperature <= 20 && temperature > 17) color = 'medium5';
    else if (temperature <= 17 && temperature > 14) color = 'medium4';
    else if (temperature <= 14 && temperature > 11) color = 'medium3';
    else if (temperature <= 11 && temperature > 8) color = 'medium2';
    else if (temperature <= 8 && temperature > 5) color = 'medium1';
    else if (temperature <= 5 && temperature > 2) color = 'low5';
    else if (temperature <= 2 && temperature > -1) color = 'low4';
    else if (temperature <= -1 && temperature > -4) color = 'low3';
    else if (temperature <= -4 && temperature > -7) color = 'low2';
    else if (temperature <= -7) color = 'low1';
    return color;
  }

  return (
    <article className="weather-widget" id={backgrounColor(color)}>
      <div className="weather-container">
        <div className="weather-infos">
          <h3 className="weather-city">
            {city}
          </h3>
          <p className="weather-zipcode">
            {zipCode}
          </p>
        </div>
        <div className="weather-temperature">
          {temperature}°C
        </div>
      </div>
    </article>
  );
} 

WidgetWeather.propTypes = {
  zipCode: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
}

export default WidgetWeather;