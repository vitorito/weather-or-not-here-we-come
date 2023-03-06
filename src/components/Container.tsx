import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`bg-white shadow-md shadow-gray-500/70 rounded-md ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
