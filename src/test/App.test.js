import React from 'react';
import { shallow, mount, render } from 'enzyme';
global.localStorage = {}

import App from '../lib/App';
import CurrentWeather from '../lib/CurrentWeather';
import sevenHourForecast from '../lib/SevenHourForecast';
import tenDayForecast from '../lib/TenDayForecast';
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

    test('check that when we call localStorageCheck, state updates', () => {
      //setup
      localStorage.setItem('Ryan', 'squid');
      localStorage.setItem('Tom', 'Dog');
      localStorage.setItem('Mark', 'Turtle');

      const mockFunction = jest.fn();
      const original = App.prototype.pullFromLocalStorage
      App.prototype.pullFromLocalStorage = mockFunction
      // execution
      renderedApp.instance().localStorageCheck()
      App.prototype.pullFromLocalStorage = original
      //expectations
      expect(mockFunction).toHaveBeenCalled()
    })

    test('should not run pullFromLocalStorage() if localStorage is empty', () => {

      localStorage.clear()

      const mockFunction = jest.fn()
      renderedApp.instance().localStorageCheck()

      expect(mockFunction).toHaveBeenCalledTimes(0)
    })
  })
})
