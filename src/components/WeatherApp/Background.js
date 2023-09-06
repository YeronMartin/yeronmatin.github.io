import React, { useContext, useEffect, useState } from 'react';
import cloud_1 from '../../img/WeatherApp/backgrounds/cloud_1.svg';
import cloud_2 from '../../img/WeatherApp/backgrounds/cloud_2.svg';
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';



export const Background = () => {
  const {windowSize} = useContext(AppManagerContext);
  const {background_state} = useContext(AppManagerContext);

  return (
    <div className={'background'+ background_state + ' background'}>
        <div className='white_background'>
          {(windowSize[0] <900 )? <img className='cloud_1' src={cloud_1} alt='cloud'/> : <img className='cloud_1' src={cloud_2} alt='cloud'/>}
              
        </div>
    </div>
    
  )
}
