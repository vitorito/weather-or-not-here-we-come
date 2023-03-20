import Head from 'next/head';

import getCityWeather from '@/api/getCityWeather';
import MainContainer from '@/components/MainContainer';
import CityWeather from '@/components/city-weather/CityWeather';
import { recentSearchesContext } from '@/providers/RecentSearchesProvider';
import { FullCityWeatherData } from '@/types/wetherData';
import { useContext, useEffect, useState } from 'react';

type HomeProps = {
  featuredCity: FullCityWeatherData;
};

function Home({ featuredCity }: HomeProps) {
  const { recentSearches } = useContext(recentSearchesContext);
  const [city, setCity] = useState(featuredCity);

  useEffect(() => {
    if (recentSearches.length > 0) {
      const recentCity = recentSearches[0];
      getCityWeather(recentCity.latitude, recentCity.longitude).then(
        (cityData) => {
          setCity({ ...recentCity, ...cityData });
        },
      );
    }
  }, [recentSearches, setCity]);

  return (
    <>
      <Head>
        <title>{`Clima em ${city.name}`}</title>
        <meta
          name="description"
          content={`Previsão do tempo para ${city.name}`}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContainer className="flex justify-center">
        <CityWeather city={city} />
      </MainContainer>
    </>
  );
}

const featuredCityInfo = {
  name: 'João Pessoa',
  admin1: 'Paraíba',
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
      featuredCity: city,
    },
    revalidate: 20 * 60 * 60, // 20 minutes
  };
}

export default Home;
