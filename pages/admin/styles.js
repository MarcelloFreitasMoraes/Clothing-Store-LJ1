import styled from "styled-components";

export const Contant = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const Button = styled.button`
  border: 0px;
  border-radius: 32px;
  padding: 10px 30px;
  margin-bottom: 10px;
  font-size: 20px;
  font-family: 'Alfa Slab One', cursive;
  color: rgb(190, 144, 74);
  z-index: 1;
  background-color: rgb(32, 32, 32);
  cursor: pointer;
  :hover {
    background-color: rgb(190, 144, 74);
    color: rgb(32, 32, 32);
  }
`

// export const Box = styled.div`
// border: 2px solid  #000;
//   margin: 5px;
//   padding: 10px;
//   flex-direction: column;
//   display: flex;
//   align-items: center;
//   font-size: 20px;
//   background: #ccc;
// `

export const Input = styled.input`
width: 200px;
margin: 10px 0;
`