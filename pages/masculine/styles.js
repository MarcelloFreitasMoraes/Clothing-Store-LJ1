import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  position: relative;
  min-height: 1px;
  width: 100%;
`;
export const BannerM = styled.img`
  width: 100%;
  margin: 0 auto;
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
`;
export const WidImg = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 400px;
`;

export const Imag = styled.img`
  width: 360px;
  height: 400px;
  margin-top: -1px;
  border-radius: 0.9rem 0.9rem 0 0;
  max-width: 100%;
  -webkit-transition: all 0.7s ease;
  transition: all 0.7s ease;

  :hover {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
`;


export const TextSub = styled.h1`
  text-transform: uppercase;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-radius: 0.9rem;
  margin: 30px 20px;
  padding: 0 20px;
  flex-wrap: wrap;
  width: 1350px;
  margin-left: 260px;
`;
export const Box = styled.div`
  margin: 0 auto;
  display: flex;
  font-weight: bolder;
  justify-content: space-between;
  /* flex-wrap: wrap; */
`;
export const ContButton = styled.div`
  margin: 0 0 5px 0;
`;

export const Comprar = styled.button`
  border: 0px;
  border-radius: 32px;
  padding: 10px 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: 'Alfa Slab One', cursive;
  color: rgb(190, 144, 74);
  z-index: 1;
  background-color: rgb(32, 32, 32);
  cursor: pointer;
  :hover {
    background-color: rgb(190, 144, 74);
    color: rgb(32, 32, 32);
  }
`;

export const BoxCard = styled.div`
  text-align: center;
  box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px 2px;
  border-radius: 0.9rem;
  margin-top: 30px;
  overflow: hidden;
`;
