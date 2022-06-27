import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
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
max-width: 100%;
-webkit-transition: all 0.7s ease;
transition: all 0.7s ease;

:hover {
 -webkit-transform: scale(1.0);
 transform: scale(1.0);
}
`
export const OffPrmomo = styled.div`
position: absolute;
`

export const Promo = styled.p`
color: rgb(190,144,74);
font-family: 'Titan One', cursive;
font-size: 16px;
padding: 5px 5px;
background-color: rgb(32, 32, 32);
transform: rotate(-35deg);
background-color: rgb(32, 32, 32);
color: rgb(190,144,74);
margin-top: 15px;
border-radius: 8px;
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
    flex-wrap: wrap;
`
export const Box = styled.div`
    margin: 0 auto;
    display: flex;
    font-weight: bolder;
    justify-content: space-between;
    /* flex-wrap: wrap; */
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
    :hover {
            background-color: rgb(190,144,74);
            color: rgb(32, 32, 32);;
        }
`

export const BoxCard = styled.div`
    text-align: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px 2px;
    border-radius: 0.9rem;
    margin-top: 30px;
`