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
    it('App should have a default state of current weather as an empty object', () => {
      const expectedState = {
        currentWeather: {},
        sevenHourForecast: [],
          tenDayForecast: []
      };
      const actualState = renderedApp.state();

      expect(actualState).toEqual(expectedState);
    })

    it('check that when we call pullFromLocalStorage', () => {
    
      const key1 = mockLocalStorage.setItem('key1', JSON.stringify({ tacos: true }))    
      const key2 = mockLocalStorage.setItem('key2', JSON.stringify({ tacos: true }))    
      const key3 = mockLocalStorage.setItem('key3', JSON.stringify({ tacos: true }))    

      const expected = {
        currentWeather: { tacos: true },
        sevenHourForecast: { tacos: true },
        tenDayForecast: { tacos: true }
      }

      renderedApp.instance().pullFromLocalStorage()
      renderedApp.instance().setAllForecasts(key1, key2, key3)

      
      const actual = renderedApp.state()
  
      expect(actual).toEqual(expected)
    })

    it('check that when we call localStorageCheck, state updates', () => {

      localStorage.setItem('Ryan', 'squid');
      localStorage.setItem('Tom', 'Dog');
      localStorage.setItem('Mark', 'Turtle');

      const mockFunction = jest.fn();
      const original = App.prototype.pullFromLocalStorage
      App.prototype.pullFromLocalStorage = mockFunction
    
      renderedApp.instance().localStorageCheck()
      App.prototype.pullFromLocalStorage = original

      expect(mockFunction).toHaveBeenCalled()
    })

    it('should not run pullFromLocalStorage() if localStorage is empty', () => {

      localStorage.clear()

      const mockFunction = jest.fn()
      renderedApp.instance().localStorageCheck()

      expect(mockFunction).toHaveBeenCalledTimes(0)
    })
  })
})
