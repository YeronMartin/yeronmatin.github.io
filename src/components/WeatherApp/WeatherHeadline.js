import React, { useContext } from 'react'
import { useState } from 'react';
import sunIcon from '../../img/WeatherApp/wather/sunIcon.svg';
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';


export const WeatherHeadline = () => {
  const [weather, Setweather] = useState(sunIcon);
  const {data} = useContext(AppManagerContext);
  
  return (
    <div className='row'>
      <div className='HeadLine col-12'>
          <div className='boxImg'>
              <img src={weather} alt='Headline Icon' />
          </div>
          <p className='city'>{data.weather.name}</p>
          <p className='currentTemp'>{data.weather.main.temp.toFixed(0)}<span>ºC</span></p>
      </div>
    </div>
  )
}
