import { FullCityWeatherData } from '@/types/wetherData';
import getDayWeather from '@/util/getDayWeather';
import { useState } from 'react';
import { GiHeavyRain } from 'react-icons/gi';
import Button from '../Button';

const daysLimit = 4;

const getDaysWeatherData = (city: FullCityWeatherData) => {
  const days = [];

  for (let i = 1; i <= daysLimit; i++) {
    const dayWeather = getDayWeather(city, i);
    if (dayWeather) days.push(dayWeather);
  }

  return days;
};

type NextDaysWeatherProps = {
  city: FullCityWeatherData;
};

function NextDaysWeather({ city }: NextDaysWeatherProps) {
  const [isShrinked, setIsShrinked] = useState(true);
  const daysWeather = getDaysWeatherData(city);

  return (
    <div className="w-full md:col-span-2 bg-transparent">
      <h2 className="sr-only">Clima para os próximos dias</h2>
      <ul
        className={`grid xsm:grid-cols-2 xl:grid-cols-4 gap-4 ${
          isShrinked
            ? '[&>*:nth-child(-n+1)]:block xsm:[&>*:nth-child(-n+2)]:block'
            : '[&>*]:block'
        }`}
      >
        {daysWeather.map((day) => (
          <li
            key={day.date}
            className="bg-white hidden md:block shadow-md shadow-gray-500/70 rounded-md
            text-center overflow-hidden"
          >
            <h3
              className="bg-cyan-900 flex items-center justify-between
            h-12 py-2 px-4 text-white"
            >
              <span className="text-xl">{day.week_day}</span>
              <span className="text-lg">{day.date.substring(0, 5)}</span>
            </h3>
            <div
              className="flex items-center gap-2 bg-white min-h-[105px]
              px-4 xsm:px-2 sm:px-4 md:px-6 xl:px-2 py-2"
            >
              <div className="flex flex-col w-12 justify-center divide-y-2 divide-gray-400">
                <span className="relative text-2xl text-center">
                  {Math.round(day.temperature_2m_max)}
                  <span className="absolute text-xl -top-1">°</span>
                </span>
                <span className="relative text-xl text-center">
                  {Math.round(day.temperature_2m_min)}
                  <span className="absolute text-base -top-0.5">°</span>
                </span>
              </div>
              <div className="flex flex-col items-center justify-between grow">
                <day.weather.icon size={50} className="fill-gray-900" />
                <p className="text-sm h-[1.5lh]">{day.weather.name}</p>
              </div>
              <div className="flex flex-col gap-1 items-center justify-center w-12">
                <GiHeavyRain
                  title="Probabilidade de chuva"
                  size={30}
                  className="fill-slate-900"
                />
                <span>{day.precipitation_probability_max}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <Button
        type="button"
        onClick={() => setIsShrinked((prev) => !prev)}
        className="bg-white h-14 mt-3 border border-current
        text-slate-800 text-lg md:hidden shadow shadow-black/50"
      >
        {isShrinked ? 'Próximos dias' : 'Mostrar menos'}
      </Button>
    </div>
  );
}

export default NextDaysWeather;
