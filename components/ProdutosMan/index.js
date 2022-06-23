/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";

export const ProdutosMan = () => {
  const [resposta, setResposta] = useState([]);

  useEffect(() => {
    axios.get('https://clothing-store2022-default-rtdb.firebaseio.com/roupas/men.json')
      .then(function (response) {
        setResposta(response?.data);
      }
      )
  }, [])


  console.log(resposta, 'resposta')
  return (
      <S.Container>
        {/* <S.Card>
          <S.Title>
            <S.Text>Moda Masculina Exclusivos</S.Text>
          </S.Title>

          {resposta && Object.values(resposta?.men).map((item) => {
            return (
              <>
                <S.RoupaTitle><S.SubTitle>
                  {item.roupa}
                </S.SubTitle></S.RoupaTitle>
                <S.Box>
                  <S.Imag src={item.img}
                  />

                  <S.BoxCard>
                    <h2></h2>
                    <br />
                    <S.Description>{categoria}</S.Description>
                    <br />
                    <p>{item.roupa}</p>
                    <p><span>{item.valor}</span></p>

                  </S.BoxCard>
                </S.Box>
              </>
            )
          })}
        </S.Card> */}
      </S.Container>
  )
}