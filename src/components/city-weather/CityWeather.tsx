import { FullCityWeatherData } from '@/types/wetherData';
import CurrentWeather from './CurrentWeather';
import NextDaysWeather from './NextDaysWeather';
import TodayWeather from './TodayWeather';

type CityWeatherProps = {
  city: FullCityWeatherData;
};

function CityWeather({ city }: CityWeatherProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-5
      w-full h-fit p-3 md:p-6"
    >
      <CurrentWeather city={city} />
      <TodayWeather city={city} />
      <NextDaysWeather city={city} />
    </div>
  );
}

export default CityWeather;
