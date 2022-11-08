import { ColorModeScript } from '@chakra-ui/react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { theme } from '../theme';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <title>Vishal TK</title>
          <meta property="og:title" content="Vishal TK" />
          <meta property="og:description" content="Developer x Designer" />
          <meta property="og:url" content="https://www.vishaltk.dev" />
          <meta property="og:image" content="https://vishaltk.dev/images/og.jpg" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Vishal TK" />
          <meta property="og:locale" content="en_US" />
          <meta name="twitter:creator" content="@tk_vishal_tk" />
          <meta name="twitter:title" content="Vishal TK" />
          <meta name="twitter:description" content="Developer x Designer" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:image" content="https://vishaltk.dev/images/og.jpg"></meta>
          <meta name="author" content="Vishal TK" />
          <meta name="description" content="Developer x Designer" />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
