import {days} from './variables';

var apiKey = 'f9892889e00ba696ec9d7c610b9e3f38';
var apiURL = 'https://api.openweathermap.org/data/2.5/weather?&units=metric';
var apiURL_forecast = 'https://api.openweathermap.org/data/2.5/forecast?&units=metric';

export async function checkWeather (city){
    const response = await fetch(apiURL + '&appid='+apiKey + '&q=' + city);
    var data = await response.json();
    return data;
}
export async function checkForecast (city){
    const response = await fetch(apiURL_forecast + '&appid='+apiKey + '&q=' +city);
    var data = await response.json();
    return data;
}

export async function getTemp (city){
    const response = await fetch(apiURL + '&appid='+apiKey + '&q=' +city);
    var data = await response.json();
    return data;
}


export const getMaxTempt =  function(dayOffset, forecast){
    let values = [];
    let day = new Date().getDay() + dayOffset;
    day = (day > 6)? day% 7 : day;
    let dayTxt = new Date(forecast[0].dt* 1000).getDay();

    for (let i = 0; i < forecast.length ; i++){
        if(dayTxt == day){
            values.push(forecast[i].main.temp);
        }
        dayTxt = new Date(forecast[i].dt* 1000).getDay();
    }
    return Math.max(...values).toFixed(0);
}

export const getMinTempt =  function(dayOffset, forecast){
    let values = [];
    let day = new Date().getDay() + dayOffset;
    day = (day > 6)? day% 7 : day;
    let dayTxt = new Date(forecast[0].dt* 1000).getDay();

    for (let i = 0; i < forecast.length ; i++){
        if(dayTxt == day){
            values.push(forecast[i].main.temp);
        }
        dayTxt = new Date(forecast[i].dt* 1000).getDay();
    }
    return Math.min(...values).toFixed(0);
}


export const getDay = function(i){
    let dayTxt = new Date().getDay() -1 + i;
    dayTxt = (dayTxt> 6)? dayTxt%7 : dayTxt;
    return days[dayTxt];
}

//console.log(forecastData);






