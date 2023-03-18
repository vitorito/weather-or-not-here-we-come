import { HourlyWeatherData } from '@/types/wetherData';

type HourWeatherData = {
  hour: string;
  temperature: number;
  dateTime: string;
  height: string;
};

const calculateTemperatureHeight = (
  temperature: number,
  maxTemperature: number,
  minTemperature: number,
) => {
  const maxH = 80;
  const minH = 40;
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
      minTemperature = Math.min(minTemperature, temperature);

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
    // eslint-disable-next-line
    hour.height = calculateTemperatureHeight(
      hour.temperature,
      maxTemperature,
      minTemperature,
    );
  });

  return data;
};

export default getNextHoursData;
