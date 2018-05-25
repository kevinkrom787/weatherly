import React, { Component } from 'react';


class CurrentWeather extends Component {
  constructor() {
    super()

  }

  render(props) {
    return (
      <div>
        <h3>Location: {this.props.location}</h3>
        <h3>Current Condition: {this.props.currentCondition}</h3>
        <h3>Current Temperature: {this.props.currentTemp}</h3>
        <h3>Date: {this.props.day}</h3>
        <h3>Temp: {this.props.currentTemp}</h3>
        <h3>High: {this.props.high}</h3>
        <h3>Low: {this.props.low}</h3>
        <h3>Humidity: {this.props.humidity}</h3>
    </div>
    )
  }
}


export default CurrentWeather; 