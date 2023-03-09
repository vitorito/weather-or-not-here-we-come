import { FullCityWeatherData } from '@/types/wetherData';
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from 'react';

type CityProviderProps = {
  children: ReactNode;
};

const EMPTY_CITY_WEATHER_DATA: FullCityWeatherData = {
  name: '',
  state: '',
  country: '',
  timezone: 'utc',
  utc_offset_seconds: 0,
  current_weather: {
    time: '',
    temperature: 0,
    weathercode: 0,
    winddirection: 0,
    windspeed: 0,
  },
  daily: {
    time: [],
    weathercode: [],
    temperature_2m_max: [],
    temperature_2m_min: [],
    sunrise: [],
    sunset: [],
    precipitation_probability_max: [],
    precipitation_sum: [],
  },
  date: '',
  hourly: {
    temperature_2m: [],
    time: [],
  },
};

type CityProviderValue = {
  city: FullCityWeatherData;
  setCity: Dispatch<SetStateAction<FullCityWeatherData>>;
};

export const cityContext = createContext<CityProviderValue>({
  city: EMPTY_CITY_WEATHER_DATA,
  setCity: () => {}, // eslint-disable-line @typescript-eslint/no-empty-function
});

function CityProvider({ children }: CityProviderProps) {
  const [city, setCity] = useState({ ...EMPTY_CITY_WEATHER_DATA });
  const value = useMemo(
    () => ({
      city,
      setCity,
    }),
    [city],
  );
  return <cityContext.Provider value={value}>{children}</cityContext.Provider>;
}

export default CityProvider;
