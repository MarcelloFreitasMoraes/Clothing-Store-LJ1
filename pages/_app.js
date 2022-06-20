/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import React from 'react'
import Head from 'next/head'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'
import * as S from "../styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <S.Absolute>
      <Head>
        <title>Clothing Store</title>
        <meta name="description" content="Loja de Roupas" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" media="screen and (min-width: 900px)" href="widescreen.css"></link>
          <link rel="stylesheet" media="screen and (max-width: 600px)" href="smallscreen.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet"></link>
      </Head>
      <S.Contant>
      <Logo />
      <Menu />
      </S.Contant>
      <Component {...pageProps} />
      <Footer />
    </S.Absolute>
  )
}
export default MyApp
