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
  }

  componentDidMount() {
    fetch(`http://api.wunderground.com/api/${keyLink}/conditions/geolookup/hourly/forecast10day/q/${this.state.userState}/${this.state.userCity}.json`)
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
      <div className="App">
        <Search 
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
