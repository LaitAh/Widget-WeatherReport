import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './widgetWeather.scss';

const WidgetWeather = ({ zipCode, city }) => {
  const [temperature, setTemperature] = useState('-');

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${zipCode},fr&APPID=f25240e8ed09d51144008f7d19b893d4&units=metric`)
      .then((response) => {
        console.log(response);
        const temperatureFromApi =  response.data.main.temp;
        const temperatureToDisplay = temperatureFromApi.toFixed(0);
        setTemperature(temperatureToDisplay);
      }
    )},
    [city, zipCode]
  );

  return (
    <article className="weather-widget">
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