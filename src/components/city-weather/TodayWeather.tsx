import getWeatherInfo from '@/lib/getWeatherInfo';
import getWeekDay from '@/lib/getWeekDay';
import { FullCityWeatherData } from '@/types/wetherData';
import { BsCloudRain, BsThermometerHalf } from 'react-icons/bs';
import { SiRainmeter } from 'react-icons/si';
import Container from '../Container';
import WeatherItem from './WeatherItem';

type TodayWeatherProps = {
  city: FullCityWeatherData;
};

const getTodayWeather = (city: FullCityWeatherData) => {
  const { daily } = city;
  return {
    weather: getWeatherInfo(daily.weathercode[0]),
    precipitation_probability: daily.precipitation_probability_max[0],
    precipitation_sum: daily.precipitation_sum[0],
    temperature_max: Math.round(daily.temperature_2m_max[0]),
    temperature_min: Math.round(daily.temperature_2m_min[0]),
  };
};

function TodayWeather({ city }: TodayWeatherProps) {
  const cityDate = new Date(city.date);
  const todayWeather = getTodayWeather(city);

  return (
    <Container className="flex flex-col w-full min-h-[270px] h-auto md:h-auto">
      <div className="flex items-center bg-slate-900 p-2 md:px-4 rounded-t-md">
        <h2 className="text-white text-2xl leading-6 grow">
          <span className="block">{city.name}</span>
          {city.state && (
            <span className="text-lg text-gray-300 mr-1">{city.state},</span>
          )}
          {city.country && (
            <span className="text-lg text-gray-300">{city.country}</span>
          )}
        </h2>
        <div className="text-white text-center px-1">
          <span className="block text-xl">{getWeekDay(cityDate.getDay())}</span>
          <span className="text-gray-300">{cityDate.toLocaleDateString()}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center grow gap-0.5 p-3 md:px-4">
        <WeatherItem
          title="Temperaturas máxima e mínima"
          Icon={<BsThermometerHalf size={30} className="-ml-2 mr-0.5" />}
          legend="Max/Min"
          value={`${todayWeather.temperature_max}°/${todayWeather.temperature_min}°`}
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
          value={`${todayWeather.precipitation_probability}%`}
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
