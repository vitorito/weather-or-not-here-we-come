import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-br">
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
