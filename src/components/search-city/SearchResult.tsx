import useRecentSearches from '@/hooks/useRecentsSearches';
import getCityWeather from '@/lib/getCityWeather';
import { SearchCityData } from '@/lib/searchCities';
import { cityContext } from '@/providers/CityProvider';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { MdAddLocationAlt } from 'react-icons/md';
import Button from '../Button';

type SearchResultProps = {
  result: SearchCityData[];
};

function SearchResult({ result }: SearchResultProps) {
  const { setCity } = useContext(cityContext);
  const { add } = useRecentSearches();
  const router = useRouter();

  const handleCitySelect = async (city: SearchCityData) => {
    const { latitude, longitude } = city;
    const cityData = await getCityWeather(latitude, longitude);

    add(city);
    setCity({
      state: city.admin1 || '',
      ...city,
      ...cityData,
    });

    router.push('/');
  };

  return (
    <ul
      className="relative flex flex-col gap-1 grow w-full max-h-64
      overflow-y-auto overscroll-contain"
    >
      {result.map((city) => (
        <li key={city.id}>
          <Button
            type="button"
            onMouseDown={async () => handleCitySelect(city)}
            className="flex items-center hover:bg-gray-200"
          >
            <div className="flex flex-wrap grow">
              <p className="w-full">{city.name}</p>
              <p className="flex flex-wrap grow justify-center">
                {city.admin1 && (
                  <span className="text-sm text-gray-600 mr-1">
                    {city.admin1},
                  </span>
                )}
                <span className="text-sm text-gray-600">{city.country}</span>
              </p>
            </div>
            <MdAddLocationAlt
              size={30}
              className="fill-slate-700 min-w-[30px] h-full"
            />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
