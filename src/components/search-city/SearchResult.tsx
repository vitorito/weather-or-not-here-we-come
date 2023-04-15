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
    return <p className="w-full text-center px-4 py-2">{emptyResultMsg}</p>;
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
            className="flex items-center hover:bg-gray-200 dark:hover:bg-slate-800
            dark:sm:hover:bg-slate-900 dark:lg:hover:bg-slate-800"
          >
            <div className="flex flex-wrap grow">
              <p className="w-full">{city.name}</p>
              <p
                className="flex flex-wrap grow justify-center
              text-sm text-gray-700 dark:text-gray-400"
              >
                {city.admin1 && <span className="mr-1">{city.admin1},</span>}
                <span>{city.country}</span>
              </p>
            </div>
            <MdAddLocationAlt
              size="1.875rem"
              className="fill-slate-700 dark:fill-gray-400 min-w-[1.875rem] h-full"
            />
          </Button>
        </li>
      ))}
    </ul>
  );
}

export default SearchResult;
