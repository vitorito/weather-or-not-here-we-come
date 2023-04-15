import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br" className='resolution-120:text-[80%] resolution-144:text-[calc(16px*16/24)]'>
      <Head>
        <link rel="shortcut icon" href="/sun.png" type="image/png" />
        <meta
          name="keywords"
          content="Clima, Tempo, Previsão do tempo, Temperatura"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
