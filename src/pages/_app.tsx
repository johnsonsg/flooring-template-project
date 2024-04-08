import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/color-theme';
import '@/styles/globals.css';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp;