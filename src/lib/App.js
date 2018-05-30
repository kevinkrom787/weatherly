import React, { Component } from 'react';
import keyLink from './key.js';
import dataCleaner from './dataCleaner';
import sevenHourForecastCleaner from './sevenHourDataCleaner';
import tenDayCleaner from './tenDayCleaner';
import Welcome from './Welcome.js';
import CurrentWeather from './CurrentWeather.js';
import SevenHourForecast from './SevenHourForecast';
import TenDayForecast from './TenDayForecast';
import Card from './Card';
import Search from './Search.js';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      sevenHourForecast: [],
      tenDayForecast: [],
    }
    this.fetchLocationData = this.fetchLocationData.bind(this)
    this.setAppState = this.setAppState.bind(this);
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
    const pullCurrentWeatherLocalStorage = JSON.parse(localStorage.getItem('currentWeatherKey'));
    const pullSevenHourFromLocalStorage = JSON.parse(localStorage.getItem('sendSevenHourKey'))
    const pullTenDayFromLocalStorage = JSON.parse(localStorage.getItem('sendTenDayKey'))

    this.setState({
      currentWeather: pullCurrentWeatherLocalStorage,
      sevenHourForecast: pullSevenHourFromLocalStorage,
      tenDayForecast: pullTenDayFromLocalStorage
    })
  }

  componentDidMount() {
    this.localStorageCheck()
  }

  localStorageCheck() {
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
    .then(parsedData => this.setAppState(parsedData))
    .then(data => this.sendToLocalStorage())
    .catch(err => alert('Incorrect City or State, Please Search Again'))
  }

  setAppState(parsedData) {
    this.setState({
      currentWeather: dataCleaner(parsedData),
      sevenHourForecast: sevenHourForecastCleaner(parsedData),
      tenDayForecast: tenDayCleaner(parsedData),
    })
  }

  render() {
    return (
      <div className='mainContainer'>
        <div className='App'>
          <div className='search'>
            <Search
            fetchLocationData={this.fetchLocationData} />
          </div>
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
      </div>
    );
  }
}

export default App;