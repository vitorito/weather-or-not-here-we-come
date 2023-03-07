import SearchCity from '../search-city/SearchCity';

function Header() {
  return (
    <header className="relative flex items-center bg-gray-700 w-full h-[10vh] max-h-[90px] z-10">
      <SearchCity className="hidden sm:flex max-w-md md:max-w-lg m-auto" />
    </header>
  );
}

export default Header;
