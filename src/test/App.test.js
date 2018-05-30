import React from 'react';
import { shallow, mount, render } from 'enzyme';
global.localStorage = {}

import App from '../lib/App';
import CurrentWeather from '../lib/Current-Weather';
import sevenHourForecast from '../lib/Seven-Hour-Forecast';
import tenDayForecast from '../lib/Ten-Day-Forecast';
import LocalStorageMock from '../test/test.helpers/LocalStorageMock';

describe('App Test', () => {
  let mockLocalStorage = new LocalStorageMock
  let renderedApp;
  global.localStorage = mockLocalStorage;
  beforeEach(() => {
    renderedApp = shallow(<App />, { disableLifecycleMethods: true })
    mockLocalStorage.clear();
  });
  


  describe('App default state test', () => {
    test('App should have a default state of current weather as an empty object', () => {
      const expectedState = {
        currentWeather: {},
        sevenHourForecast: [],
          tenDayForecast: []
      };
      const actualState = renderedApp.state();

      expect(actualState).toEqual(expectedState);
    })
    test('App should setAppState after fetch call', () => {
      // need to pass data from cleaners into setAppState
      // expect state to see if correct info is there
      // 
      const mockData = { }
    })
    test('check that when we call pullFromLocalStorage', () => {
      const expected = {
        currentWeather: { tacos: true },
        sevenHourForecast: { tacos: true },
        tenDayForecast: { tacos: true }
      }
      // put info into local storage
      localStorage.setItem('currentWeatherKey', JSON.stringify({tacos: true}))
      localStorage.setItem('sendSevenHourKey', JSON.stringify({ tacos: true }))
      localStorage.setItem('sendTenDayKey', JSON.stringify({ tacos: true }))
      // call function
      renderedApp.instance().pullFromLocalStorage()
    
      const actual = renderedApp.state()
      expect(actual).toEqual(expected)
      // check state
    })

    test('check that we call localStorageCheck', () => {
      
    })
  })
})
