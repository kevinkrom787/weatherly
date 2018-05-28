import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import dataCleaner from './dataCleaner';
import CurrentWeather from './Current-Weather.js';
import sevenHourForecastCleaner from './sevenHourDataCleaner';
import SevenHourForecast from './Seven-Hour-Forecast';
import Welcome from './Welcome.js';
import keyLink from './key.js';
import Card from './Card';
import TenDayForecast from './Ten-Day-Forecast';
import tenDayCleaner from './tenDayCleaner';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      sevenHourForecast: [],
      tenDayForecast: []
    }
  }

  componentDidMount() {
    const currentWeatherData = dataCleaner(data);
    this.setState({
      currentWeather: dataCleaner(data),
      sevenHourForecast: sevenHourForecastCleaner(data),
      tenDayForecast: tenDayCleaner(data),
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
        hourly={this.state.sevenHourForecast} />
        <TenDayForecast
        daily={this.state.tenDayForecast} /> 
      </div>
    );
  }
}

export default App;
