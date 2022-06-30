import React, { useState } from "react"
import * as S from "./styles";

export default function Login() {
  const [usuario, setUsuario] = useState()
  const [senha, setSenha] = useState()
  
  const entrar = () => {
    localStorage?.setItem('usuario', usuario)
    localStorage?.setItem('senha', senha)
    window.location.href = '/cadastro'
  }

  return (
    <S.Container>
      <h1>Login</h1><br />
      <label>Usuario</label>
      <S.Input onChange={(e) => setUsuario(e.target.value)} />

      <label>Senha</label>
      <S.Input onChange={(e) => setSenha(e.target.value)} type='passoword' />
      <S.Button onClick={() => entrar()}>Entrar</S.Button>
    </S.Container>
  )
}

