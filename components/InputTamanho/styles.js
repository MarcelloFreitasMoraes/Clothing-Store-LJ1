import styled from "styled-components";

export const Main = styled.div`
   margin-bottom: 30px;
   display: flex;
`;

export const Box = styled.div`
   width: 200px;
`;

export const Section = styled.div`
   display: flex;
   justify-content: 'space-between';
   align-items: center;
   margin: 20px 30px 10px 20px;
`;

export const SubTitulo = styled.p`
    text-transform: uppercase;
    /* font-family: 'Oswald', sans-serif;
    font-size: 20px;
    color: #ff9999;*/
    margin-bottom: 10px; 
`;

export const Tamanhos = styled.button`
    text-transform: uppercase;
    font-size: 20px;
    color: rgb(190, 144, 74);
    border: 1px solid ;
    width: 30px;
    height: 30px;
    text-align: center;
    margin-right: 10px;
    margin-top: 0;
    cursor: pointer;
    background-color: rgb(32, 32, 32);
    display: flex;
    align-items: center;
    justify-content: center;
    
    ${({ active }) => active && `
        background-color: rgb(32, 32, 32);
        color: #fff;
        border: 0;
    `};
    :hover{
        background: rgb(190, 144, 74);
        color: rgb(32, 32, 32);
        border: 0;
    }
`;

export const InputQnt = styled.input`
    width: 50px;
    height: 30px;
    font-size: 20px;
    text-align: center;   
    color: rgb(190, 144, 74); 
    background-color: rgb(32, 32, 32);
`;

export const Validacao = styled.p`
    color: red;
    font-size: 12px;
`;