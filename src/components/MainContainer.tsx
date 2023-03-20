import { ReactNode } from 'react';

type MainConatinerProps = {
  children: ReactNode;
  className?: string;
};

function MainContainer({ children, className }: MainConatinerProps) {
  return (
    <main
      className={`w-full max-w-4xl xl:max-w-5xl m-auto
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
