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
      userState: 'CO',
      userCity: 'Denver'
    }
    this.fetchLocationData = this.fetchLocationData.bind(this)
  }

  fetchLocationData(input) {
    console.log(input)
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
    .catch(err => alert('Incorrect City or State, Please Search Again'))
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
