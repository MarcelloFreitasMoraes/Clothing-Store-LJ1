import React from 'react';
import * as S from './styles'

export const Main = () => {
    return (
        
            <S.Main>
                <div>
                <S.ImgMain className='img' src='banner2.jpg' alt="Vercel Logo"/> 
                </div>
                <div>
                <S.ImgMain className='img' src='banner3.webp' alt="Vercel Logo"/> 
                </div>
                <div>
                <S.ImgMain className='img' src='banner4.gif' alt="Vercel Logo"/> 
                </div>
            </S.Main>
        
    )
}