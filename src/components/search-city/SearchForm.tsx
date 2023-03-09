import {
  MIN_CITY_NAME_LEN,
  SearchCityData,
  searchCities,
} from '@/api/searchCities';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchFormProps = {
  setResults: Dispatch<SetStateAction<SearchCityData[]>>;
};

function SearchForm({ setResults }: SearchFormProps) {
  const [cityName, setCityName] = useState('');

  const handleCityNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCityName(value);

    if (value.length <= MIN_CITY_NAME_LEN) {
      setResults([]);
      return;
    }
    searchCities(value).then((cities) => setResults(cities));
  };

  return (
    <form
      action=""
      onSubmit={(e) => e.preventDefault()}
      className="relative flex flex-col items-center gap-3 w-full peer"
    >
      <label htmlFor="search" className="text-lg sr-only">
        Adicionar localização
      </label>
      <input
        type="text"
        id="search"
        spellCheck={false}
        autoComplete="off"
        placeholder="Pesquisar cidade"
        value={cityName}
        onChange={handleCityNameChange}
        className="w-full h-12 xsm:h-14 px-4 bg-white opacity-75 sm:opacity-100 focus:opacity-100 peer
        text-gray-800 text-xl text-center shadow shadow-gray-600/60 rounded-lg outline-none
        placeholder:text-slate-600 placeholder:text-lg focus:placeholder:text-transparent
        placeholder:transition-colors placeholder:duration-300 focus:placeholder:duration-[0ms]"
      />
      <FaSearch
        size={20}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-gray-500
        peer-focus:text-slate-700 pointer-events-none"
      />
    </form>
  );
}

export default SearchForm;
