/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ProdutosMan } from "../../components/ProdutosMan";
import { ButtonComprar } from "../../components/Button";
import { Container } from "../../components/Container";

export default function Masculine() {
  const [resposta, setResposta] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://clothing-store2022-default-rtdb.firebaseio.com/masculinas.json"
      )
      .then(function (response) {
        setResposta(response?.data);
      });
  }, []);

   return (
    <>
      <S.BannerDiv>
        <S.BannerM src='https://benoliel.vteximg.com.br/arquivos/ids/156251/banner%20moda%20masculina.png?v=637440114094000000' alt=""/>
      </S.BannerDiv>
      <Container>
      <ProdutosMan />
      <S.Card>
        {resposta &&
          Object.values(resposta).map((item) => {
            return (
              <>
                <S.Box>
                  <S.BoxCard>
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
      </Container>
    </>
  );
}
