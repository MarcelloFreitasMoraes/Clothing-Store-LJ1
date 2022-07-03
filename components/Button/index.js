import React from "react";
import * as S from "./styles";

export const ButtonComprar = () => {
  return (
    <>
      <S.ContButton>
        <S.Comprar
          onClick={() =>
            window.open("https://web.whatsapp.com/send?phone=5511945988406")
          }
        >
          Comprar
        </S.Comprar>
      </S.ContButton>
    </>
  );
};
