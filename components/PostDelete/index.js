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
    console.log(id, 'id')
    axios
      .delete(
        `https://clothing-store2022-default-rtdb.firebaseio.com/femininas/${id}.json`
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
        <S.BoxTitle>
        <S.Title>Lista de Roupas</S.Title>
        </S.BoxTitle>
        <S.Card>
          {resposta &&
            Object.entries(resposta).map((item, index) => {
              return (
                <>
                  <div key={index}>
                    <S.BoxCard>
                      <S.WidImg>
                        <S.Imag src={item[1].img} />
                      </S.WidImg>
                      <p>{item[1].roupa}</p>
                      <p>{item[1].valor}</p>
                      <p>{item[1].categoria}</p>
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
          <S.SectionInp>
          <S.Label>Imagem:</S.Label>
          <S.Input onChange={(e) => setImagem(e.target.value)} />
          <br />
          <S.Label>Roupa:</S.Label>
          <S.Input onChange={(e) => setRoupa(e.target.value)} />
          <br />
          <S.Label>Valor:</S.Label>
          <S.Input onChange={(e) => setValor(e.target.value)} />
          <br />
          <S.Label>Parcelas:</S.Label>
          <S.Input onChange={(e) => setCategoria(e.target.value)} />
          <br />
          <S.Button
            onClick={(e) => {
              e.preventDefault();
              cadastro();
            }}
          >
            Cadastrar
          </S.Button>
          </S.SectionInp>
        </S.Form>
      </Container>
    </>
  );
}
