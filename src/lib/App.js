import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import dataCleaner from './dataCleaner';
import Welcome from './Welcome.js';
import CurrentWeather from './Current-Weather.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: 'seattle',
      currentCondition: 'cloudy',
      day: 'Thursday',
      currentTemp: 'weather',
      high: '120',
      low: '-120',
      humidity: 'blah',
    }

  }
  componentDidMount() {
    const currentWeatherData = dataCleaner(data);
    this.setState({
      location: currentWeatherData.location,
      day: currentWeatherData.date,
      currentTemp: currentWeatherData.currentTemp,
      currentCondition: currentWeatherData.conditions,
      high: currentWeatherData.high,
      humidity: currentWeatherData.avehumidity,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <CurrentWeather 
        // how do I define this? 
        location={this.state.location}
        currentCondition={this.state.currentCondition}
        day={this.state.day}
        currentTemp={this.state.currentTemp}
        high={this.state.high}
        low={this.state.low}
        humidity={this.state.humidity}

        />
        <Welcome />
        
      </div>
    );
  }
}

export default App;
