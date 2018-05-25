const dataCleaner = (data) => {

  const days = data.forecast.simpleforecast.forecastday
  const currentTemp = data.current_observation.temperature_string;
  const location = data.current_observation.display_location.full
  const getIt = days.find(day => day.date.day === 20 && day.date.month === 12 && day.date.year === 2017);

  const getInfo = {
    high: getIt.high.fahrenheit,
    date: getIt.date.pretty,
    conditions: getIt.conditions,
    avehumidity: getIt.avehumidity,
    location,
    currentTemp,
  }
  return getInfo
}

export default dataCleaner;