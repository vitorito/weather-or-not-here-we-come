import { FullCityWeatherData } from '@/types/wetherData';
import getDayWeather from '@/util/getDayWeather';
import { useState } from 'react';
import { GiHeavyRain } from 'react-icons/gi';
import Button from '../Button';
import Container from '../Container';

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
    <div
      className="flex flex-col flex-wrap justify-between xsm:flex-row md:flex-nowrap gap-4
      bg-transparent md:col-span-2"
    >
      {daysWeather.map((day) => (
        <Container
          key={day.date}
          className={`xsm:w-[48%] grow text-center overflow-hidden ${
            isShrinked && 'hideable-item'
          }`}
        >
          <div
            className="bg-cyan-900 flex items-center justify-between
            h-12 py-2 px-4 text-white"
          >
            <span className="text-xl">{day.week_day}</span>
            <span className="text-lg">{day.date.substring(0, 5)}</span>
          </div>
          <div className="flex items-center gap-2 bg-white min-h-[105px] px-4 py-2">
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
              <span className="text-sm h-[1.5lh]">{day.weather.name}</span>
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
        </Container>
      ))}
      <Button
        type="button"
        onClick={() => setIsShrinked((prev) => !prev)}
        className="bg-white h-14 -mt-2 border border-current
        text-slate-800 text-lg md:hidden shadow shadow-black/50"
      >
        {isShrinked ? 'Próximos dias' : 'Mostrar menos'}
      </Button>
    </div>
  );
}

export default NextDaysWeather;
