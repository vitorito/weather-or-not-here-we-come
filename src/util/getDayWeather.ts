import { FullCityWeatherData } from '@/types/wetherData';
import getWeatherInfo from './getWeatherInfo';
import getWeekDay from './getWeekDay';

const getDayWeather = (city: FullCityWeatherData, day: number) => {
  const { daily } = city;

  if (day >= daily.time.length) return null;

  const date = new Date(`${daily.time[day]}T00:00`);

  return {
    date: date.toLocaleDateString(),
    week_day: getWeekDay(date.getDay()),
    weathercode: daily.weathercode[day],
    weather: getWeatherInfo(daily.weathercode[day]),
    temperature_2m_max: Math.round(daily.temperature_2m_max[day]),
    temperature_2m_min: Math.round(daily.temperature_2m_min[day]),
    precipitation_sum: daily.precipitation_sum[day],
    precipitation_probability_max: daily.precipitation_probability_max[day],
    sunset: daily.sunset[day],
    sunrise: daily.sunrise[day],
  };
};

export default getDayWeather;
