import React, { Component } from 'react';

class CurrentWeather extends Component {
  constructor() {
    super()
    // this.state = {
    //   currentWeather: props.location
    // }
  }

  render() {
  return (
    <div>
      <h2> CURRENT WEATHER </h2>
      <p>Seattle, Washington </p>
      <p>Mostly Cloudy with a chance of rain</p>
      <p>Date & Time </p>
      <p>temp F & Celcius</p>
      <p>Wind direction</p>
    </div>
  )
  }
}


export default CurrentWeather; 