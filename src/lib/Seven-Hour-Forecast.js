import React, { Component } from 'react';

export default class SevenHourForecast extends Component {
  constructor() {
    super()
  }

  render() {
    return(
      <div> 
        <p>{this.props.hourOne}</p>
        <p>{this.props.hourTwo}</p>
        <p>{this.props.hourThree}</p>
        <p>{this.props.hourFour}</p>
        <p>{this.props.hourFive}</p>
        <p>{this.props.hourSix}</p>
        <p>{this.props.hourSeven}</p>
      </div> 
    );
  }
}

