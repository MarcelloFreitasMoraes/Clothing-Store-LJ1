/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import * as S from "./styles";
import axios from "axios";
import { ProdutosMan } from "../../components/ProdutosMan";

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

  console.log(resposta, "resposta");

  return (
    <S.Container>
      <ProdutosMan />
      <S.Title>
        <S.Text>Moda Masculinas</S.Text>
      </S.Title>
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

                    <br />
                    <p>{item.roupa}</p>
                    <br />
                    <p>
                      <span>{item.valor}</span>
                    </p>
                    <S.ContButton>
                      <S.Comprar
                        onClick={() =>
                          (window.location.href =
                            "https://web.whatsapp.com/send?phone=5511945988406")
                        }
                      >
                        Comprar
                      </S.Comprar>
                    </S.ContButton>
                  </S.BoxCard>
                </S.Box>
              </>
            );
          })}
      </S.Card>
    </S.Container>
  );
}
