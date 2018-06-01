import React from 'react';
import tenDayCleaner from './tenDayCleaner';
import './Card.css';

const Card = (props) => {
  if (props.day) {
    return (
      <div className="dayCard">
        <h3>Day: {props.day} </h3>
        <h3>High: {props.high} </h3>
        <h3>low: {props.low} </h3>
        <img src={`${props.icon}`} />
      </div>
    );
  }
  return (
    <div className="hourCard"> 
      <h3>Hour: {props.hour} </h3> 
      <h3>Temp: {props.temp} </h3> 
      <img src={`${props.icon}`} />
    </div>
  );
}

export default Card;