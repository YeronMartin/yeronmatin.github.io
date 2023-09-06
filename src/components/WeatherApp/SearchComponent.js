import React from 'react'
import { useState } from 'react';

import { SearhForm } from './SearhForm.js'
import { PlusButton } from './PlusButton.js';


export const SearchComponent = () => {
    var [isRotated, setIsRotated] = useState(false);
    function onClick (num){
        setIsRotated(!isRotated);
    }

  return (
    <div className='row'>
         <div className='col-12  SearchComponent'>
            {isRotated ? <SearhForm state={'hidden'}  /> : 
            <SearhForm state={'ative'}/>}
            {!isRotated ? <PlusButton state={'plusButton'} function= {onClick} /> : <PlusButton state={'XButton'} function = {onClick}/>}

        </div>
    </div>
  )
}
