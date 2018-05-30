import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import dataCleaner from './dataCleaner';
import CurrentWeather from './Current-Weather.js';
import sevenHourForecastCleaner from './sevenHourDataCleaner';
import SevenHourForecast from './Seven-Hour-Forecast';
import Welcome from './Welcome.js';
import keyLink from './key.js';
import Card from './Card';
import TenDayForecast from './Ten-Day-Forecast';
import tenDayCleaner from './tenDayCleaner';
import Search from './Search.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      sevenHourForecast: [],
      tenDayForecast: [],
    }
    this.fetchLocationData = this.fetchLocationData.bind(this)
  }

  sendToLocalStorage() {
    let sendCurrentWeatherToLocal = JSON.stringify(this.state.currentWeather)
    let sendSevenHourToLocal = JSON.stringify(this.state.sevenHourForecast)
    let sendTenDayToLocal = JSON.stringify(this.state.tenDayForecast)

    localStorage.setItem('currentWeatherKey', sendCurrentWeatherToLocal)
    localStorage.setItem('sendSevenHourKey', sendSevenHourToLocal)
    localStorage.setItem('sendTenDayKey', sendTenDayToLocal)

  }

  pullFromLocalStorage() {
    
    let pullCurrentWeatherLocalStorage = JSON.parse(localStorage.getItem('currentWeatherKey'));
    let pullSevenHourFromLocalStorage = JSON.parse(localStorage.getItem('sendSevenHourKey'))
    let pullTenDayFromLocalStorage = JSON.parse(localStorage.getItem('sendTenDayKey'))

    this.setState({
      currentWeather: pullCurrentWeatherLocalStorage,
      sevenHourForecast: pullSevenHourFromLocalStorage,
      tenDayForecast: pullTenDayFromLocalStorage
    })
  }

  componentDidMount() {
    if (localStorage.length > 2) {
      this.pullFromLocalStorage()
    }
  }

  fetchLocationData(input) {
    let userTime = input.split(',')
    let city = userTime[0]
    let state = userTime[1]
    fetch(`http://api.wunderground.com/api/${keyLink}/conditions/geolookup/hourly/forecast10day/q/${state}/${city}.json`)
    .then(data => data.json())
    .then(parsedData => {
        this.setState({
        currentWeather: dataCleaner(parsedData),
        sevenHourForecast: sevenHourForecastCleaner(parsedData),
        tenDayForecast: tenDayCleaner(parsedData),
      })
    })
    .then(data => this.sendToLocalStorage())
    .catch(err => alert('Incorrect City or State, Please Search Again'))
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <Search
        fetchLocationData={this.fetchLocationData} 
        />
        <div className='currentWeather'>
          <CurrentWeather 
          forecast={this.state.currentWeather} />
        </div>
        <h1>Seven Hour Forecast</h1>
        <div className='sevenHour'>
          <SevenHourForecast 
          hourly={this.state.sevenHourForecast} />
        </div>
        <h1>Ten Day Forecast</h1>
        <div className='tenDay'>
          <TenDayForecast
          daily={this.state.tenDayForecast} />
        </div>
      </div>
    );
  }
}

export default App;
