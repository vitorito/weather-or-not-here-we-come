import Head from 'next/head';

import MainContainer from '@/components/MainContainer';
import CityWeather from '@/components/city-weather/CityWeather';
import useRecentSearches from '@/hooks/useRecentsSearches';
import getCityWeather from '@/lib/getCityWeather';
import { cityContext } from '@/providers/CityProvider';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

function Home() {
  const { recentSearches } = useRecentSearches();
  const { setCity } = useContext(cityContext);
  const router = useRouter();

  useEffect(() => {
    if (recentSearches.length > 0) {
      const city = recentSearches[0];
      getCityWeather(city.latitude, city.longitude).then((cityData) => {
        setCity({ ...city, ...cityData });
      });
    } else {
      router.push('/featured');
    }
  }, [recentSearches, router, setCity]);

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

export default Home;
