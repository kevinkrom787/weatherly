import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import data from './mock-data.js';
import Welcome from './Welcome.js';
import CurrentWeather from './Current-Weather.js';

class App extends Component {
  constructor() {
    super()
    this.state = {
      location: this.currentWeather || [],

    }
  }
  currentWeatherData() {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          data.display_location.full
        </p>
        <CurrentWeather 
        // how do I define this? 
        // location={this.state.location}
        />
        <Welcome />
        
      </div>
    );
  }
}

export default App;
