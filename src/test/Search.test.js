import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Search from '../lib/Search.js';

describe('Search Test', () => {
  let renderedSearch;
  beforeEach(() => {
    renderedSearch = shallow(<Search />)
  })
 it('should have a default state of location set to an empty string', () => {
  const expectedState = {
    userInput: ''
  }
  const actual = renderedSearch.state()

  expect(actual).toEqual(expectedState);
 })

 it('should change state when updateLocation is invoked', () => {
  const expectedState = {
    userInput: 'Seattle, WA'
  }
  const mockEvent = { target: { value: 'Seattle, WA'}}
  
  renderedSearch.instance().updateLocation(mockEvent)

  const actualState = renderedSearch.state()
  expect(actualState).toEqual(expectedState)
 })
});