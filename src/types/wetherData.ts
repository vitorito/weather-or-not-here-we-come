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

export type HourlyWeatherData = {
  time: string[];
  temperature_2m: number[];
};

export type DailyWeatherData = {
  time: string[];
  weathercode: Weathercode[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  precipitation_sum: number[];
  precipitation_probability_max: number[];
  sunset: string[];
  sunrise: string[];
};

export type CurrentWeatherData = {
  temperature: number;
  weathercode: Weathercode;
  windspeed: number;
  winddirection: number;
  time: string;
};

export type PartialCityWeatherData = {
  date: string;
  utc_offset_seconds: number;
  timezone: string;
  hourly: HourlyWeatherData;
  daily: DailyWeatherData;
  current_weather: CurrentWeatherData;
};

export type FullCityWeatherData = {
  name: string;
  admin1?: string;
  country: string;
} & PartialCityWeatherData;
