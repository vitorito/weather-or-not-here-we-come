import getWeatherInfo from '@/lib/getWeatherInfo';
import { FullCityWeatherData } from '@/types/wetherData';
import Container from '../Container';
import WindInfo from './WindInfo';

type CurrentWeatherProps = {
  city: FullCityWeatherData;
};

const fortyFiveMinutesInMs = 45 * 60 * 1000;

const getBgStyle = (city: FullCityWeatherData) => {
  const cityDate = new Date(city.date);

  const sunriseStart = new Date(city.daily.sunrise[0]);
  const sunriseEnd = new Date(sunriseStart.getTime() + fortyFiveMinutesInMs);
  const sunsetEnd = new Date(city.daily.sunset[0]);
  const sunsetStart = new Date(sunsetEnd.getTime() - fortyFiveMinutesInMs);

  // sunrise period
  if (cityDate >= sunriseStart && cityDate <= sunriseEnd) {
    return 'from-yellow-400 via-cyan-900 to-slate-900 bg-gradient-to-t';
  }

  // day period
  if (cityDate > sunriseEnd || cityDate < sunsetStart) {
    return 'from-cyan-500 to-sky-900 bg-gradient-to-t';
  }

  // sunset period
  if (cityDate >= sunsetStart && cityDate <= sunsetEnd) {
    return 'from-yellow-500 via-orange-600 to-sky-900 bg-gradient-to-t';
  }

  // night and dawn period
  return 'from-cyan-800 to-slate-900 bg-gradient-to-t';
};

function CurrentWeather({ city }: CurrentWeatherProps) {
  const currentWeather = city.current_weather;
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);

  return (
    <Container
      className={`relative flex flex-col items-center justify-center gap-4 grow
      w-full h-[45vh] max-h-[290px] md:h-80 text-white ${getBgStyle(city)}`}
    >
      <weatherInfo.icon
        title={`Clima ${weatherInfo.name}`}
        className="fill-current z-10"
        size={100}
      />
      <div title="Temperatura" className="z-10">
        <span className="text-6xl">
          {Math.round(currentWeather.temperature)}
        </span>
        <span className="relative -top-7 text-4xl">°</span>
      </div>
      <span title="Clima" className="text-xl z-10">
        {weatherInfo.name}
      </span>
      <WindInfo
        speed={currentWeather.windspeed}
        direction={currentWeather.winddirection}
      />
    </Container>
  );
}

export default CurrentWeather;
