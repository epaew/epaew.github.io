import { Html, Head, Main, NextScript } from 'next/document';

const Document = () =>
  <Html>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Allura|Kite+One|Noto+Sans+JP&display=swap"
      />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>;

export default Document;
