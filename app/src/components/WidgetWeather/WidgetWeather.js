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

  let color;
  function backgrounColor(color) {
    if (temperature > 32) return color = 'high5';
    if (temperature <=32 && temperature > 29) return color = 'high4';
    if (temperature <= 29 && temperature > 26) return color = 'high3';
    if (temperature <= 26 && temperature > 23) return color = 'high2';
    if (temperature <= 23 && temperature > 20) return color = 'high1';
    if (temperature <= 20 && temperature > 17) return color = 'medium5';
    if (temperature <= 17 && temperature > 14) return color = 'medium4';
    if (temperature <= 14 && temperature > 11) return color = 'medium3';
    if (temperature <= 11 && temperature > 8) return color = 'medium2';
    if (temperature <= 8 && temperature > 5) return color = 'medium1';
    if (temperature <= 5 && temperature > 2) return color = 'low5';
    if (temperature <= 2 && temperature > -1) return color = 'low4';
    if (temperature <= -1 && temperature > -4) return color = 'low3';
    if (temperature <= -4 && temperature > -7) return color = 'low2';
    if (temperature <= -7) return color = 'low1';
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