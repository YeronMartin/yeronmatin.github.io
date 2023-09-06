import React, { useContext } from 'react'
import arrow from '../../img/WeatherApp/buttons/arrowIcon.png'
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager'

export const ArrowButton = () => {
  const {arrowButton_OnClick} = useContext(AppManagerContext);
  
  return (
    <button className='arrowButton btn' onClick={arrowButton_OnClick}>
        <img src={arrow} alt='arrow Icon'/>
    </button>
  )
}
