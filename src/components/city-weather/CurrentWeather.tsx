import { FullCityWeatherData } from '@/types/wetherData';
import getWeatherInfo from '@/util/getWeatherInfo';
import Container from '../Container';
import WindInfo from './WindInfo';

const fortyFiveMinutesInMs = 45 * 60 * 1000;

const getBgStyle = (city: FullCityWeatherData) => {
  const cityDate = new Date(city.date);

  const sunriseStart = new Date(city.daily.sunrise[0]);
  const sunriseEnd = new Date(sunriseStart.getTime() + fortyFiveMinutesInMs);
  const sunsetEnd = new Date(city.daily.sunset[0]);
  const sunsetStart = new Date(sunsetEnd.getTime() - fortyFiveMinutesInMs);

  // sunrise period
  if (cityDate >= sunriseStart && cityDate <= sunriseEnd) {
    return 'from-amber-500 to-sky-800 bg-gradient-to-t';
  }

  // day period
  if (cityDate > sunriseEnd && cityDate < sunsetStart) {
    return 'from-cyan-500 to-sky-900 bg-gradient-to-t';
  }

  // sunset period
  if (cityDate >= sunsetStart && cityDate <= sunsetEnd) {
    return 'from-amber-500 via-orange-600 to-sky-800 bg-gradient-to-t';
  }

  // night and dawn period
  return 'from-cyan-700 to-slate-900 bg-gradient-to-t';
};

type CurrentWeatherProps = {
  city: FullCityWeatherData;
};

function CurrentWeather({ city }: CurrentWeatherProps) {
  const currentWeather = city.current_weather;
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);

  return (
    <Container
      className={`relative flex flex-col items-center justify-center gap-4
      w-full h-[45vh] max-h-[280px] ${getBgStyle(city)}`}
    >
      <h2 className="sr-only">Clima atual</h2>
      <weatherInfo.icon
        title={`Clima ${weatherInfo.name}`}
        className="text-white fill-current"
        size={100}
      />
      <div title="Temperatura atual" className="relative -right-1 text-white">
        <span className="text-6xl">
          {Math.round(currentWeather.temperature)}
        </span>
        <span className="relative -top-7 text-4xl">°</span>
      </div>
      <p title="Clima atual" className="text-xl text-white">
        {weatherInfo.name}
      </p>
      <WindInfo
        speed={currentWeather.windspeed}
        direction={currentWeather.winddirection}
      />
    </Container>
  );
}

export default CurrentWeather;
