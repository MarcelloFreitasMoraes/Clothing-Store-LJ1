import React from "react";
import { Container } from "../Container";
import * as S from "./styles";

export const ButtonLogout = () => {

  const deletar = () => {

    localStorage.removeItem("usuario");
    localStorage.removeItem("senha");
    window.location.href = '/admin'
  }

  return (
    <Container>
      <S.ContButton>
        <S.Button href="/admin" onClick={() => deletar()}>LOGOUT</S.Button>
      </S.ContButton>
    </Container>
  );
};
