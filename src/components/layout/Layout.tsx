/* eslint-disable camelcase */

import useTheme from '@/hooks/useTheme';
import { Noto_Sans_Mono, Poppins } from '@next/font/google';
import { ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const mono = Noto_Sans_Mono({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div
      className={`${poppins.variable} ${mono.variable} font-poppins
      flex flex-col justify-between min-h-screen transition-colors duration-300  ${
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
