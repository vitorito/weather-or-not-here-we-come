import { ReactNode } from 'react';

type WeatherItemProps = {
  title: string;
  Icon: ReactNode;
  legend: string;
  value: string;
};

function WeatherItem({ title, Icon, legend, value }: WeatherItemProps) {
  return (
    <div
      title={title}
      className="flex items-center justify-between grow
      px-2 pt-3 pb-0.5 first:pt-0 border-b border-b-black last:border-none last:pt-2 last:pb-0"
    >
      <div className="flex items-center justify-center">
        {Icon}
        <span>{legend}</span>
      </div>
      <span>{value}</span>
    </div>
  );
}

export default WeatherItem;
