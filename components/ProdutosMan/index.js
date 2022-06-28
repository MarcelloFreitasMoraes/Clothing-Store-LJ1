/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ButtonComprar } from '../Button'

export const ProdutosMan = () => {
  const [resposta, setResposta] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://clothing-store2022-default-rtdb.firebaseio.com/roupas/men.json"
      )
      .then(function (response) {
        setResposta(response?.data);
      });
  }, []);

  return (
    <S.Container>
      <S.PromoBanner>
      <S.Promocao src='https://sindespe.org.br/portal/wp-content/uploads/2020/12/promo%C3%A7%C3%A3o.png' id="vip"></S.Promocao>
      </S.PromoBanner>
      <S.Card>
        {resposta &&
          Object.values(resposta).map((item) => {
            return (
              <>
                <S.Box>
                  <S.BoxCard>
                    <S.OffPrmomo>
                      <S.Promo>{item.promocao}</S.Promo>
                    </S.OffPrmomo>
                    <S.WidImg>
                      <S.Imag src={item.img} />
                    </S.WidImg>
                    <p>{item.roupa}</p>
                    <p>{item.valor}</p>
                    <p>{item.categoria}</p>
                   <ButtonComprar/>
                  </S.BoxCard>
                </S.Box>
              </>
            );
          })}
      </S.Card>
    </S.Container>
  );
};
