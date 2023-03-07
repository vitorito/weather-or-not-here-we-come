import { SearchCityData } from '@/lib/searchCities';
import { useState } from 'react';
import SearchForm from './SearchForm';
import SelectCurrentLocationButton from './SelectCurrentLocationButton';
import SearchResult from './SearchResult';

type SearchCityProps = {
  className?: string;
};

function SearchCity({ className }: SearchCityProps) {
  const [results, setResults] = useState<SearchCityData[]>([]);

  return (
    <div className={`relative flex w-full ${className}`}>
      <SearchForm setResults={setResults} />
      <div
        className="absolute inset-x-0 top-[120%] w-full p-2 bg-white
        rounded-md shadow shadow-gray-600/70 z-20 text-base
        scale-0 peer-focus-within:scale-100 transition-transform duration-300
        [&_button]:py-1 [&_button]:px-2"
      >
        <SelectCurrentLocationButton />
        <SearchResult result={results} />
      </div>
    </div>
  );
}

SearchCity.defaultProps = {
  className: '',
};

export default SearchCity;
