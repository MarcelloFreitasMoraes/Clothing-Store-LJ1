import React, { useState, useEffect } from "react"
import { Container } from "../../components/Container";
import * as S from "./styles";

export default function Login() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  const [validacao, setValidacao] = useState(false)
  
  const entrar = () => {
    if((usuario === 'felipepaulino@fpr.com.br' && senha === '1234567') || 
    (usuario === 'marcelomoraes@fpr.com.br' && senha === '123456')) {
    localStorage.setItem('usuario', usuario)
    localStorage.setItem('senha', senha)
    window.location.href = '/cadastro'
  }
  else setValidacao(true)
  }

  return (
    <Container>
    <S.Contant>
      <h1>Login</h1><br />
      <label>Usuario</label>
      <S.Input onChange={(e) => setUsuario(e.target.value)} />

      <label>Senha</label>
      <S.Input type='password' onChange={(e) => setSenha(e.target.value)}  />
      {validacao && <p>Senha ou usuário invalidos</p>}
      <S.Button onClick={() => entrar()}>Entrar</S.Button>
    </S.Contant>
    </Container>
  )
}

