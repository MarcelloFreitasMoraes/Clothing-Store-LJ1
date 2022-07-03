/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as S from "./styles";
import { ProdutosMan } from "../ProdutosMan";
import { ProdutosWomen } from "../Produtoswomen";
export const Main = () => {
  return (
    <S.Main>
      <div>
        <a href="/feminine">
          <S.ImgMain src="banner2.jpg" alt="Vercel Logo" />
        </a>
      </div>

      <div>
        <ProdutosWomen />
      </div>

      <S.Banner2>
        <a href="/masculine">
          <S.ImgMain src="banner5.webp" alt="Vercel Logo" />
        </a>
      </S.Banner2>

      <div>
        <ProdutosMan />
      </div>

      <a href="/feminine#vip">
        <div>
          <S.ImgMain src="banner4.gif" alt="Vercel Logo" />
        </div>
      </a>

      <S.Cards>
        <S.CredCards>
          Aceitamos Todas esses Formas de Pagamentos e parcelamos tudo em até 6x
          sem juros
        </S.CredCards>
        <S.ImgCards src="cardtodos.png" alt="Vercel Logo" />
      </S.Cards>
    </S.Main>
  );
};
