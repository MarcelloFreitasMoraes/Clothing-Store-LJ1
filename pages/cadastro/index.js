/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import { ButtonLogout } from "../../components/ButtonLogout";
import * as S from "./styles";
import PostDelete from "../../components/PostDelete";

export default function Cadastro() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  useEffect(() => {
    if (typeof window !== "undefined") {
      setEmail(localStorage.getItem("usuario"));
      setSenha(localStorage.getItem("senha"));
    }
  }, []);

  const users = () => {
    if (email === "felipepaulino@fpr.com.br" && senha === "1234567") {
      return (
        <S.Box>
          <h2>Felipe Administrador</h2>
        </S.Box>
      );
    } else if (email === "marcelomoraes@fpr.com.br" && senha === "123456") {
      return (
        <S.Box>
          <h2>Marcelo Administrador</h2>
        </S.Box>
      );
    } else {
      console.log("Não existe esse usuario");
    }
  };

  return (
    <>
      <Container>
        <S.SectionButton>
          <ButtonLogout />
          {users()}
        </S.SectionButton>
        <S.Card>
          <PostDelete />
        </S.Card>
      </Container>
    </>
  );
}
