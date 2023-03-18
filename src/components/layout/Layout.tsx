import useTheme from '@/hooks/useTheme';
import { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300  ${
        isDark ? 'dark bg-slate-800' : 'bg-gray-200'
      }`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {children}
    </div>
  );
}

export default Layout;
