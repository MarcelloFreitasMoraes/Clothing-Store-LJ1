import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Title = styled.div`
display: flex;
justify-content: center;
margin: 30px;

`

export const Imag = styled.img`
width: 360px;
height: 400px;
    margin-top: -1px;
    border-radius: 0.9rem 0.9rem 0 0;
`
export const Text = styled.h1`
text-transform: uppercase;
`

export const TextSub = styled.h1`
text-transform: uppercase;
`

export const Card = styled.div`
 display: flex;
 justify-content: space-between;
    text-align: center;
    border-radius: 0.9rem;
    margin: 30px 20px;
    padding: 0 20px;
`
export const Box = styled.div`
    margin: 0 auto;
    display: flex;
    font-weight: bolder;
    justify-content: space-between;
    flex-wrap: wrap;
`
export const Comprar = styled.button`
    margin: 0px 0 5px 250px;
    border: 0px;
    border-radius: 32px;
    padding: 0.875rem 1rem;
    color: rgb(190,144,74);
    z-index: 1;
    background-color: rgb(32, 32, 32);
    cursor: pointer;
`

export const BoxCard = styled.div`
    text-align: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px 2px;
    border-radius: 0.9rem;
    margin-top: 30px;
`