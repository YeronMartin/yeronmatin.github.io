import React, { useContext } from 'react'
import { AppManagerContext } from '../../js/WeatherApp/weatherAppManager';


export const SearhForm = (props)  => {
  const {cityNames} = useContext(AppManagerContext);
  const {setCityNames} = useContext(AppManagerContext);


  const {inputText} = useContext(AppManagerContext);
  const {setInputText} = useContext (AppManagerContext);
  const {setSelectedCity} = useContext (AppManagerContext);
  const {handleSubmit} =  useContext (AppManagerContext);
  const {onChangeHandle} = useContext (AppManagerContext);

  return (
    <form className="d-flex searchForm" onSubmit={handleSubmit} >
        <input className={"form-control " + props.state}  type="search" placeholder="Write a city..." aria-label="Search" 
        value={inputText} onChange={onChangeHandle}/> 
    </form>
  )
}
