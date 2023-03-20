import { useEffect, useState } from 'react';
import store from 'store2';

const THEME_LOCAL_KEY = 'theme_preference';

const saveThemePreference = (isDark: boolean) =>
  store.set(THEME_LOCAL_KEY, isDark);

const loadLocalThemePreference = (): boolean | null =>
  store.get(THEME_LOCAL_KEY, null);

const getUserThemePreference = (): boolean =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export type ThemeControlls = {
  isDark: boolean;
  toggleTheme: () => void;
};

function useTheme(): ThemeControlls {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    let prefersDark = loadLocalThemePreference();

    if (prefersDark === null) {
      prefersDark = getUserThemePreference();
      saveThemePreference(prefersDark);
    }

    setIsDark(prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newPreference = !prev;
      saveThemePreference(newPreference);
      return newPreference;
    });
  };

  return {
    isDark,
    toggleTheme,
  };
}

export default useTheme;
