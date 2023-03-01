import { SearchCityData } from '@/lib/searchCities';
import { MdAddLocationAlt } from 'react-icons/md';

type SearchResultProps = {
  result: SearchCityData[];
};

function SearchResult({ result }: SearchResultProps) {
  return (
    <ul className="flex flex-col gap-1 w-full overflow-y-auto grow">
      {result.map((city) => (
        <li key={city.id}>
          <button
            type="button"
            className="btn flex items-center hover:bg-gray-200"
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
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
