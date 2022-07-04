import styled from "styled-components";

export const ContButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Button = styled.a`
  border: 1px;
  border-radius: 32px;
  padding: 7px 7px;
  margin-bottom: 10px;
  font-size: 14px;
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
