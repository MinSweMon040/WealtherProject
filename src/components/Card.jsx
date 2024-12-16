/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Clock from 'react-clock';
import { useState,useEffect } from 'react';
import 'react-clock/dist/Clock.css';



const Card = ({wealdata}) => {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

 
    if (JSON.stringify(wealdata)!=='{}'){
      return (
        <div className='d-flex flex-column align-items-center gap-2 mt-3'>
           <Clock value={value} className="my-3" />
            <h2>{wealdata.name},{wealdata.sys.country}</h2>
            <h1><img src={`https://openweathermap.org//img/w/${wealdata.weather[0].icon}.png`}/>25'C</h1>
            <p>{wealdata.weather[0].main}</p>
            <p>Hummidity:{wealdata.main.humidity}%</p>
          
            <p>Visibility:{wealdata.visibility}</p>
        </div>
      )
    }
 
}

export default Card