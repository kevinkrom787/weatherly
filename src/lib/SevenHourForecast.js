import React from 'react';
import Card from './Card';
import './SevenHourForecast.css';

const SevenHourForecast = (props) => {
  return (
    props.hourly.map((hour, index) => {
      return (
        <Card 
          hour={hour.hour}
          temp={hour.temp}
          icon={hour.icon}
          key={index}
        />
      );
    })
  );
}

export default SevenHourForecast;