import Head from 'next/head';

import getCityWeather from '@/api/getCityWeather';
import MainContainer from '@/components/MainContainer';
import CityWeather from '@/components/city-weather/CityWeather';
import useRecentSearches from '@/hooks/useRecentsSearches';
import { cityContext } from '@/providers/CityProvider';
import { FullCityWeatherData } from '@/types/wetherData';
import { useContext, useEffect } from 'react';

type HomeProps = {
  city: FullCityWeatherData;
};

function Home({ city }: HomeProps) {
  const { recentSearches } = useRecentSearches();
  const { setCity } = useContext(cityContext);

  useEffect(() => {
    setCity(city);

    if (recentSearches.length > 0) {
      const recentCity = recentSearches[0];
      getCityWeather(recentCity.latitude, recentCity.longitude).then(
        (cityData) => {
          setCity({ ...recentCity, ...cityData });
        },
      );
    }
  }, [city, recentSearches, setCity]);

  return (
    <>
      <Head>
        <title>Wheater Or Not Here We Come</title>
        <meta name="description" content="Site de previsão do tempo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContainer className="flex justify-center">
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

export default Home;
