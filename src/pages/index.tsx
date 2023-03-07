import Head from 'next/head';

import MainContainer from '@/components/MainContainer';
import CityWeather from '@/components/city-weather/CityWeather';
import { cityContext } from '@/providers/CityProvider';
import { useRouter } from 'next/router';
import { useContext, useEffect } from 'react';

function Home() {
  const { city } = useContext(cityContext);
  const router = useRouter();

  useEffect(() => {
    if (!city.name) {
      router.push('/featured');
    }
  }, [city, router]);

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
