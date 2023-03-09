import MainContainer from '@/components/MainContainer';
import getCityWeather from '@/api/getCityWeather';

import CityWeather from '@/components/city-weather/CityWeather';
import { cityContext } from '@/providers/CityProvider';
import { FullCityWeatherData } from '@/types/wetherData';
import Head from 'next/head';
import { useContext, useEffect } from 'react';

type FeacturedCitiesProps = {
  city: FullCityWeatherData;
};

function FeacturedCity({ city }: FeacturedCitiesProps) {
  const { setCity } = useContext(cityContext);

  useEffect(() => {
    setCity(city);
  }, [city, setCity]);

  return (
    <>
      <Head>
        <title>{`Clima em ${city.name}`}</title>
        <meta name="description" content="Clima na cidade em destaque" />
      </Head>
      <MainContainer>
        <CityWeather />
      </MainContainer>
    </>
  );
}

const featuredCityInfo = {
  name: 'João Pessoa',
  state: 'Paraíba',
  country: 'Brasil',
  latitude: -7.12,
  longitude: -34.86,
};

export async function getStaticProps() {
  const { latitude, longitude } = featuredCityInfo;
  const featuredCityData = await getCityWeather(latitude, longitude);

  const city = {
    ...featuredCityInfo,
    ...featuredCityData,
  };

  return {
    props: {
      city,
    },
    revalidate: 20 * 60 * 60, // 20 minutes
  };
}

export default FeacturedCity;
