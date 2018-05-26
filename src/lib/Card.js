import React from 'react';

const Card = (props) => {
console.log(props)
  return (
    <div> 
    <h1>Hour: {props.hour} </h1> 
    <h1>Temp: {props.temp} </h1> 
    <img src={`${props.icon}`}/>
    </div>
  )
}
export default Card;
