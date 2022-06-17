import React from 'react';
import * as S from './styles'

export const Menu = () => {
    return (
        
        <S.Menu>
        <S.Link href='/'>HOME</S.Link>
        <S.Link href='feminine'>FEMININO</S.Link>
        <S.Link href='masculine'>MASCULINO</S.Link>
        <S.Link href='contact'>CONTATO</S.Link>
        </S.Menu>
        
    )
}