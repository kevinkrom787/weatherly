const dataCleaner = (data) => {

  const days = data.forecast.simpleforecast.forecastday
  const currentTemp = data.current_observation.temperature_string
  const location = data.current_observation.display_location.full
  const getIt = days.find(day => day.date.day === 20 && day.date.month === 12 && day.date.year === 2017);

  const getInfo = {
    high: getIt.high.fahrenheit,
    low: getIt.low.fahrenheit,
    date: getIt.date.pretty,
    conditions: getIt.conditions,
    avehumidity: getIt.avehumidity,
    location,
    currentTemp,
    icon: getIt.icon_url
  }

  return getInfo 
}


export default dataCleaner;