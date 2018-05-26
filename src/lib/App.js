import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import dataCleaner from './dataCleaner';
import sevenHourDataCleaner from './sevenHourDataCleaner'
import Welcome from './Welcome.js';
import CurrentWeather from './Current-Weather.js';
import SevenHourForecast from './Seven-Hour-Forecast';
import keyLink from './key.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      currentWeather: {},
      sevenHourForecast: [],
      // humidity: 'blah',
      // hourOne: 'one',
      // hourTwo: 'two',
      // hourThree: 'three',
      // hourFour: 'four',
      // hourFive: 'five',
      // hourSix: 'six',
      // hourSeven: 'seven',
    }

  }
  componentDidMount() {
    const currentWeatherData = dataCleaner(data);
    this.setState({
      currentWeather: dataCleaner(data),
      sevenHourForecast: sevenHourDataCleaner(data),
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
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        </p>
        <CurrentWeather 
        forecast={this.state.currentWeather} />
        {/* <SevenHourForecast 
        hourOne={this.state.hourOne}
        hourTwo={this.state.hourTwo}
        hourThree={this.state.hourThree}
        hourFour={this.state.hourFour}
        hourFive={this.state.hourFive}
        hourSix={this.state.hourSix}
        hourSeven={this.state.hourSeven}
        />  */}
      </div>
    );
  }
}

export default App;
