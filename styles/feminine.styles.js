import styled from "styled-components";


export const TextBanner = styled.p`
  font-family: 'Rubik Mono One', sans-serif;
  color: #E2684B;
  font-size: 60px;
  margin: 30px 20px 0 40px;
  position: absolute;
`
export const BannerDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const BannerF = styled.img`
width:100%;
`;
export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-radius: 0.9rem;
  margin: 30px 20px;
  padding: 0 20px;
  flex-wrap: wrap;
  
  `;
  export const Box = styled.div`
    margin: 0 auto;
    display: flex;
    font-weight: bolder;
    justify-content: space-between;
  `;
  
  export const BoxCard = styled.div`
    text-align: center;
    box-shadow: rgb(0 0 0 / 20%) 0px 0px 2px 2px;
    border-radius: 0.9rem;
    margin-top: 30px;
    overflow: hidden;
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
