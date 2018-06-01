import React from 'react';
import { shallow, mount, render } from 'enzyme'
import Card from '../lib/Card.js';
import SevenHourCleaner from '../lib/sevenHourDataCleaner';
import sevenHourForecastCleaner from '../lib/sevenHourDataCleaner';
import data from '../lib/mock-data.js';

describe('SevenHour Card Test', () => {
  it('should render with expected HTML tags of a hourly Card', () => {
    let mockData = {
      hour: '10:00am',
      temp: '80',
      icon: 'image',
      key:  '1'
    }
  
    let renderedCard = shallow(
    <Card
      hour={mockData.hour}
      temp={mockData.temp}
      icon={mockData.icon}
      key={mockData.key}
    />)

    const expected = 1
    const actual = renderedCard.find('.hourCard').length;

    expect(actual).toEqual(expected);
  });

  it('Should render with expected HTML tags of a day Card', () => {
    let mockData = {
      day: 'Wednesday',
      high: '80',
      low: '60',
      icon: 'image',
      key: '1'
    }

    let renderedCard = mount(
    <Card 
      day={mockData.day}
      high={mockData.high}
      low={mockData.low}
      icon={mockData.icon}
      key={mockData.key}
    />)

    const expected = 1
    const actual = renderedCard.find('.dayCard').length;

    expect(actual).toEqual(expected);
  });
});