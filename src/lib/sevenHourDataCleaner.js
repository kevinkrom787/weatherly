import React from 'react';

const sevenHourForecastCleaner = (data) => {
  const sevenHourArray = [];

  const hourly = data.hourly_forecast


  hourly.splice(1, 7).map((hour, index) => {
     sevenHourArray.push({
      hour: hour.FCTTIME.civil, 
      temp: hour.temp.english,
      icon: hour.icon_url,
      key: index})
  })
  return sevenHourArray
}

export default sevenHourForecastCleaner;