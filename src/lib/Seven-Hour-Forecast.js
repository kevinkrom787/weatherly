import React from 'react';
import Card from './Card';


const sevenHourForecast = (props) => {
  return (
  props.hourly.map((hour, index) => {
    return (
      <Card 
        hour={hour.hour}
        temp={hour.temp}
        icon={hour.icon}
        key={index}
      />
    )
  })
  )
}

export default sevenHourForecast;
