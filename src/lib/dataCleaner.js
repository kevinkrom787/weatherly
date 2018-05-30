import React from 'react';

const dataCleaner = (parsedData) => {
  const days = parsedData.forecast.simpleforecast.forecastday
  const currentTemp = parsedData.current_observation.temperature_string
  const location = parsedData.current_observation.display_location.full
  console.log(parsedData)
  const getInfo = {
    high: days[0].high.fahrenheit,
    low: days[0].low.fahrenheit,
    date: days[0].date.pretty,
    conditions: days[0].conditions,
    avehumidity: days[0].avehumidity,
    location,
    currentTemp,
    icon: days[0].icon_url
  }

  return getInfo 
}


export default dataCleaner;