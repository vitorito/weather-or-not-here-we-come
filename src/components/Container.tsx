import { ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={`bg-white dark:bg-gray-700 rounded-md overflow-hidden
      shadow-md shadow-gray-500/70 dark:shadow-gray-900/80
      text-slate-900 dark:text-gray-200
      ${className}`}
    >
      {children}
    </div>
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
