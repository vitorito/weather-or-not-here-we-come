import useTheme from '@/hooks/useTheme';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`flex flex-col justify-between min-h-screen transition-colors duration-300  ${
        isDark ? 'dark bg-slate-800' : 'bg-gray-200'
      }`}
    >
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
