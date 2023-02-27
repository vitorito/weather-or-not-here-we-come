import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`bg-white shadow-md shadow-black/70 rounded-xl ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
