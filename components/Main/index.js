import React from 'react';
import * as S from './styles'

export const Main = () => {
    return (
        
            <S.Main>
                <S.SubMain>
                <S.ImgMain className='img' src='banner2.jpg' alt="Vercel Logo"/> 
                </S.SubMain>
                <S.SubMain>
                <S.ImgMain className='img' src='banner3.webp' alt="Vercel Logo"/> 
                </S.SubMain>
                <S.SubMain>
                <S.ImgMain className='img' src='banner4.gif' alt="Vercel Logo"/> 
                </S.SubMain>
            </S.Main>
        
    )
}