
import { useState, useContext, useEffect } from 'react';
import React from 'react'
import { checkWeather, checkForecast } from './watherScript';
import { capitalizeFirstLetter } from './variables';

export const AppManagerContext = React.createContext();

export function AppManagerContextProvider (props) {

    /* VARIABLES */
    //Global
    const [windowSize, setWindowSize] = useState([window.innerWidth, window.innerHeight,]);
    const [inputText, setInputText] = useState ('');
    const [selectedCity, setSelectedCity] = useState('');
    const [isRotated, setIsRotated] = useState(false);

    //States
    const [citySection_state, setCitySection_state] = useState ('Active');
    const [dataSection_state, setDataSection_state] = useState ('Active');
    const [background_state, setBackground_state] = useState('Down');

    //Data
    const [data, setData] = useState({
        weather: {
            name: '', 
            main: {
                humidity: 0,
                pressure: 0, 
                temp: 0.00,
                temp_max: 0.00,
                temp_min: 0.00 
            },
            visibility: 0,
            wind: {speed: 0}
        },
        forecast : [{
            dt : 1688245200,
            main :{
                temp: 0
            }
        }]
    });

    //City List
    const [currentId, setCurrentId] = useState(2);
    const [cityList, setCityList] = useState ([{city: 'Madrid', temp: 0, id:0}, 
    {city: 'London', temp: 0, id:1}]);
    const [cityNames, setCityNames] = useState(['Madrid', 'London']);

    /* FUNCTIONS */
    //Buttons
    const arrowButton_OnClick = function(){
        setSelectedCity('');
        setData(({
          weather: {
            name: '', 
            main: {
              humidity: 0,
              pressure: 0, 
              temp: 0.00,
              temp_max: 0.00,
              temp_min: 0.00 
            },
            visibility: 0,
            wind: {speed: 0}
          },
          forecast : [{
            dt : 1688245200,
            main :{
              temp: 0
            }
          }]
        }));
    }

    const addCity = async function(c) {
        const str = capitalizeFirstLetter(c.toLowerCase());
        
        if (!cityNames.includes(str) && str != ''){
            const data = await checkWeather(c);
            if (data.hasOwnProperty('weather') ){
                setCityList([...cityList, {city: str, temp: data.main.temp.toFixed(0), id: currentId}]);
                setCurrentId(currentId + 1);
                setCityNames([...cityNames, str]);
                setSelectedCity(str);
            }
        }else{
            setInputText('');
        }
    }

    /*
        This method wraps the addCity async method
    */
    const addCityWrapper =  async function () {
        addCity(inputText);
      }

    /*
    This meethod refresh all the city data
   */
    const refreshWeather = async function() {
        setCityList([]);
        let arr = []
        for (let i = 0; i< cityNames.length; i++){
        var data = (await checkWeather(cityNames[i]));;
        arr.push({city: data.name, temp: data.main.temp.toFixed(0), id:i});
        }
        setCityList([...arr]);
    } 

    const setCity_OnClick = function (city) {  
        selectCity(city)
      }

    const handleSubmit =  function(e) {
        // Prevent the browser from reloading the page
        e.preventDefault();
        addCity(inputText);
      } 

      const onChangeHandle = function (e) {
        setInputText(e.target.value);
        
      };

    //Data 
    const getData= async function(city){
        const dat = await checkWeather(city);
        const forecast = await checkForecast(city)
        setData({
          ...data, // copy the current properties of "json"
          weather: {
            name: dat.name,
            main: {
              humidity: dat.main.humidity,
              pressure: dat.main.pressure, 
              temp: dat.main.temp,
              temp_max: dat.main.temp_max,
              temp_min: dat.main.temp_min 
            },
            visibility: dat.visibility,
            wind: {
              speed: dat.wind.speed
            }
          },
          forecast : forecast.list
        });
    }

    const selectCity = function (city){
        setSelectedCity(city);
    }
    
    /* USE EFFECTS */
    useEffect(() => {
        const handleWindowResize = () => {
          setWindowSize([window.innerWidth, window.innerHeight]);
        };
    
        window.addEventListener('resize', handleWindowResize);
        if (windowSize[0] > 900){
            setCitySection_state('Active');
            if (selectedCity == ''){
                selectCity (cityNames[0]);
            }
        }else{
            if (dataSection_state == 'Active' && citySection_state == 'Active'){
                setDataSection_state('Hidden');
                setBackground_state('Down');
            }
        }
    
        return () => {
          window.removeEventListener('resize', handleWindowResize);
        };
      }, [windowSize]);
     
      useEffect (() => {
        if(selectedCity != ''){
            getData(selectedCity); 
            setInputText('');
            addCityWrapper();
        }
      }, [selectedCity]);

      useEffect (() => {
        if (windowSize[0] < 900){
            (selectedCity == '') ?  setCitySection_state('Active') :  setCitySection_state('Hidden');
            (data.weather.name != '') ? setBackground_state('Up') : setBackground_state('Down');
            (selectedCity != '') ?  setDataSection_state('Active') :  setDataSection_state('Hidden');
        }
      }, [data]);

    /*
        When cciityNames' value changes it refresh
    */
    useEffect(() => {
        refreshWeather();
    }, [cityNames]);



    return (
        <>
            <AppManagerContext.Provider value={{windowSize, inputText, data, setData, setInputText, addCity, selectedCity, setSelectedCity, cityList,
            citySection_state, dataSection_state, isRotated, setIsRotated, background_state, arrowButton_OnClick, setCity_OnClick, handleSubmit, onChangeHandle}}>
                {props.children}
            </AppManagerContext.Provider>
        </>
    );
}
