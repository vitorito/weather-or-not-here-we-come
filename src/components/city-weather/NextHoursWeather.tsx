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
    <Container className="flex flex-col items-center md:col-span-2 overflow-hidden">
      <div className="flex items-center justify-center bg-yellow-800 h-14 w-full">
        <h2 className="text-lg md:text-xl text-white text-center">
          Temperatura nas próximas horas
        </h2>
      </div>
      <ul className="flex items-center w-full overflow-auto px-2 py-4 no-scrollbar">
        {hourlyData.map((hour) => (
          <li
            key={hour.dateTime}
            className="flex flex-col gap-1 justify-between items-center grow text-gray-900
            w-full h-36 px-2 border-r-2 border-yellow-800 last:border-none"
          >
            <span>{hour.hour}:00</span>
            <div className="flex items-end grow">
              <div
                style={{ height: hour.height }}
                className="w-8 rounded-t-xl from-orange-700 to-yellow-400 bg-gradient-to-t"
              />
            </div>
            <span>{hour.temperature}°</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default NextHoursWeather;
