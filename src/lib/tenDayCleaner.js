import React from 'react';

const tenDayCleaner = (data) => {
  const tenDayArray = [];

  const daily = data.forecast.simpleforecast.forecastday
  daily.splice(0, 10).map((day, index) => {
    
    tenDayArray.push({
      Day: day.date.weekday,
      High: day.high.fahrenheit,
      Low: day.low.fahrenheit,
      Icon: day.icon_url
    })
  })
  return tenDayArray
}

export default tenDayCleaner;