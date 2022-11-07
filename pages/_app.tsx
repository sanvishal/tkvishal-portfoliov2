import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../theme';
import { Router, useRouter } from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { PaletteProvider } from '../contexts/PaletteContext';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    console.log(
      "%clike my portfolio? hit me up on twitter @tk_vishal_tk, let's have a chat ~",
      'color: tomato; font-size: 14px'
    );
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <PaletteProvider>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.pathname} />
        </AnimatePresence>
      </PaletteProvider>
    </ChakraProvider>
  );
}

export default MyApp;
