// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='pt'>
      <Head>
        <link rel='preload' as='image' href='/images/banner-home-1.webp' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
