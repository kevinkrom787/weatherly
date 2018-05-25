import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import dataCleaner from './dataCleaner';
import Welcome from './Welcome.js';
import CurrentWeather from './Current-Weather.js';
import SevenHourForecast from './Seven-Hour-Forecast';
import keyLink from './key.js';

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
      hourOne: 'one',
      hourTwo: 'two',
      hourThree: 'three',
      hourFour: 'four',
      hourFive: 'five',
      hourSix: 'six',
      hourSeven: 'seven',
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
      low: currentWeatherData.low,
      humidity: currentWeatherData.avehumidity,
    })
    this.getData()  
  }

  getData() {
    fetch('http://api.wunderground.com/api/'${keyLink}'/conditions/q/CO/denver.json')
      .then(response => response.json())
      .then(data => dataCleaner(data))
      .then(cleanData => console.log(cleanData))
      .catch(david => console.log(david))
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
        humidity={this.state.humidity}/>
        <SevenHourForecast 
        hourOne={this.state.hourOne}
        hourTwo={this.state.hourTwo}
        hourThree={this.state.hourThree}
        hourFour={this.state.hourFour}
        hourFive={this.state.hourFive}
        hourSix={this.state.hourSix}
        hourSeven={this.state.hourSeven}
        /> 
        
      </div>
    );
  }
}

export default App;
