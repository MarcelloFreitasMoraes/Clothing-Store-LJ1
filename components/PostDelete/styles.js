import styled from "styled-components";

export const Title = styled.h2`
  text-align: center;
  background: rgb(190, 144, 74);
  width: 100%;
  padding: 20px;
  border: 2px solid dashed #000000;
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

export const Button = styled.a`
  border: 0px;
  border-radius: 32px;
  padding: 5px 5px;
  margin: 10px 0;
  font-size: 15px;
  font-family: "Alfa Slab One", cursive;
  color: rgb(190, 144, 74);
  z-index: 1;
  background-color: rgb(32, 32, 32);
  cursor: pointer;
  :hover {
    background-color: rgb(190, 144, 74);
    color: rgb(32, 32, 32);
  }
`;

export const Contant = styled.div`
  display: flex;
  justify-content: center;
  border: 2px solid #000;
  margin: 5px;
  padding: 10px;
  flex-direction: column;
  display: flex;
  align-items: center;
  font-size: 20px;
  background: #ccc;
`;

export const WidImg = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  width: 100%;
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
export const Form = styled.form`
  margin: 30px;
  border: 6px dashed rgb(190, 144, 74);
  padding: 10px;
  width: 95%;
  text-align: center;
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
  padding-bottom: 20px;
`;
export const Input = styled.input`
display: flex;
border: 2px solid rgb(190, 144, 74);
border-radius: 4px;
width: 150px;
height: 30px;
padding: 10px;
margin: 0 10px;
`
export const SectionInp = styled.div`
width: 100%;
display: flex;
align-items: center;
text-align: center;
justify-content: space-between;
`
export const Label = styled.label`
font-weight: 600;
`