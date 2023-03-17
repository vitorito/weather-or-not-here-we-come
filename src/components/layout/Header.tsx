import SearchCity from '../search-city/SearchCity';
import ToggleThemeButton from './ToggleThemeButton';

function Header() {
  return (
    <header
      className="relative flex items-center justify-between lg:justify-evenly
      bg-gray-700 dark:bg-gray-900 dark:lg:bg-slate-800 border-b-2
      border-transparent dark:lg:border-gray-900/90 transition-colors duration-500
      w-full h-[10vh] max-h-[90px] px-6 z-10"
    >
      <span className="w-14" />
      <SearchCity className="hidden sm:flex max-w-md md:max-w-lg" />
      <ToggleThemeButton />
    </header>
  );
}

export default Header;
