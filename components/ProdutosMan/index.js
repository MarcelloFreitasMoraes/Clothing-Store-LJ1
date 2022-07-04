import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ButtonComprar } from '../Button';
import { Container } from "../Container";

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
    <Container>
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
                    <ButtonComprar />
                  </S.BoxCard>
                </S.Box>
              </>
            );
          })}
      </S.Card>
    </Container>
  );
};
