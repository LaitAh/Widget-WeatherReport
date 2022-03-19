import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WidgetWeather from './components/WidgetWeather/WidgetWeather';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WidgetWeather
      city="Clermont-Ferrand"
      zipCode="63000"
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
