import data from '../lib/mock-data';
import tenDayCleaner from '../lib/tenDayCleaner';

describe('tenDayCleaner test', () => {
  it('it should take API data as an argument and return an array of objects', () => {
    const expected = [{
          Day: 'Wednesday',
          High: '51',
          Low: '32',
          Icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
          Day: 'Thursday',
          High: '55',
          Low: '51',
          Icon: 'http://icons.wxug.com/i/c/k/clear.gif'
        },
        {
          Day: 'Friday',
          High: '57',
          Low: '44',
          Icon: 'http://icons.wxug.com/i/c/k/chancerain.gif'
        },
        {
          Day: 'Saturday',
          High: '47',
          Low: '30',
          Icon: 'http://icons.wxug.com/i/c/k/rain.gif'
        },
        {
          Day: 'Sunday',
          High: '37',
          Low: '22',
          Icon: 'http://icons.wxug.com/i/c/k/cloudy.gif'
        },
        {
          Day: 'Monday',
          High: '35',
          Low: '19',
          Icon: 'http://icons.wxug.com/i/c/k/clear.gif'
        },
        {
          Day: 'Tuesday',
          High: '32',
          Low: '20',
          Icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
          Day: 'Wednesday',
          High: '33',
          Low: '26',
          Icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        },
        {
          Day: 'Thursday',
          High: '35',
          Low: '23',
          Icon: 'http://icons.wxug.com/i/c/k/snow.gif'
        },
        {
          Day: 'Friday',
          High: '31',
          Low: '18',
          Icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif'
        }]

      let actual = tenDayCleaner(data);

      expect(actual).toEqual(expected)
  })
})