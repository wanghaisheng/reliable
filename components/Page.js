import React from 'react';
import { NextSeo } from 'next-seo';

const Page = ({ name, path, children }) => {
  const title = `Reliable – ${name}`;
  const url = `https://reliable-brown.vercel.app${path}`;

  return (
   <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    {children}
   </>
  );
};

export default Page;
