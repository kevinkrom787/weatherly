import React from 'react';
import { shallow } from 'enzyme';
import Card from '../lib/Card.js';

describe('sevenHourForecast Test', () => {
  let renderedSevenHourForecast;
  beforeEach(() => renderedSevenHourForecast = shallow(
    <Card
      hour= '10:00am'
      temp= '56'
      icon= 'clouds'
      key= '0'
    />)
  );

  it('should render with expected HTML tags', () => {
    const expected = 2

    const actual = renderedSevenHourForecast.find('h3').length

    expect(actual).toEqual(expected);
  });
});
