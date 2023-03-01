export type Weathercode =
  | 0
  | 1
  | 2
  | 3
  | 45
  | 48
  | 51
  | 53
  | 55
  | 56
  | 57
  | 61
  | 63
  | 65
  | 66
  | 67
  | 71
  | 73
  | 75
  | 77
  | 80
  | 81
  | 82
  | 85
  | 86
  | 95
  | 96
  | 99;

export type PartialCityWeatherData = {
  utc_offset_seconds: number;
  timezone: string;
  daily: {
    time: string[];
    weathercode: Weathercode[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    precipitation_probability_max: number[];
  };
  daily_units: {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
    precipitation_probability_max: string;
  };
  current_weather: {
    temperature: number;
    weathercode: Weathercode;
    windspeed: number;
    winddirection: number;
    time: string;
  };
};

export type FullCityWeatherData = {
  name: string;
  state: string;
  country: string;
} & PartialCityWeatherData;
