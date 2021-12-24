import { useEffect } from 'react';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';
import { Global, css } from '@emotion/core';
import { MDXProvider } from '@mdx-js/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import Router from 'next/router';
import * as Fathom from 'fathom-client';

import MDXComponents from '@/components/MDXComponents';
import { AuthProvider } from '@/lib/auth';
import customTheme from '@/styles/theme';

import SEO from '../next-seo.config';

Router.events.on('routeChangeComplete', () => {
  Fathom.trackPageview();
});

const GlobalStyle = ({ children }) => {

  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <CSSReset />
      <Global
        styles={css`

          @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700;800&display=swap');

          *{
            letter-spacing: -0.5px;
          }

          ::selection {
            background-color: rgba(94, 143, 235,.2);
          }

          html {
            scroll-behavior: smooth;
          }

          img {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
          }

          .gradientText{
            background-image: linear-gradient(to left,#80c4ea,#7461cb);
            color: transparent;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .BigBlackBox::before{
            content:url(rounds.svg);
            position:absolute;
            right:0;
            margin-top:-212.5px;
            z-index:-1;
          }

          #__next {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
          }

          /* slightly transparent fallback */
          .glassbg {
            background-color: rgba(255, 255, 255, .8);
            border-radius: 20px;
            border: solid 2px rgba(255,255,255,1)
          }

          /* if backdrop support: very transparent and blurred */
          @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            .glassbg {
              backdrop-filter: saturate(180%) blur(5px);
              border-radius: 20px;
              border: solid 2px rgba(255,255,255,1)
            }
          }
        `}
      />
      {children}
    </>
  );
};

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: ['reliable.vercel.capp']
      });
    }
  }, []);

  return (
    <ThemeProvider theme={customTheme}>
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
