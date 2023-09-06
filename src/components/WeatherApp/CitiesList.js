import React, { useContext } from 'react'

import { CityCard } from './CityCard'
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';


export const CitiesList = () => {

  const {currentId} = useContext(AppManagerContext);
  const {setCity_OnClick} = useContext(AppManagerContext);
  const {cityList} = useContext(AppManagerContext);
  const {cityNames} = useContext(AppManagerContext);

  const items = cityList.map((item) =>
        <li key={item.id} onClick={() => setCity_OnClick(item.city)}><CityCard data = {[item.city, item.temp]}/></li>
  );

  
  

  /*
    AddCity method get a string (a city name) and get all the data 
    related to that city. Then iitt checks if the ciity has already 
    been added to the cityList and cityNames, if not it will add it
  */
  /*const addCity = async function(c) {

    let data = await checkWeather(c);
    const str = capitalizeFirstLetter(c.toLowerCase());
    
    if (data.hasOwnProperty('weather') && !cityNames.includes(str)){
      setCityList([...cityList, {city: str, temp: data.main.temp.toFixed(0), id: currentId}]);
      setCurrentId(currentId + 1);
      setCityNames([...cityNames, str]);

    }
  } */

  


  return (
    <div className='row citiesList'>
        <div className='col-12'>
            <ul>
               {items}
            </ul>
        </div>
    </div>
  )
}
