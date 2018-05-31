import React from 'react';
import renderer from 'react-test-renderer';

import CurrentWeather from '../lib/CurrentWeather.js';

const getInfo = {
    high: days[0].high.fahrenheit,
    low: days[0].low.fahrenheit,
    date: days[0].date.pretty,
    conditions: days[0].conditions,
    avehumidity: days[0].avehumidity,
    location,
    currentTemp,
    icon: days[0].icon_url
  }

describe('CurrentWeather Test', () => {

  it('should render correct HTML structure', () => {
    const tree = renderer.create(<CurrentWeather forecast = { getInfo }/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});