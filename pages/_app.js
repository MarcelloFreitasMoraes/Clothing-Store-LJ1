import React from 'react'
import Head from 'next/head'
import { Logo } from '../components/Logo'
import { Footer } from '../components/Footer'
import { Menu } from '../components/Menu'

function MyApp({ Component, pageProps }) {
  return(
  <>
   <Head>
        <title>Clothing Store</title>
        <meta name="description" content="Loja de Roupas" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Logo />
    <Menu/>
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
export default MyApp
