import { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import { ButtonLogout } from "../../components/ButtonLogout";
import * as S from "./styles";
import Post from "../../components/Post";

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
        <>
          <Container>
            <S.Box>
              <h2>Marcelo Administrador</h2>
            </S.Box>
            <S.Card>
              <Post/>
            </S.Card>
          </Container>
        </>
      );
    } else {
        if (typeof window !== "undefined") {
window.location.href='/admin'
          
  };
}
  }

  return (
    <>
      <Container>
        <S.SectionButton>
          <ButtonLogout />
          {users()}
        </S.SectionButton>
      </Container>
    </>
  );
}
