import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
// import data from './mock-data.js';
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
    fetch('http://api.wunderground.com/api/81347f06b321e144//conditions/geolookup/hourly/forecast10day/q/CO/denver.json')
    .then(data => data.json())
    .then(parsedData => console.log(parsedData))
    .then(parsedData => {
        this.setState({
        currentWeather: dataCleaner(parsedData),
        sevenHourForecast: sevenHourForecastCleaner(parsedData),
        tenDayForecast: tenDayCleaner(parsedData),
      })
    })
    .catch(err => console.log('err-nothing came back', err))
  }


    // this.setState({
    //   currentWeather: dataCleaner(data),
    //   sevenHourForecast: sevenHourForecastCleaner(data),
    //   tenDayForecast: tenDayCleaner(data),
    // })



  // getData() {
  //   fetch('http://api.wunderground.com/api/81347f06b321e144/conditions/q/CO/denver.json')
  //   .then(data => data.json())
  //   .then(data => console.log(data))
  //   .catch(err => console.log('err-nothing came back'))
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
