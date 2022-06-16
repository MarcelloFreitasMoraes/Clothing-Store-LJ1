import React from 'react';
import * as S from './styles'

export const Footer = () => {
    return (
        
        <S.Container>
        <S.CardTxt>          
      Parcelamos em ate 10x sem juros
      <S.Card>
        <img src="/footercartoes.png.png" alt="Vercel Logo" width={400} height={200} />
      </S.Card>          
        </S.CardTxt>
    </S.Container>
    )
}