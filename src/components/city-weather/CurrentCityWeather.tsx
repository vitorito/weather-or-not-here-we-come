import getWeatherInfo from '@/lib/getWeatherInfo';
import { Weathercode } from '@/types/wetherData';
import Container from '../Container';
import WindInfo from './WindInfo';

type CurrentCityWeatherProps = {
  currentWeather: {
    temperature: number;
    weathercode: Weathercode;
    windspeed: number;
    winddirection: number;
    time: string;
  };
};

function CurrentCityWeather({ currentWeather }: CurrentCityWeatherProps) {
  const weatherInfo = getWeatherInfo(currentWeather.weathercode);

  return (
    <Container
      className="relative flex flex-col items-center justify-center gap-4 grow a
      w-full md:h-64 text-white from-cyan-900 to-gray-900 bg-gradient-to-t"
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

export default CurrentCityWeather;
