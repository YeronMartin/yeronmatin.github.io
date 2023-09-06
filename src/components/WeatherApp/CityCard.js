import React from 'react'
import sunIcon from '../../img/WeatherApp/wather/sunIcon.svg';

export const CityCard = (props) => {
  return (
    <div className='CityCard'>
        <p className='city'>{props.data[0]}</p>
        <div className='cityInfo'>
            <p className='temp'>{props.data[1]}º</p>
            <div className='boxImg'>
                <img src={sunIcon} alt='City Weather Icon'/>
            </div>
        </div>
    </div>
  )
}
