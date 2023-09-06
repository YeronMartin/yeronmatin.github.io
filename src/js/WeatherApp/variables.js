import windIcon from '../../img/WeatherApp/metrics/windIcon.svg';
import humidity from '../../img/WeatherApp/metrics/humidityIcon.svg';
import pressure from '../../img/WeatherApp/metrics/pressureIcon.svg';
import visibility from '../../img/WeatherApp/metrics/visibilityIcon.svg';

//Variable declarations
export let weatherIcons = [];
export let forecastIcons = [];
export let metricIcons = [windIcon, humidity, pressure, visibility];
export let metrics = ['Wind Speed', 'Humidity', 'Pressure' , 'Visibility'];
export let units = ['km/h', '%', 'mb', 'km'];
export let days = ['Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const capitalizeFirstLetter = function (str){
    const str2 = str.charAt(0).toUpperCase() + str.slice(1);
    return str2;
}


