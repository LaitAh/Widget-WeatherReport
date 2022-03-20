import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WidgetWeather from './components/WidgetWeather/WidgetWeather';
import ApiId from './ApiId';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <WidgetWeather
      city="Marseille"
      zipCode="13009"
      apiId={ApiId()}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
