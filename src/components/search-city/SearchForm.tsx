import {
  MIN_CITY_NAME_LEN,
  SearchCityData,
  searchCities,
} from '@/api/searchCities';
import { recentSearchesContext } from '@/providers/RecentSearchesProvider';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { FaSearch } from 'react-icons/fa';

type SearchFormProps = {
  setResults: Dispatch<SetStateAction<SearchCityData[]>>;
  setShowRecents: Dispatch<SetStateAction<boolean>>;
};

function SearchForm({ setResults, setShowRecents }: SearchFormProps) {
  const [cityName, setCityName] = useState('');
  const { recentSearches } = useContext(recentSearchesContext);

  useEffect(() => {
    setCityName('');
    setResults([]);
    setShowRecents(true);
  }, [recentSearches, setResults, setShowRecents]);

  const handleCityNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCityName(value);
    setShowRecents(value.length < MIN_CITY_NAME_LEN);

    if (value.length < MIN_CITY_NAME_LEN) {
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
        className="w-full h-12 xsm:h-14 px-4 bg-white dark:bg-gray-300 peer
        opacity-75 sm:opacity-100 focus:opacity-100 shadow shadow-gray-600/60
        text-gray-800 text-xl text-center  rounded-lg outline-none caret-slate-600
        placeholder:text-slate-600 dark:placeholder:text-gray-900 placeholder:text-lg
        focus:placeholder:text-transparent dark:focus:placeholder:text-transparent
        placeholder:transition-colors placeholder:duration-300 focus:placeholder:duration-[0ms]"
      />
      <FaSearch
        size={20}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2
        text-gray-500 dark:text-slate-600 peer-focus:text-black
        dark:peer-focus:text-slate-800 pointer-events-none"
      />
    </form>
  );
}

export default SearchForm;
