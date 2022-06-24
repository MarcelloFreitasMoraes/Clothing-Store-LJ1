/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import * as S from './styles'
import  {ProdutosMan}  from '../ProdutosMan';
import { ProdutosWomen } from '../Produtoswomen';
export const Main = () => {
    return (
        
            <S.Main>

                <S.SubMain>
                <a href='/feminine'>
                <S.ImgMain src='banner2.jpg' alt="Vercel Logo"/> 
                </a>
                </S.SubMain>

                <div>
                <ProdutosWomen/>
                </div>

                <S.SubMain>
                <a href='/masculine'>
                <S.ImgMain src='banner5.webp' alt="Vercel Logo"/> 
                </a>
                </S.SubMain>
                
                <div>
                <ProdutosMan/>
                </div>

                
                <S.SubMain>
                <S.ImgMain src='banner4.gif' alt="Vercel Logo"/>
                </S.SubMain>

                <S.Cards>
                    <S.CredCards>Aceitamos Todas esses Formas de Pagamentos e parcelamos tudo em até 10x sem juros</S.CredCards>
                    <S.ImgCards  src='cardtodos.png' alt="Vercel Logo"/>
                </S.Cards>
                
            </S.Main>
        
    )
}