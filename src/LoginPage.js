import { Link } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Images/Logo.png"

export default function LoginPage() {
    return (
        <LoginInterface>
            <img src={Logo} alt="Logo TrackIt" />
            <Form>
                <input type="email" placeholder="e-mail" required />
                <input type="password" placeholder="senha" required />
                <button type="submit">Entrar</button>
            </Form>
            <Link to="/cadastro">
                <p>Não tem uma conta? Cadastre-se!</p>
            </Link>
        </LoginInterface>
    )
}

const LoginInterface = styled.div`
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

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 6px;

    input{
        width: 300px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-size:20px;
        line-height: 25px;
        color:black;
        padding-left: 10px;
        box-sizing: border-box
        
    }

    input::placeholder{
        color: #DBDBDB;
    }

    button{
        width: 300px;
        height: 45px;
        border-radius: 5px;
        background-color: #52B6FF;
        color:#FFFFFF;
        border: none;
    }
` 