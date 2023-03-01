import { PartialCityWeatherData } from '@/types/wetherData';

// https://api.open-meteo.com/v1/forecast?latitude=-7.12&longitude=-34.86&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max&current_weather=true&timezone=America%2FSao_Paulo
const API_URL =
  'https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,' +
  'temperature_2m_min,precipitation_sum,precipitation_probability_max' +
  '&current_weather=true&timezone=auto';

const getCityWeather = async (
  lat: number,
  lon: number,
): Promise<PartialCityWeatherData> => {
  const res = await fetch(`${API_URL}&latitude=${lat}&longitude=${lon}`);
  return res.json();
};

export default getCityWeather;
