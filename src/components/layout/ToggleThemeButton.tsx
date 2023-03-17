import { themeContext } from '@/providers/ThemeProvider';
import { useContext } from 'react';
import { BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

function ToggleThemeButton() {
  const { isDark, toggleTheme } = useContext(themeContext);

  return (
    <button
      type="button"
      title={`Alterar para tema ${isDark ? 'claro' : 'escuro'}`}
      onClick={toggleTheme}
      className="relative flex items-center justify-center w-12 aspect-square rounded-md
        border-2 border-transparent hover:border-gray-400 focus-visible:border-gray-400
        hover:shadow-md shadow-slate-900 outline-none transition-colors text-gray-200
        [&>*]:transition [&>*]:duration-300"
    >
      <BsMoonStarsFill
        size={30}
        className="absolute rotate-45 dark:rotate-0 fill-transparent dark:fill-current
        opacity-0 dark:opacity-100"
      />
      <BsSunFill
        size={32}
        className="absolute rotate-90 dark:rotate-0 fill-current dark:fill-transparent
        opacity-100 dark:opacity-0"
      />
    </button>
  );
}

export default ToggleThemeButton;
