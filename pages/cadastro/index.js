import { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import { ButtonLogout } from "../../components/ButtonLogout";
import * as S from "../../styles/cadastro.styles";
import PostDelete from "../../components/PostDelete";
import { useRouter } from "next/router";

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
    } else if (email === "marcelomoraes@fpr.com.br" && senha === "48246188") {

      return (
        <>
          <Container>
            <S.Box>
              <h2>Marcelo Administrador</h2>
            </S.Box>
            <S.Card>
              <PostDelete />
            </S.Card>
          </Container>
        </>
      );
    } else 
    {
      // if (typeof window !== "undefined") {
      //   window.location.href = '/admin'

      // };
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
