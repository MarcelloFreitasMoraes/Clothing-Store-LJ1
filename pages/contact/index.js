import React from 'react';
import * as S from './styles'

export default function Contact () {
    return (
        <>
            <S.Container >
                <S.Contact>
                    <div>
                        <h1>Contatos</h1>
                        <p>loja: (+55) 11 94598-8406</p>
                        <p>Reclamação: 0800 000 000</p>
                    </div>
                    <div>
                        <h1>Horário de Atendimento</h1>
                        <p>Segunda à Sábado das 8h às 18h</p>
                        <p>Exceto Feriados</p>
                    </div>

                </S.Contact>
                <S.Redes>
                    <h2>Redes Socias</h2>
                    {/* <div>
                        <a className={style.whatsapp} href="https://web.whatsapp.com/send?phone=5511982620594" target="_blank"><FaWhatsappSquare /></a>
                         <a className={style.face} href="https://www.facebook.com/mauricio.edson.1" target="_blank"><FaFacebookSquare /></a>
                    </div> */}
                </S.Redes>
            </S.Container>
        </>
    )
}