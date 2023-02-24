// eslint-disable-next-line camelcase
import { Noto_Sans_Mono, Poppins } from '@next/font/google';

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
  children: JSX.Element;
  className?: string;
};

function MainContainer({ children, className }: MainConatinerProps) {
  return (
    <div className="bg-gray-200 w-screen h-screen font-poppins">
      <main
        className={`${poppins.variable} ${mono.variable} max-w-6xl h-full m-auto
        ${className}`}
      >
        {children}
      </main>
    </div>
  );
}

MainContainer.defaultProps = {
  className: '',
};

export default MainContainer;
