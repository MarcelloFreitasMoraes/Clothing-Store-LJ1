/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { Container } from "../../components/Container";
import axios from "axios";
import * as S from "./styles";

export default function PostDelete() {
  const [resposta, setResposta] = useState();
  const [imagem, setImagem] = useState();
  const [valor, setValor] = useState();
  const [categoria, setCategoria] = useState();
  const [roupa, setRoupa] = useState();
  const [mapas, setMapas] = useState();

  useEffect(() => {
    fetch(
      "https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json"
    )
      .then((response) => response.json())
      .then((data) => setResposta(data));
  }, [mapas]);

  const cadastro = () => {
    axios
      .post(
        "https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json",
        {
          img: imagem,
          roupa: roupa,
          valor: valor,
          categoria: categoria,
        }
      )
      .then(() => {
        alert("sua roupa foi cadastrada");
        setMapas(!mapas);
      })
      .catch(() => alert("não conseguiu cadastrar"));
  };

  const deletar = (id) => {
    axios
      .delete(
        `https://clothing-store2022-default-rtdb.firebaseio.com/femininas${id}.json/`,
        {}
      )
      .then(() => {
        alert("roupa excluida");
        setMapas(!mapas);
      })
      .catch(() => alert("roupa não excluida"));
  };

  return (
    <>
      <Container>
        <S.Title>Lista de Roupas</S.Title>
        <S.Card>
          {resposta &&
            Object.values(resposta).map((item) => {
              return (
                <>
                  <div>
                    <S.BoxCard>
                      <S.WidImg>
                        <S.Imag src={item.img} />
                      </S.WidImg>
                      <p>{item.roupa}</p>
                      <p>{item.valor}</p>
                      <p>{item.categoria}</p>
                      <S.Button onClick={() => deletar(item[0])}>
                        Excluir
                      </S.Button>
                    </S.BoxCard>
                  </div>
                </>
              );
            })}
        </S.Card>
        <S.Form>
          <h2>Cadastrar nova roupa</h2>
          <label>Imagem:</label>
          <input onChange={(e) => setImagem(e.target.value)} />
          <br />
          <label>Roupa:</label>
          <input onChange={(e) => setRoupa(e.target.value)} />
          <br />
          <label>Valor:</label>
          <input onChange={(e) => setValor(e.target.value)} />
          <br />
          <label>Parcelas:</label>
          <input onChange={(e) => setCategoria(e.target.value)} />
          <br />
          <S.Button
            onClick={(e) => {
              e.preventDefault();
              cadastro();
            }}
          >
            Cadastrar
          </S.Button>
        </S.Form>
      </Container>
    </>
  );
}
