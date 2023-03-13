import { FullCityWeatherData } from '@/types/wetherData';
import getDayWeather from '@/util/getDayWeather';
import getWeekDay from '@/util/getWeekDay';
import { BsCloudRain, BsThermometerHalf } from 'react-icons/bs';
import { SiRainmeter } from 'react-icons/si';
import Container from '../Container';
import WeatherItem from './WeatherItem';

type TodayWeatherProps = {
  city: FullCityWeatherData;
};

function TodayWeather({ city }: TodayWeatherProps) {
  const cityDate = new Date(city.date);
  const todayWeather = getDayWeather(city, 0);

  if (todayWeather === null) return null;

  return (
    <Container className="flex flex-col w-full min-h-[270px] h-auto md:h-auto">
      <div className="flex items-center bg-slate-900 p-2 md:px-4 rounded-t-md">
        <h1 className="text-white text-2xl leading-6 grow">
          <span className="sr-only">Clima hoje em </span>
          <span className="block">{city.name}</span>
          {city.admin1 && (
            <span className="text-lg text-gray-300 mr-1">{`${city.admin1},`}</span>
          )}
          {city.country && (
            <span className="text-lg text-gray-300">{city.country}</span>
          )}
        </h1>
        <div className="text-white text-center px-1">
          <p className="block text-xl">{getWeekDay(cityDate.getDay())}</p>
          <p className="text-gray-300">{cityDate.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center grow gap-0.5 p-3 md:px-4">
        <WeatherItem
          title="Temperaturas máxima e mínima"
          Icon={<BsThermometerHalf size={30} className="-ml-2 mr-0.5" />}
          legend="Max/Min"
          value={`${todayWeather.temperature_2m_max}°/${todayWeather.temperature_2m_min}°`}
        />
        <WeatherItem
          title="Clima predominante"
          Icon={
            <todayWeather.weather.icon
              size={25}
              className="w-[30px] -ml-2 mr-0.5"
            />
          }
          legend="Clima"
          value={`${todayWeather.weather.name}`}
        />
        <WeatherItem
          title="Possibilidade de chuva"
          Icon={<BsCloudRain size={25} className="w-[30px] -ml-2 mr-0.5" />}
          legend="Possibilidade de Chuva"
          value={`${todayWeather.precipitation_probability_max}%`}
        />
        <WeatherItem
          title="Precipitação acumulada"
          Icon={<SiRainmeter size={25} className="w-[30px] -ml-2 mr-0.5" />}
          legend="Precipitação"
          value={`${todayWeather.precipitation_sum} mm`}
        />
      </div>
    </Container>
  );
}

export default TodayWeather;
