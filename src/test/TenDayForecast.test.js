import React from 'react';
import { shallow } from 'enzyme';
import Card from '../lib/Card.js';

describe('TenDayForecast Test', () => {
  let renderedTenDayForecast;
  beforeEach(() => renderedTenDayForecast = shallow(
    <Card 
      day= 'Wednesday'
      high= '100'
      low= '80'
      icon= 'clouds'
      key= '0'
    />)
  );

  it('Should create a card formated for daily forecast', () => {
    const expected = 3

    const actual = renderedTenDayForecast.find('h3').length

    expect(actual).toEqual(expected);
  });

});