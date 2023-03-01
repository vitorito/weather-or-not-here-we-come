import { ReactNode } from 'react';

type WeatherItemProps = {
  title: string;
  Icon: ReactNode;
  legend: string;
  value: string;
  border?: boolean;
};

function WeatherItem({ title, Icon, legend, value, border }: WeatherItemProps) {
  return (
    <div
      title={title}
      className={`flex items-center justify-between p-2 pt-3 pb-0.5 ${
        border ? 'border-b border-b-black' : ''
      }`}
    >
      <div className="flex items-center justify-center">
        {Icon}
        <span>{legend}</span>
      </div>
      <span>{value}</span>
    </div>
  );
}

WeatherItem.defaultProps = {
  border: true,
};

export default WeatherItem;
