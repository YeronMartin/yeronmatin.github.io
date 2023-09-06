import React from 'react'
import { ForecastItem } from './ForecastItem'

export const ForecastRow = (props) => {
    const forecastDays = [0, 1, 2, 3, 4];
    const items = forecastDays.map((day) =>
        <li key={day}><ForecastItem i={day} forecast = {props.forecast}/></li>
    );
  return (
    <div className='col-12 forecastRow'>
        <ul>{items}</ul>
    </div>
  )
}
