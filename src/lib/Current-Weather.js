import React from 'react';
import './Current-Weather.css';


const CurrentWeather = (props) => {
  return (
    <div className='weatherInfoContain'>
      {/*<h2>Current Weather!</h2>*/}
      <div className='weatherInfoLeft'>
        <h3 className='location'>{props.forecast.location}</h3>
        <h3>{props.forecast.conditions}</h3>
        <h3>{props.forecast.date}</h3>
        <h3>Current: {props.forecast.currentTemp}</h3>
        <div className='highLowTemp'>
          <h3 className='currentWeatherHigh'>High: {props.forecast.high}</h3>
          <h3>Low: {props.forecast.low}</h3>
        </div>
        <h3>Humidity: {props.forecast.avehumidity}</h3>
      </div>
      <div className='weatherInfoRight'>
        <img className='currentWeatherIcon' alt="weather picture" src= {`${props.forecast.icon}`} />
      </div>
    </div>
  )
}


export default CurrentWeather; 