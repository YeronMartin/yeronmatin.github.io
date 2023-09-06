import './css/WeatherApp/style.css';
import React from 'react';

import { CitiesSection } from './components/WeatherApp/CitiesSection';
import { DataSection } from './components/WeatherApp/DataSection';
import { Background } from './components/WeatherApp/Background';
import { AppManagerContextProvider } from './js/WeatherApp/weatherAppManager';

function AppWeather() {
  return (
    <div className='AppWeather'>
      <AppManagerContextProvider>
        <div className="App">
          <CitiesSection/>
          <DataSection/>
          <Background/>
        </div>
      </AppManagerContextProvider>
    </div>
  );
}

export default AppWeather;
