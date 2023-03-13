import { SearchCityData } from '@/api/searchCities';
import { recentSearchesContext } from '@/providers/RecentSearchesProvider';
import { useContext } from 'react';
import { MdAddLocationAlt } from 'react-icons/md';
import Button from '../Button';

type SearchResultProps = {
  result: SearchCityData[];
  emptyResultMsg: string;
};

function SearchResult({ result, emptyResultMsg }: SearchResultProps) {
  const { add } = useContext(recentSearchesContext);

  if (result.length === 0) {
    return <p className='w-full text-center px-4 py-2'>{emptyResultMsg}</p>
  }

  return (
    <ul
      className="flex flex-col gap-1 grow w-full max-h-64
      overflow-y-auto overscroll-contain"
    >
      {result.map((city) => (
        <li key={city.id}>
          <Button
            type="button"
            onMouseDown={() => add(city)}
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
