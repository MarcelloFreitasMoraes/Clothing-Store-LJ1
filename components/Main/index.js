/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as S from './styles'

export const Main = () => {
    return (
        
            <S.Main>
                <S.SubMain>
                <S.ImgMain src='banner2.jpg' alt="Vercel Logo"/> 
                </S.SubMain>
                <S.SubMain>
                <S.ImgMain src='banner5.webp' alt="Vercel Logo"/> 
                </S.SubMain>
                <S.SubMain>
                <S.ImgMain src='banner4.gif' alt="Vercel Logo"/> 
                </S.SubMain>
                <div>
                    <S.CredCards>Aceitamos Todas esses Formas de Pagamentos e parcelamos tudo em até 10x sem juros</S.CredCards>
                    <img  src='cardtodos.png' alt="Vercel Logo"/>
                </div>
            </S.Main>
        
    )
}