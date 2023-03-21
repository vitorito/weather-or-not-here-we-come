import { FullCityWeatherData } from '@/types/wetherData';
import getNextHoursData from '@/util/getNextHoursWeatherData';
import { useMemo } from 'react';
import Container from '../Container';

type NextHoursWeatherProps = {
  city: FullCityWeatherData;
};

function NextHoursWeather({ city }: NextHoursWeatherProps) {
  const hourlyData = useMemo(() => getNextHoursData(city.hourly), [city]);

  return (
    <Container className="flex flex-col items-center md:col-span-2">
      <div className="flex items-center justify-center bg-yellow-800 dark:bg-gray-900 h-14 w-full">
        <h2 className="text-lg md:text-xl text-white dark:text-current text-center">
          Temperatura nas próximas horas
        </h2>
      </div>
      <div className="w-full px-2 py-3">
        <ul className="flex items-center w-full overflow-auto no-scrollbar">
          {hourlyData.map((hour) => (
            <li
              key={hour.dateTime}
              className="flex flex-col gap-1 justify-between items-center grow
              w-full h-36 px-2 first:pl-1 last:pr-1
              border-r-2 border-yellow-800 dark:border-gray-500 last:border-none"
            >
              <span>{hour.hour}:00</span>
              <div className="flex flex-col items-center justify-end grow">
                <span className="relative">
                  {hour.temperature}
                  <span className="absolute top-0 -right-[.7ch]">°</span>
                </span>
                <div
                  style={{ height: hour.height }}
                  className="w-8 rounded-t-xl bg-gradient-to-t from-orange-700 to-yellow-400
                dark:from-slate-900/80 dark:to-blue-200"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}

export default NextHoursWeather;
