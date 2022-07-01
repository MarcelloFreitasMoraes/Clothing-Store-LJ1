/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/no-css-tags */
import React from "react";
import Head from "next/head";
import { Logo } from "../components/Logo";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import * as S from "../styles/styles";
import "../styles/globals.css";
import {Container} from '../components/Container'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Clothing Store</title>
        <meta name="description" content="Loja de Roupas" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <S.Absolute>
        <S.Contant>
        <Container>
          <S.Box>
          <Logo />
          <Menu />
          </S.Box>
        </Container>
        </S.Contant>
        <Component {...pageProps} />
        <Footer />
      </S.Absolute>
    </>
  );
}
export default MyApp;
