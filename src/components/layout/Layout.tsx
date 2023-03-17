import { themeContext } from '@/providers/ThemeProvider';
import { ReactNode, useContext } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isDark } = useContext(themeContext);
  return (
    <div
      className={`min-h-screen transition-colors duration-300  ${
        isDark ? 'dark bg-slate-800' : 'bg-gray-200'
      }`}
    >
      <Header />
      {children}
    </div>
  );
}

export default Layout;
