import { useEffect } from 'react';
import { Global, css } from '@emotion/react';
import { ChakraProvider } from '@chakra-ui/react'
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

          .fa-google {
            background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            -webkit-text-fill-color: transparent;
          }

          img {
            /* For Opera and <= IE9, we need to add unselectable="on" attribute onto each element */
            /* Check this site for more details: http://help.dottoro.com/lhwdpnva.php */
            -moz-user-select: none; /* These user-select properties are inheritable, used to prevent text selection */
            -webkit-user-select: none;
            -ms-user-select: none; /* From IE10 only */
            user-select: none; /* Not valid CSS yet, as of July 2012 */

            -webkit-user-drag: none; /* Prevents dragging of images/divs etc */
            user-drag: none;
            pointer-events: none;
          }

          .Docs{
            margin-top: 180px;
          }

          .Docs p{
            hyphens: auto;
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
            border: solid 2px rgba(255,255,255,.2)
          }

          /* if backdrop support: very transparent and blurred */
          @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
            .glassbg {
              backdrop-filter: saturate(180%) blur(5px);
              border-radius: 20px;
              border: solid 2px rgba(255,255,255,;2)
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
    <ChakraProvider theme={customTheme}>
      <AuthProvider>
        <MDXProvider components={MDXComponents}>
          <DefaultSeo {...SEO} />
          <GlobalStyle />
          <Component {...pageProps} />
        </MDXProvider>
      </AuthProvider>
    </ChakraProvider>
  );
};

export default App;
