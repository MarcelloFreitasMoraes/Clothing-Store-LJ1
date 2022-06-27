/* eslint-disable @next/next/no-img-element */
import React from "react";
import * as S from "./styles";

export const Footer = () => {

  const text = 'Parcelamos em ate 10x sem juros'

  return (
    <>
      <S.Container >
             <S.Contact>
          <div>
            <h1>Contatos</h1><br/>
            <p>loja: (+55) 11 94598-8406</p><br/>
            <p>Reclamação: 0800 000 000</p>
          </div>
          <div>
            <h1>Horário de Atendimento</h1><br/>
            <p>Segunda à Sábado das 8h às 18h</p><br/>
            <p>Exceto Feriados</p>
          </div>

        </S.Contact>
        <S.Redes>
          <h2>Redes Socias</h2>
          <S.ImgCont>

          <S.Link onClick={() => window.location.href='https://www.instagram.com/marcelo_freitas_moraes21/'}>
            <S.Img
              src="https://elasq.com/wp-content/uploads/2022/03/inta2.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            /></S.Link>
            <S.Link onClick={() => window.location.href='https://www.facebook.com/people/Deku-Deku/100037312535220/'}>
            <S.Img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/480px-Facebook_logo_%28square%29.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            /></S.Link>

            <S.Link onClick={() => window.location.href='https://web.whatsapp.com/send?phone=5511945988406'}>
            <S.Img
              src="https://logopng.com.br/logos/whatsapp-33.png"
              alt="Vercel Logo"
              width={40}
              height={40}
            /></S.Link>
          </S.ImgCont>
        </S.Redes>
      </S.Container>
    </>
  );
};
