// https://geocoding-api.open-meteo.com/v1/search?name=Berlin
const API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const language = 'pt';
export const MIN_CITY_NAME_LEN = 2;

export type SearchCityData = {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  country_code: string;
  timezone: string;
  country: string;
  admin1?: string;
};

export const searchCities = async (name: string): Promise<SearchCityData[]> => {
  if (name.length <= MIN_CITY_NAME_LEN) return [];
  const res = await fetch(`${API_URL}?name=${name}&language=${language}`);
  const resJson = await res.json();

  return resJson.results || [];
};
