import React, { useContext, useEffect } from 'react'

import { WeatherHeadline } from './WeatherHeadline';
import  {ForecastRow} from './ForecastRow'
import { ArrowButton } from './ArrowButton';
import { MetricItem } from './MetricItem'
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';


export const DataSection = () => {
    const {data} = useContext(AppManagerContext);
    const {windowSize} = useContext(AppManagerContext);
    const {dataSection_state} =  useContext(AppManagerContext);

    const returnDataSectionMobile = function(){
        return (
            <>
                <div className='row'>
                <div className='col-12 metricRow '>
                        <MetricItem type= {0} value = {data.weather.wind.speed}/>
                        <MetricItem type= {1} value = {data.weather.main.humidity}/>
                    </div>
                </div>
                <ForecastRow forecast = {data.forecast}/>
                <div className='row'>
                    <div className='col-12 metricRow '>
                        <MetricItem type= {2}  value = {data.weather.main.pressure}/>
                        <MetricItem type= {3}  value = {data.weather.visibility/1000}/>
                    </div>
                </div>
            </>
        )
    }
    const returnDataSectionDesktop = function(){
        return (
            <>
                <div className='row Datarow'>
                    <ForecastRow forecast = {data.forecast}/>
                    <div className='col-12 metricRow '>
                        <MetricItem type= {0} value = {data.weather.wind.speed}/>
                        <MetricItem type= {1} value = {data.weather.main.humidity}/>
                        <MetricItem type= {2}  value = {data.weather.main.pressure}/>
                        <MetricItem type= {3}  value = {data.weather.visibility/1000}/>
                    </div>
                </div>
            </>
        )
    }
  return (
    <div className={'container-fluid dataSection' + dataSection_state}>
        <ArrowButton/>
        <WeatherHeadline/>
        <div className='col-12 maxMin'>
            <p>Max.:{data.weather.main.temp_max.toFixed(0)}<span>º</span></p>
            <p> Min.:{data.weather.main.temp_min.toFixed(0)}<span>º</span></p>
        </div>
        {windowSize[0] < 900 ? returnDataSectionMobile() : returnDataSectionDesktop()}
    </div>
  )
}
