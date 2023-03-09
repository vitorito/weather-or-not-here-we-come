/* eslint-disable no-param-reassign */
import { FullCityWeatherData, HourlyWeatherData } from '@/types/wetherData';
import { useMemo } from 'react';
import Container from '../Container';

type HourWeatherData = {
  hour: string;
  temperature: number;
  dateTime: string;
  height: string;
};

type NextHoursWeatherProps = {
  city: FullCityWeatherData;
};

const calculateTemperatureHeight = (
  temperature: number,
  maxTemperature: number,
  minTemperature: number,
) => {
  const maxH = 90;
  const minH = 50;
  const deltaH = maxH - minH;
  const maxDeltaT = maxTemperature - minTemperature;
  const deltaT = maxTemperature - temperature;

  return `${maxH - (deltaT * deltaH) / maxDeltaT}%`;
};

const getNextHoursData = (hourly: HourlyWeatherData): HourWeatherData[] => {
  const data: HourWeatherData[] = [];
  const now = new Date();
  const hourNow = new Date(`${now.toDateString()} ${now.getHours()}:00`);

  let maxTemperature = Number.MIN_SAFE_INTEGER;
  let minTemperature = Number.MAX_SAFE_INTEGER;

  let i = 0;
  const hoursLimit = 12;
  const step = 1;
  const iterationLimit = hoursLimit * step + 24;
  while (data.length < hoursLimit && i < iterationLimit) {
    const hourDate = new Date(hourly.time[i]);

    if (hourDate >= hourNow) {
      const temperature = Math.round(hourly.temperature_2m[i]);
      maxTemperature = Math.max(maxTemperature, temperature);
      minTemperature = Math.min(maxTemperature, temperature);

      data.push({
        temperature,
        hour: String(hourDate.getHours()).padStart(2, '0'),
        dateTime: hourly.time[i],
        height: '',
      });

      i += step;
    } else {
      i++;
    }
  }

  data.forEach((hour) => {
    hour.height = calculateTemperatureHeight(
      hour.temperature,
      maxTemperature,
      minTemperature,
    );
  });

  return data;
};

function NextHoursWeather({ city }: NextHoursWeatherProps) {
  const hourlyData = useMemo(() => getNextHoursData(city.hourly), [city]);
  return (
    <Container className="flex flex-col items-center md:col-span-2 overflow-hidden">
      <div className="flex items-center justify-center bg-yellow-800 h-14 w-full">
        <h3 className="text-lg md:text-xl text-white">
          Temperatura nas próximas horas
        </h3>
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
