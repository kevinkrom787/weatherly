import React from 'react';


const CurrentWeather = (props) => {
  return (
    <div>
      <h2> Current Weather! </h2>
      <h3>Location: {props.forecast.location}</h3>
      <h3>Current Condition: {props.forecast.conditions}</h3>
      <h3>Current Temperature: {props.forecast.currentTemp}</h3>
      <h3>Date: {props.forecast.date}</h3>
      <h3>Temp: {props.forecast.currentTemp}</h3>
      <h3>High: {props.forecast.high}</h3>
      <h3>Low: {props.forecast.low}</h3>
      <h3>Humidity: {props.forecast.avehumidity}</h3>
      <img src= {`${props.forecast.icon}`} />

  </div>
  )
}


export default CurrentWeather; 