import { useContext } from "react"
import styled from "styled-components"
import TrackItData from "./Context/TrackItData"

export default function Header(){

  const {fotoPerfil} = useContext(TrackItData)

    return(
        <Topo data-test="header">
           <div>TrackIt</div>
           <img src={fotoPerfil} alt="Foto de Perfil" />
        </Topo>
    )
}

const Topo = styled.header`
  background-color: #126BA5;
  height: 70px;
  width: 100%;
  box-shadow: 0px 4px 4px 0px #00000026;
  position: fixed;
  top: 0px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  div{
    font-family: 'Playball', cursive;
    font-weight: 400;
    font-size: 40px;
    line-height: 50px;
    color: #FFFFFF;
  }

  img{
    width: 50px;
    height:50px;
    margin: 0;
    object-fit: cover;
    border-radius: 100px;
  }
`