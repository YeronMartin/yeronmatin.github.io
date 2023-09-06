import React, { useRef } from 'react'
import { useState, useEffect } from 'react';
import plusIcon from '../../img/WeatherApp/buttons/plusIcon.png';

export const PlusButton = (props) => {
    let buttonRef = useRef();
    
    useEffect(() => {
        let handler = (e) =>{
    
        }
        document.addEventListener('mousedown', handler);
    });

  return (
    <button className={'AddRemoveButton btn ' + props.state} onClick={props.function}>
        <div className='boxImg'>
            <img src={plusIcon} alt="Plus Icon"/>
        </div>
    </button>
  )
}
