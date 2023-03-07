import { Weathercode } from '@/types/wetherData';
import { IconType } from 'react-icons';
import {
  BsCloudDrizzle,
  BsCloudFog,
  BsCloudHail,
  BsCloudHaze1,
  BsCloudLightningRain,
  BsCloudRain,
  BsCloudRainHeavy,
  BsCloudSnow,
  BsClouds,
  BsCloudy,
  BsSnow2,
} from 'react-icons/bs';
import { IoPartlySunnyOutline } from 'react-icons/io5';
import { MdOutlineWbSunny } from 'react-icons/md';

type WeatherInfo = {
  name: string;
  icon: IconType;
};

export const weatherInfos: Record<Weathercode, WeatherInfo> = {
  0: {
    name: 'Ensolarado',
    icon: MdOutlineWbSunny,
  },
  1: {
    name: 'Parcialmente Ensolarado',
    icon: IoPartlySunnyOutline,
  },
  2: {
    name: 'Parcialmente Nublado',
    icon: BsCloudy,
  },
  3: {
    name: 'Nublado',
    icon: BsClouds,
  },
  45: {
    name: 'Nevoeiro',
    icon: BsCloudHaze1,
  },
  48: {
    name: 'Geada',
    icon: BsCloudFog,
  },
  51: {
    name: 'Garoa Leve',
    icon: BsCloudDrizzle,
  },
  53: {
    name: 'Garoa',
    icon: BsCloudDrizzle,
  },
  55: {
    name: 'Garoa Pesada',
    icon: BsCloudDrizzle,
  },
  56: {
    name: 'Garoa Congelante Leve',
    icon: BsCloudSnow,
  },
  57: {
    name: 'Garoa Congelante Densa',
    icon: BsCloudSnow,
  },
  61: {
    name: 'Chuva Leve',
    icon: BsCloudRain,
  },
  63: {
    name: 'Chuva Moderada',
    icon: BsCloudRain,
  },
  65: {
    name: 'Chuva Pesada',
    icon: BsCloudRainHeavy,
  },
  66: {
    name: 'Chuva Congelante Leve',
    icon: BsCloudSnow,
  },
  67: {
    name: 'Chuva Congelante Pesada',
    icon: BsCloudSnow,
  },
  71: {
    name: 'Nevasca Leve',
    icon: BsSnow2,
  },
  73: {
    name: 'Nevasca Moderada',
    icon: BsSnow2,
  },
  75: {
    name: 'Nevasca Pesada',
    icon: BsSnow2,
  },
  77: {
    name: 'Nevasca',
    icon: BsSnow2,
  },
  80: {
    name: 'Pancadas Leves de Chuva',
    icon: BsCloudRain,
  },
  81: {
    name: 'Pancadas de Chuva',
    icon: BsCloudRainHeavy,
  },
  82: {
    name: 'Pancadas Violentas de Chuva',
    icon: BsCloudRainHeavy,
  },
  85: {
    name: 'Chuvas Leves de Neve',
    icon: BsCloudSnow,
  },
  86: {
    name: 'Chuvas Leves de Neve',
    icon: BsCloudSnow,
  },
  95: {
    name: 'Tempestade',
    icon: BsCloudLightningRain,
  },
  96: {
    name: 'Tempestade Leve de Granizo',
    icon: BsCloudHail,
  },
  99: {
    name: 'Tempestade Pesada de Granizo',
    icon: BsCloudHail,
  },
};

function getWeatherInfo(weathercode: Weathercode): WeatherInfo {
  return weatherInfos[weathercode] || weatherInfos[0];
}

export default getWeatherInfo;
