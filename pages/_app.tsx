import type { NextPage } from 'next';
import type { AppProps } from 'next/app'

import { NextUIProvider } from '@nextui-org/react';

import '../styles/globals.css'
import { darkTheme } from '../themes';


export type NextPageWithLayout<P = {}, IP = P> = NextPage<P,IP> & {
  getLayout?: (page:JSX.Element) => JSX.Element;
}

type AppPropsWIthLayout = AppProps & {Component: NextPageWithLayout};

function App({ Component, pageProps }: AppPropsWIthLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>    
    )
}

export default App

/* return getLayout(
  <NextUIProvider theme={darkTheme}>
    <Component {...pageProps} />
  </NextUIProvider>    
  ) */

/*   return(
    <NextUIProvider theme={darkTheme}>
      {getLayout(<Component {...pageProps} />)}
    </NextUIProvider>    
  ) */