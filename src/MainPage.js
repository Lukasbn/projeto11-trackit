import styled from "styled-components"
import Logo from "./Images/Logo.png"
import { ThreeDots } from "react-loader-spinner"

export default function MainPage(){
    return(
        <RegisterInterface>
            <img src={Logo} alt="Logo TrackIt" />
            <img src={Logo} alt="Logo TrackIt" />
            <img src={Logo} alt="Logo TrackIt" />
            <img src={Logo} alt="Logo TrackIt" />
            <ThreeDots/>
        </RegisterInterface>
    )
}


const RegisterInterface = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 70px auto;

    img{
        width: 180px;
        margin-bottom: 32px;

    }

    p{
        margin-top: 25px;
        font-size: 14px;
        line-height: 18px;
        color: #52B6FF
    }

    a{
        text-decoration: none;    
    }
`

