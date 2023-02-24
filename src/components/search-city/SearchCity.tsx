import { CityData } from '@/lib/city';
import { useState } from 'react';
import SearchForm from './SearchForm';
import SearchResult from './SearchResult';
import SelectCurrentLocationButton from './SelectCurrentLocationButton';

function SearchCity() {
  const [results, setResults] = useState<CityData[]>([]);

  return (
    <div
      className="flex flex-col w-80 h-72 p-3 bg-white rounded-xl shadow-md shadow-black/70
      font-poppins overflow-hidden"
    >
      <SearchForm setResults={setResults} />
      <SelectCurrentLocationButton />
      {results.length > 0 && <SearchResult result={results} />}
    </div>
  );
}

export default SearchCity;
