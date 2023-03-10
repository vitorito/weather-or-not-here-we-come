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
        className="absolute inset-x-0 top-[120%] w-full  p-2 bg-white
        rounded-md shadow shadow-gray-600/70 z-20 text-base
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
                className="text-slate-700 hover:underline decoration-current"
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
