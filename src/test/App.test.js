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

    it('check that when we call pullFromLocalStorage and set state', () => {
      // setup
      renderedApp.setState({
        currentWeather: { key: 'tacos'},
        sevenHourForecast: { key: 'Banana'},
        tenDayForecast: { key: 'pizza'}
      })
      

      renderedApp.instance().pullFromLocalStorage()
     
      const expected = {
        currentWeather: { key: 'tacos' },
        sevenHourForecast: { key: 'Banana' },
        tenDayForecast: { key: 'pizza' }
      }
      
    
      const currentWeatherFromStorage = mockLocalStorage.setItem('currentWeather', JSON.stringify({ key: 'tacos' }))
      const sevenHourForecast = mockLocalStorage.setItem('sevenHourForecast', JSON.stringify({ key: 'Banana' }))    
      const tenDayForecast = mockLocalStorage.setItem('tenDayForecast', JSON.stringify({ key: 'pizza' }))    
    
      renderedApp.instance().setAllForecasts(currentWeatherFromStorage, sevenHourForecast, tenDayForecast)
   
      const currentWeatherParsed = JSON.parse(mockLocalStorage.getItem('currentWeather'))
      const sevenDayParsed = JSON.parse(mockLocalStorage.getItem('sevenHourForecast'))
      const tenDayParsed = JSON.parse(mockLocalStorage.getItem('tenDayForecast'))
      
      
      expect(currentWeatherParsed).toEqual(expected.currentWeather)
      expect(sevenDayParsed).toEqual(expected.sevenHourForecast)
      expect(tenDayParsed).toEqual(expected.tenDayForecast)
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
    it('sendToLocalStorage should store state in localStorage', () => {
      //setup - set state in rendered App
      renderedApp.setState({
        currentWeather: {key: 'tacos'},
        sevenHourForecast: {key: 'Breakfast ritos'},
        tenDayForecast: {key: 'apple'}
      })
      // invoke function we are testing
      renderedApp.instance().sendToLocalStorage()
      // what are we expecting
      const expected = ({
        currentWeather: {key: 'tacos'},
        sevenHourForecast: {key: 'Breakfast ritos'},
        tenDayForecast: {key: 'apple'}
      })
      // getting and parsing our item from localStorage
      const currentWeatherFromStorage = JSON.parse(mockLocalStorage.getItem('currentWeather'))
      const sevenHourForecastFromStorage = JSON.parse(mockLocalStorage.getItem('sevenHourForecast'))
      const tenDayForecastFromStorage = JSON.parse(mockLocalStorage.getItem('tenDayForecast'))
      // asserting 
      expect(currentWeatherFromStorage).toEqual(expected.currentWeather)
      expect(sevenHourForecastFromStorage).toEqual(expected.sevenHourForecast)
      expect(tenDayForecastFromStorage).toEqual(expected.tenDayForecast)
    })
  })
})
