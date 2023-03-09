/* eslint-disable @typescript-eslint/no-empty-function */
import { SearchCityData } from '@/api/searchCities';
import { ReactNode, createContext, useMemo, useState } from 'react';
import store from 'store2';

type RecentSearchesProviderValue = {
  recentSearches: SearchCityData[];
  add: (search: SearchCityData) => void; // eslint-disable-line
  clear: () => void;
};

const SEARCHES_KEY = 'recent_searches';
const SEARCHES_LIMIT = 4;

export const recentSearchesContext = createContext<RecentSearchesProviderValue>(
  {
    recentSearches: [],
    add: (search: SearchCityData) => {}, // eslint-disable-line
    clear: () => {},
  },
);

const loadSearches = (): SearchCityData[] => store.get(SEARCHES_KEY, []);

const saveSearches = (searches: SearchCityData[]): void =>
  store.set(SEARCHES_KEY, searches);

const clearSearches = (): void => store.remove(SEARCHES_KEY);

function RecentSearchesProvider({ children }: { children: ReactNode }) {
  const [searches, setSearches] = useState(loadSearches);

  const add = (search: SearchCityData) => {
    setSearches((prev) => {
      const prevSearches = prev.slice(0, SEARCHES_LIMIT - 1);
      const newSearches = [search, ...prevSearches];

      saveSearches(newSearches);
      return newSearches;
    });
  };

  const clear = () => {
    setSearches([]);
    clearSearches();
  };

  const value = useMemo(
    () => ({
      recentSearches: searches,
      add,
      clear,
    }),
    [searches],
  );

  return (
    <recentSearchesContext.Provider value={value}>
      {children}
    </recentSearchesContext.Provider>
  );
}

export default RecentSearchesProvider;
