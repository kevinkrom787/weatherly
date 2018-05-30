import React from 'react';
import { shallow } from 'enzyme';
import CurrentWeather from './lib/Current-Weather';

describe('Card test', () => {
  describe('Card default state test', () => {
    test('Form should have a default state of title vals are an empty string', () => {
      const renderedForm = shallow(<Card />);
      const expectedTitle = '';
      const actualTitle = renderedForm.state('title');

      expect(actualTitle).toBe(expectedTitle);
    })
  })