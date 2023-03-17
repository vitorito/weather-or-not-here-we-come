import { ReactNode, createContext, useEffect, useMemo, useState } from 'react';
import store from 'store2';

type ThemeProviderValue = {
  isDark: boolean;
  toggleTheme: () => void;
};

const THEME_LOCAL_KEY = 'theme_preference';

const saveThemePreference = (isDark: boolean) =>
  store.set(THEME_LOCAL_KEY, isDark);

const loadLocalThemePreference = (): boolean | null =>
  store.get(THEME_LOCAL_KEY, null);

const getUserThemePreference = (): boolean =>
  window.matchMedia('(prefers-color-scheme: dark)').matches;

export const themeContext = createContext<ThemeProviderValue>({
  isDark: true,
  toggleTheme: () => {}, // eslint-disable-line
});

function ThemeProvider({ children }: { children: ReactNode }) {
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

  const value = useMemo(
    () => ({
      isDark,
      toggleTheme,
    }),
    [isDark],
  );

  return (
    <themeContext.Provider value={value}>{children}</themeContext.Provider>
  );
}

export default ThemeProvider;
