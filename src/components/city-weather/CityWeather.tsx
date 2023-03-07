import { FullCityWeatherData } from '@/types/wetherData';
import CurrentWeather from './CurrentWeather';
import NextDaysWeather from './NextDaysWeather';
import NextHoursWeather from './NextHoursWeather';
import TodayWeather from './TodayWeather';
import SearchCity from '../search-city/SearchCity';

type CityWeatherProps = {
  city: FullCityWeatherData;
};

function CityWeather({ city }: CityWeatherProps) {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-y-5
      w-full h-fit p-3 md:p-6"
    >
      <SearchCity className='-mt-0.5 -mb-1.5 sm:hidden' />
      <CurrentWeather city={city} />
      <TodayWeather city={city} />
      <NextDaysWeather city={city} />
      <NextHoursWeather city={city} />
    </div>
  );
}

export default CityWeather;
