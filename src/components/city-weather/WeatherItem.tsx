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
      className="flex items-center justify-between grow px-2 pt-3 pb-0.5
      first:pt-0 last:pt-2 last:pb-0 border-b border-b-gray-800 last:border-none"
    >
      <div className="flex items-center justify-center">
        {Icon}
        <p>{legend}</p>
      </div>
      <p>{value}</p>
    </div>
  );
}

export default WeatherItem;
