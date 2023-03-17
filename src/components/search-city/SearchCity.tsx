import { SearchCityData } from '@/api/searchCities';
import { recentSearchesContext } from '@/providers/RecentSearchesProvider';
import { useContext, useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';

type SearchCityProps = {
  className?: string;
};

function SearchCity({ className }: SearchCityProps) {
  const [results, setResults] = useState<SearchCityData[]>([]);
  const [showRecents, setShowRecents] = useState(true);
  const { recentSearches, clear } = useContext(recentSearchesContext);

  return (
    <div className={`relative flex w-full ${className}`}>
      <SearchForm setResults={setResults} setShowRecents={setShowRecents} />
      <div
        className="absolute inset-x-0 top-[120%] w-full p-2 rounded-md z-10
        bg-white dark:bg-slate-900 sm:dark:bg-gray-800 dark:lg:bg-slate-900
        shadow shadow-gray-500/70 dark:shadow-gray-900/70
        text-base text-slate-900 dark:text-gray-200
        scale-0 peer-focus-within:scale-100 transition-transform duration-300
        [&_button]:py-1 [&_button]:px-2"
      >
        {showRecents ? (
          <>
            <div className="flex items-center justify-between px-4 py-2">
              <h3 className="text-lg">Buscas Recentes</h3>
              <button
                type="button"
                onMouseDown={clear}
                className="text-sm sm:text-base text-gray-700 dark:text-gray-400
                hover:underline decoration-current"
              >
                Limpar buscas
              </button>
            </div>
            <SearchResult
              emptyResultMsg="Não há buscas recentes"
              result={recentSearches}
            />
          </>
        ) : (
          <SearchResult
            emptyResultMsg="Sem resultados para a busca"
            result={results}
          />
        )}
      </div>
    </div>
  );
}

SearchCity.defaultProps = {
  className: '',
};

export default SearchCity;
