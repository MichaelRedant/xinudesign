// pages/_app.tsx
import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import theme from '../theme/theme';
import ScrollUpButton from '../components/ScrollUpButton';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <ScrollUpButton />
    </ChakraProvider>
  );
}

export default MyApp;
