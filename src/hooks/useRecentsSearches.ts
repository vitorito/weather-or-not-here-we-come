import { SearchCityData } from '@/api/searchCities';
import { useState } from 'react';
import store from 'store2';

const SEARCHES_KEY = 'recent_searches';
const SEARCHES_LIMIT = 4;

const loadSearches = (): SearchCityData[] => store.get(SEARCHES_KEY, []);

const saveSearches = (searches: SearchCityData[]): void =>
  store.set(SEARCHES_KEY, searches);

const clearSearches = (): void => store.remove(SEARCHES_KEY);

function useRecentSearches() {
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

  return {
    recentSearches: searches,
    add,
    clear,
  };
}

export default useRecentSearches;
