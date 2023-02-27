import { ReactNode } from 'react';
import Header from './Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default Layout;
