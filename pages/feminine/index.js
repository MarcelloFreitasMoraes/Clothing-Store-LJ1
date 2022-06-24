/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ProdutosWomen } from "../../components/Produtoswomen";

export default function Femenine() {
  const [resposta, setResposta] = useState([]);
  useEffect(() => {
    axios.get('https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json')
      .then(function (response) {
        setResposta(response?.data);
      }
      )
  }, [])


  console.log(resposta, 'resposta')


  return (
    <S.Container>
        <S.Title>
          <S.Text>Moda Femininas Exclusivos</S.Text>
        </S.Title>
      <S.Card>

        {resposta && Object.values(resposta).map((item) => {
          return (
            <>
              <S.Box>
                <S.BoxCard>
                <S.Imag src={item.img}
                />
                  <h2/>
                  <br />
                  <p>{item.roupa}</p>
                  <br/>
                  <p><span>{item.valor}</span></p>
                  <S.Comprar onClick={() => window.location.href='https://web.whatsapp.com/send?phone=5511945988406'}>Comprar</S.Comprar>
                </S.BoxCard>
              </S.Box>
            </>
          )
        })}
      </S.Card>
      <ProdutosWomen/>
    </S.Container>
  )
}