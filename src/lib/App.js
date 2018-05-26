import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import dataCleaner from './dataCleaner';
import sevenHourForecastCleaner from './sevenHourDataCleaner';
import Welcome from './Welcome.js';
import CurrentWeather from './Current-Weather.js';
import SevenHourForecast from './Seven-Hour-Forecast';
import keyLink from './key.js';
import Card from './Card';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      sevenHourForecast: [],
    }

  }
  componentDidMount() {
    const currentWeatherData = dataCleaner(data);
    this.setState({
      currentWeather: dataCleaner(data),
      sevenHourForecast: sevenHourForecastCleaner(data),
    })
    // this.getData()  
  }

  // getData() {
  //   fetch('http://api.wunderground.com/api//conditions/q/CO/denver.json')
  //     .then(response => response.json())
  //     .then(data => dataCleaner(data))
  //     .then(cleanData => console.log(cleanData))
  //     .catch(david => console.log(david))
  // }

  render() {
    return (
      <div className="App">
        <CurrentWeather 
        forecast={this.state.currentWeather} />
        <SevenHourForecast 
        hourly={this.state.sevenHourForecast}
        /> 
      </div>
    );
  }
}

export default App;
