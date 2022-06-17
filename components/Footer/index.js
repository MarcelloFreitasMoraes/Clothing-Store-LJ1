import React from "react";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <S.Card>
        <img
          src="/footercartoes.png.png"
          alt="Vercel Logo"
          width={500}
          height={300}
        />
        <S.CardTxt>Parcelamos em ate 10x sem juros</S.CardTxt>
        <S.ImgCont>
          <S.Img
            src="https://elasq.com/wp-content/uploads/2022/03/inta2.png"
            alt="Vercel Logo"
            width={40}
            height={40}
          />
          <S.Img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
            alt="Vercel Logo"
            width={40}
            height={40}
          />
          <S.Img
            src="https://logopng.com.br/logos/whatsapp-33.png"
            alt="Vercel Logo"
            width={40}
            height={40}
          />
        </S.ImgCont>
      </S.Card>
    </S.Container>
  );
};
