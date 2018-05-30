import React from 'react';
import Card from './Card';
import tenDayCleaner from './tenDayCleaner';
import './Ten-Day-Forecast.css';

const tenDayForecast = (props) => {

  return (
    
    props.daily.map((day, index) => {
      return (<Card 
      day={day.Day}
      high={day.High}
      low={day.Low}
      icon={day.Icon}
      key={index} />)
    })

  )

}

export default tenDayForecast;