import Head from 'next/head';

// eslint-disable-next-line camelcase
import { Noto_Sans_Mono, Poppins } from '@next/font/google';

const poppins = Poppins({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
});

const mono = Noto_Sans_Mono({
  weight: ['300', '400', '600'],
  subsets: ['latin'],
  variable: '--font-mono',
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Wheater Or Not Here We Come</title>
        <meta name="description" content="Site de previsão do tempo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={`${poppins.variable} ${mono.variable} font-poppins`}>
        <h1 className="bg-black text-white">Whater Or Not Here We Come</h1>
      </main>
    </>
  );
}
