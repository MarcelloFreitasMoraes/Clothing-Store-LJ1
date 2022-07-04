import React from "react";
import * as S from "./styles";
import { ProdutosMan } from "../ProdutosMan";
import { ProdutosWomen } from "../Produtoswomen";
export const Main = () => {
  return (
    <S.Main>
      <div>
        <S.Link href='/feminine'>
          <S.ImgMain src="banner2.jpg" alt="Vercel Logo" />
        </S.Link>
      </div>

      <div>
        <ProdutosWomen />
      </div>

      <S.Banner2>
        <S.Link href="/masculine">
          <S.ImgMain src="banner5.webp" alt="Vercel Logo" />
        </S.Link>
      </S.Banner2>

      <div>
        <ProdutosMan />
      </div>

      <S.Link href="/feminine#vip">
        <div>
          <S.ImgMain src="banner4.gif" alt="Vercel Logo" />
        </div>
      </S.Link>

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
