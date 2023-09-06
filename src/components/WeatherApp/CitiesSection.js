import React, { useContext, useEffect } from 'react'

import { CitiesList } from './CitiesList';
import { SearchComponent } from './SearchComponent';
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';



export const CitiesSection = () => {
  const {citySection_state} = useContext (AppManagerContext);

  return (
    <div className={'container-fluid citySection' + citySection_state}>

        <SearchComponent/>
        <CitiesList/>

    </div>
  )
}
