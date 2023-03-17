import styled from "styled-components"

export default function Header(){
    return(
        <Topo>
           <div>TrackIt</div>
           <img src="https://johto.legiaodosherois.com.br/wp-content/uploads/2022/09/legiao_Doup8FklbxZi.jpg" alt="Foto de Perfil" />
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