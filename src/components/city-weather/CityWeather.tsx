import { FullCityWeatherData } from '@/types/wetherData';
import CurrentCityWeather from './CurrentCityWeather';
import TodayCityWeather from './TodayCityWeather';

type CityWeatherProps = {
  city: FullCityWeatherData;
};

function CityWeather({ city }: CityWeatherProps) {
  return (
    <div
      className="flex flex-col  items-center justify-between h-full p-3 gap-3
      md:flex-row md:gap-5 md:h-80 xl:h-[350px] md:pt-10"
    >
      <CurrentCityWeather city={city} />
      <TodayCityWeather city={city} />
    </div>
  );
}

export default CityWeather;
