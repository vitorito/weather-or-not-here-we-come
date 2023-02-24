import { CityData, MIN_CITY_NAME_LEN, searchCities } from '@/lib/city';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';

type SearchFormProps = {
  setResults: Dispatch<SetStateAction<CityData[]>>;
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
    <form action="#" className="flex flex-col items-center gap-3">
      <label htmlFor="search" className="text-lg">
        Adicionar Localização
      </label>
      <input
        type="text"
        id="search"
        spellCheck={false}
        autoComplete="off"
        placeholder="Cidade, Estado, País"
        value={cityName}
        onChange={handleCityNameChange}
        className="w-full h-10 bg-gray-200 rounded-lg px-4 outline-none placeholder:text-gray-600"
      />
    </form>
  );
}

export default SearchForm;
