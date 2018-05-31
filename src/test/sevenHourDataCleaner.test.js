import data from '../lib/mock-data';
import sevenHourDataCleaner from '../lib/sevenHourDataCleaner';

describe('sevenHourDataCleaner test', () => {
  it('should take in API data as an argument and pass it into an array', () => {
    // setup
    const expected = [{
        hour: '1:00 PM',
        temp: '49',
        icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
        key: 0
      },
        {
          hour: '2:00 PM',
          temp: '49',
          icon: 'http://icons.wxug.com/i/c/k/partlycloudy.gif',
          key: 1
        },
        {
          hour: '3:00 PM',
          temp: '51',
          icon: 'http://icons.wxug.com/i/c/k/clear.gif',
          key: 2
        },
        {
          hour: '4:00 PM',
          temp: '50',
          icon: 'http://icons.wxug.com/i/c/k/clear.gif',
          key: 3
        },
        {
          hour: '5:00 PM',
          temp: '48',
          icon: 'http://icons.wxug.com/i/c/k/clear.gif',
          key: 4
        },
        {
          hour: '6:00 PM',
          temp: '45',
          icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          key: 5
        },
        {
          hour: '7:00 PM',
          temp: '43',
          icon: 'http://icons.wxug.com/i/c/k/nt_clear.gif',
          key: 6
        }]

    const actual = sevenHourDataCleaner(data)

    expect(actual).toEqual(expected)
  })
})