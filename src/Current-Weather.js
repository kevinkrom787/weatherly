import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './lib/Current-Weather';

describe('CurrentWeather test', () => {
  describe('CurrentWeather default state test', () => {
    test('Form should have a default state of title vals are an empty string', () => {
      const renderedForm = shallow(<CurrentWeather />);
      const expectedTitle = '';
      const actualTitle = renderedForm.state('title');

      expect(actualTitle).toBe(expectedTitle);
    })
})
