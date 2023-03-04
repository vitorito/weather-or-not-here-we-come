import { SearchCityData } from '@/lib/searchCities';
import { MdAddLocationAlt } from 'react-icons/md';
import Button from '../Button';

type SearchResultProps = {
  result: SearchCityData[];
};

function SearchResult({ result }: SearchResultProps) {
  return (
    <ul className="flex flex-col gap-1 w-full overflow-y-auto grow">
      {result.map((city) => (
        <li key={city.id}>
          <Button
            type="button"
            className="flex items-center hover:bg-gray-200"
          >
            <div className="flex flex-wrap grow">
              <div className="w-full">{city.name}</div>
              <div className="flex flex-wrap grow justify-center">
                {city.admin1 && (
                  <span className="text-sm text-gray-600 mr-1">
                    {city.admin1},
                  </span>
                )}
                <span className="text-sm text-gray-600">{city.country}</span>
              </div>
            </div>
            <MdAddLocationAlt
              size={30}
              className="fill-slate-800 min-w-[30px] h-full"
            />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
