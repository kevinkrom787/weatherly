import data from '../lib/mock-data';
import dataCleaner from '../lib/dataCleaner';

describe('currentWeatherDataCleaner test', () => {
  it('should take in API data as an argument and return an object literal', () => {
    const expected = {
      high: '51',
      low: '32',
      date: '7:00 PM EST on December 20, 2017',
      conditions: 'Partly Cloudy',
      avehumidity: 48,
      location: 'Louisville, KY',
      currentTemp: '46.0 F (7.8 C)',
      icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
    }

    const actual = dataCleaner(data);

    expect(actual).toEqual(expected)
  })
  
})

