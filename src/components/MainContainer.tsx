// eslint-disable-next-line camelcase
import { Noto_Sans_Mono, Poppins } from '@next/font/google';
import { ReactNode } from 'react';

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

type MainConatinerProps = {
  children: ReactNode;
  className?: string;
};

function MainContainer({ children, className }: MainConatinerProps) {
  return (
    <main
      className={`${poppins.variable} ${mono.variable} font-poppins max-w-4xl h-[90vh] m-auto
        ${className}`}
    >
      {children}
    </main>
  );
}

MainContainer.defaultProps = {
  className: '',
};

export default MainContainer;
