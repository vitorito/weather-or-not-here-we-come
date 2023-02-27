import { CurrentWeatherCityData } from '@/lib/getCurrentCityWeather';
import { BsFillCloudRainHeavyFill } from 'react-icons/bs';
import Container from '../Container';

export type CityWeatherData = {
  name: string;
  state?: string;
  country?: string;
} & CurrentWeatherCityData;

type CityWeatherThumbnailProps = {
  city: CityWeatherData;
  className?: string;
};

function CityWeatherThumbnail({ city, className }: CityWeatherThumbnailProps) {
  return (
    <Container
      className={`hover:bg-yellow-400 flex items-center grow
      w-[90vw] max-w-[320px] sm:max-w-[370px] py-6 px-4 gap-3 ${className}`}
    >
      <div className="flex flex-wrap grow text-left">
        <span className="block w-full text-xl">{city.name}</span>
        {city.state && (
          <span className="text-gray-600 mr-1">{city.state}, </span>
        )}
        {city.country && <span className="text-gray-600">{city.country}</span>}
      </div>
      <BsFillCloudRainHeavyFill
        size={30}
        className="min-w-[30px] fill-slate-800"
      />
      <span className="text-4xl h-min">
        {Math.round(city.temperature)}
        <span className="relative -top-4 text-2xl">°</span>
      </span>
    </Container>
  );
}

CityWeatherThumbnail.defaultProps = {
  className: '',
};

export default CityWeatherThumbnail;
