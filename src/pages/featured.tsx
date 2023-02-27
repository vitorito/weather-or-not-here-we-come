import Container from '@/components/Container';
import MainContainer from '@/components/MainContainer';
import CityWeatherThumbnail, {
  CityWeatherData,
} from '@/components/featured-city/CityWeatherThumbnail';
import getCurrentCityWeather from '@/lib/getCurrentCityWeather';
import Head from 'next/head';

type FeacturedCitiesProps = {
  cities: CityWeatherData[];
};

function FeacturedCities({ cities }: FeacturedCitiesProps) {
  return (
    <>
      <Head>
        <title>Clima nas cidades em destaque</title>
        <meta
          name="description"
          content="Clima nas principais cidades do Brasil"
        />
      </Head>
      <MainContainer className="flex flex-col p-4">
        <Container className="max-w-[320px] px-2 py-4 mt-2 mb-4 mx-auto shadow-sm">
          <h1 className="text-center text-xl uppercase">
            Clima nas Principais Cidades
          </h1>
        </Container>
        <ul className="flex flex-wrap items-center justify-center gap-3 w-full">
          {cities.map((city, i) => (
            <li key={i}>
              <button type='button'>
                <CityWeatherThumbnail city={city} className="h-[15vh] sm:max-h-[90px]" />
              </button>
            </li>
          ))}
        </ul>
      </MainContainer>
    </>
  );
}

const citiesInfo = [
  {
    name: 'João Pessoa',
    state: 'Paraíba',
    country: 'Brasil',
    lat: -7.12,
    lon: -34.86,
  },
  {
    name: 'Brasília',
    state: 'Destrito Federal',
    country: 'Brasil',
    lat: -15.78,
    lon: -47.93,
  },
  {
    name: 'São Paulo',
    state: 'São Paulo',
    country: 'Brasil',
    lat: -23.55,
    lon: -46.64,
  },
  {
    name: 'Rio de Janeiro',
    state: 'Rio de Janeiro',
    country: 'Brasil',
    lat: -22.91,
    lon: -43.18,
  },
];

export async function getStaticProps() {
  const citiesData = await Promise.all(
    citiesInfo.map((city) => getCurrentCityWeather(city.lat, city.lon)),
  );

  const cities = citiesInfo.map((city, i) => ({
    ...city,
    ...citiesData[i],
  }));

  return {
    props: {
      cities,
    },
    revalidate: 30 * 60 * 60, // 30 minutes
  };
}

export default FeacturedCities;
