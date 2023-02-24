import Head from 'next/head';

import MainContainer from '@/components/MainContainer';
import SearchCity from '@/components/search-city/SearchCity';

function Home() {
  return (
    <>
      <Head>
        <title>Wheater Or Not Here We Come</title>
        <meta name="description" content="Site de previsão do tempo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainContainer className="flex items-center justify-center">
        <SearchCity />
      </MainContainer>
    </>
  );
}

export default Home;
