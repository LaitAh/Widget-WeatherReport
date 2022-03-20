![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![SAAS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white) 

# :sun_with_face: Widget - WeatherReport
Created with Create React App and Open Weather Map API

A widget that displays the current temperature (in celsius degree) of a city

⚠️:warning: To be able to use this widget, you must first create an account on [OpenWeatherApp](https://home.openweathermap.org/users/sign_up). Then, you will receive an API key by email.
You will need to create an `ApiId.js` file in the `src` folder. Your `ApiId.js` file should look like this, and between the backticks you will have to put your API key:
```js
const ApiId = () => {
  const apiId = 'YourAPIkey';

  return apiId;
}

export default ApiId;
```

### :new_moon_with_face: Next update :

- Add a form to make the city dynamic
- ~~Change widget design based on temperature~~
