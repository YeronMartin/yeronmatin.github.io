import React from 'react'
import { useState } from 'react';


import sunIcon from '../../img/WeatherApp/forecast/sunIcon_forecast.svg';
import {getDay, getMaxTempt, getMinTempt} from '../../js/WeatherApp/watherScript'

export const ForecastItem = (props) => {
 
  //const [icon, setIcon] = useState();
  const [day, setDay] = useState(getDay(props.i));
  const [maxTemp, setMaxTemp] = useState(getMaxTempt(props.i, props.forecast));
  const [minTemp, setMinTemp] = useState(getMinTempt(props.i, props.forecast));
  
  return (
    <div className='forecastItem'>
        <p className='day'>{day}</p>
        <div className='boxImg'>
            <img src= {sunIcon} alt="Forecast Item Icon"/>
        </div>
        <p>{getMaxTempt(props.i, props.forecast)}º</p>
        <p>{getMinTempt(props.i, props.forecast)}º</p>
        </div>
  )
}
