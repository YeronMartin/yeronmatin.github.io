import React from 'react'
import { useState } from 'react';

import {metricIcons, metrics, units} from '../../js/WeatherApp/variables'

export const MetricItem = (props) => {
  var setMetricsData;

  const [icon, setIcon] = useState(metricIcons[props.type]);
  const [metric, setMetric] = useState(metrics[props.type]);
  const [unit, setUnit] = useState(units[props.type]);
  

  return (
    <div className='MetricItem'>
        <div className='boxImg'>
            <img src={icon} alt='Metric Icon'/>
        </div>
        <div className='boxInfo'>
            <p className='value'>{props.value.toFixed(0)}<span>{unit}</span></p>
            <p className='metric'>{metric}</p>
        </div>
    </div>
  )
}
