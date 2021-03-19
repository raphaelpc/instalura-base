import React from 'react';
import Head from 'next/head';

interface SEOProps {
  headTitle?: string;
}

export default function SEO({ headTitle }: SEOProps) {
  const hasTitle = Boolean(headTitle);
  const baseTitle = 'Instalura - Projeto do Alura Bootcamp JAMStack';
  const title = hasTitle
    ? `${headTitle} | ${baseTitle}`
    : baseTitle;

  const description = 'App inspirado pelo Instagram, criado para prática da JAMStack.';
  const image = 'https://instalura-base-lac.vercel.app/images/phones.png';
  const urlBase = 'https://instalura-base-lac.vercel.app/';

  return (
    <Head>
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlBase} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlBase} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}
