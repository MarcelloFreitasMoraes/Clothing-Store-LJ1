/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, {useState, useEffect} from "react"
import { Container } from "../../components/Container";
import * as S from "./styles";


export default function Cadastro () {
    const [email, setEmail] = useState()
    const [senha, setSenha] = useState()

    useEffect(() => {
    if (typeof window !== 'undefined') {
        setEmail(localStorage.getItem('usuario'))
        setSenha(localStorage.getItem('senha'))
    }
}, [])

    const users = () => {
    if (email === 'felipepaulino@fpr.com.br' && senha === '1234567') {
            return (
                <S.Box>
                    <h2>Felipe</h2>
                    <p>Admin</p>
                    <img src='feh.png' />
                </S.Box>
            )
        }
               
        else if (email === 'marcelomoraes@fpr.com.br' && senha === '123456') {

            return (
                <S.Box>
                    <h2>Marcelo</h2>
                    <p>Admin</p>
                    <img src='celo.png' />
                </S.Box>
            )
        }
        else {
            console.log('Não existe esse usuario')
        }
    }

    const [resposta, setResposta] = useState()
    const [tipo, setTipo] = useState()
    const [valor, setValor] = useState()
    const [cor, setCor] = useState()
    const [Editando, setEditando] = useState()
    const [mapas, setMapas] = useState()


    useEffect(() => {
        fetch('https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json')
            .then(response => response.json())
            .then(data => setResposta(data))
    }, [mapas]);


    const cadastro = () => {
        axios.post('https://clothing-store2022-default-rtdb.firebaseio.com/femininas.json', {
            cor: cor,
            tipo: tipo,
            valor: valor
        })
            .then(() => {
                alert('sua roupa foi cadastrada')
                setMapas(!mapas)
            })
            .catch(() => alert('não conseguiu cadastrar'))
    }

    const deletar = (id) => {
        axios.delete(`https://clothing-store2022-default-rtdb.firebaseio.com/femininas${id}.json/`, {})
            .then(() => {
                alert('roupa excluida')
                setMapas(!mapas)
            })
            .catch(() => alert('roupa não excluida'))
    }

    const editar = (id) => {
        axios.patch(`https://clothing-store2022-default-rtdb.firebaseio.com/femininas${id}.json/`, {
            tipo: Editando
        })
            .then(() => {
                alert('roupa editada')
                setMapas(!mapas)
            })
            .catch(() => alert('roupa não editada'))
    }

   
    return (
        <>

        <S.Container>
            <h2>Lista de Roupas</h2>
            {resposta &&
          Object.values(resposta).map((item) => {
                
                return (
                    <>
                    <div>
                       <p> {item.tipo}</p>
                       <p>{item.valor}</p> 
                       <p>{item.cor}</p>
                        <input onChange={(e) => setEditando(e.target.value)} />
                        <button onClick={() => deletar(roupa[0])}>Excluir</button>
                        <button onClick={() => editar(roupa[0])}>Editar</button>
                    </div>
                    </>
                )
            })}
            <h2>Cadastrar nova roupa</h2>
            <S.Form>
                <label>Tipo:</label><input onChange={(e) => setTipo(e.target.value)} /><br />
                <label>Valor:</label><input onChange={(e) => setValor(e.target.value)} /><br />
                <label>Cor:</label><input onChange={(e) => setCor(e.target.value)} /><br />
                <button onClick={(e) => { e.preventDefault(); cadastro() }}>Cadastrar</button>
            </S.Form>
            <S.Button href='/login'>LOGOUT</S.Button>
            {users()}
            </S.Container>
        </>
    );
}
