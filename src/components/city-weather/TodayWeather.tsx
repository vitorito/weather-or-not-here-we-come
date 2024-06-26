import { FullCityWeatherData } from '@/types/wetherData';
import getDayWeather from '@/util/getDayWeather';
import { BsCloudRain, BsThermometerHalf } from 'react-icons/bs';
import { SiRainmeter } from 'react-icons/si';
import Container from '../Container';
import WeatherItem from './WeatherItem';

type TodayWeatherProps = {
  city: FullCityWeatherData;
};

function TodayWeather({ city }: TodayWeatherProps) {
  const todayWeather = getDayWeather(city, 0);

  if (todayWeather === null) return null;

  return (
    <Container className="flex flex-col w-full h-[45vh] max-h-72 overflow-hidden">
      <div
        className="flex items-center bg-slate-800 dark:bg-gray-900
        p-2 pt-3 md:px-4 text-white dark:text-current"
      >
        <h1 className="text-2xl leading-6 grow">
          <span className="sr-only">Clima hoje em </span>
          <span className="block">{city.name}</span>
          {city.admin1 && (
            <span className="text-lg text-gray-300 dark:text-gray-400 mr-1">{`${city.admin1},`}</span>
          )}
          {city.country && (
            <span className="text-lg text-gray-300 dark:text-gray-400">
              {city.country}
            </span>
          )}
        </h1>
        <div className="text-center px-1">
          <p className="block text-xl">{todayWeather.week_day}</p>
          <p className="text-gray-300 dark:text-gray-400">
            {todayWeather.date}
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-center grow gap-0.5 p-3 md:px-4">
        <WeatherItem
          title="Temperaturas máxima e mínima"
          Icon={<BsThermometerHalf size="1.875rem" className="-ml-2 mr-0.5" />}
          legend="Max/Min"
          value={`${todayWeather.temperature_2m_max}°/${todayWeather.temperature_2m_min}°`}
        />
        <WeatherItem
          title="Clima predominante"
          Icon={
            <todayWeather.weather.icon
              size="1.5625rem"
              className="w-[1.875rem] -ml-2 mr-0.5"
            />
          }
          legend="Clima"
          value={`${todayWeather.weather.name}`}
        />
        <WeatherItem
          title="Possibilidade de chuva"
          Icon={
            <BsCloudRain
              size="1.5625rem"
              className="w-[1.875rem] -ml-2 mr-0.5"
            />
          }
          legend="Possibilidade de Chuva"
          value={`${todayWeather.precipitation_probability_max}%`}
        />
        <WeatherItem
          title="Precipitação acumulada"
          Icon={
            <SiRainmeter
              size="1.5625rem"
              className="w-[1.875rem] -ml-2 mr-0.5"
            />
          }
          legend="Precipitação"
          value={`${todayWeather.precipitation_sum} mm`}
        />
      </div>
    </Container>
  );
}

export default TodayWeather;
