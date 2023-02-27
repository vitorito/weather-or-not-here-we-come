// https://api.open-meteo.com/v1/forecast?latitude=X&longitude=Y&current_weather=true&timezone=America%2FSao_Paulo
const API_URL =
  'https://api.open-meteo.com/v1/forecast?current_weather=true&timezone=America%2FSao_Paulo';

export type CurrentWeatherCityData = {
  temperature: number;
  weathercode: number;
  windspeed: number;
  time: string;
};

const getCurrentCityWeather = async (
  lat: number,
  lon: number,
): Promise<CurrentWeatherCityData> => {
  const res = await fetch(`${API_URL}&latitude=${lat}&longitude=${lon}`);
  const resJson = await res.json();
  return resJson.current_weather;
};

export default getCurrentCityWeather;
