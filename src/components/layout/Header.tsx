import { ThemeControlls } from '@/hooks/useTheme';
import SearchCity from '../search-city/SearchCity';
import Logo from './Logo';
import ToggleThemeButton from './ToggleThemeButton';

function Header({ isDark, toggleTheme }: ThemeControlls) {
  return (
    <header
      className="relative flex items-center justify-between md:justify-evenly
      w-full h-20 md:h-24 px-6 xsm:px-10 sm:px-6 z-10 transition-colors duration-500
      bg-gray-700 dark:bg-gray-900 dark:lg:bg-slate-800 border-y-2
      border-transparent dark:lg:border-b-gray-700"
    >
      <Logo />
      <SearchCity className="hidden sm:flex max-w-md md:max-w-lg" />
      <ToggleThemeButton isDark={isDark} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
