import axios from "axios"
import { useContext, useState } from "react"
import { ThreeDots } from "react-loader-spinner"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import Logo from "./Images/Logo.png"
import TrackItData from "./Context/TrackItData"

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [load, setLoad] = useState(false)

    const navigate = useNavigate()

    const {setToken,setFotoPerfil} = useContext(TrackItData)

    function logon(e) {
        e.preventDefault()
        setLoad(true)

        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login'
        const body = { email, password }

        const promisse = axios.post(URL, body)

        promisse.then((res) => {
            setToken(res.data.token)
            setFotoPerfil(res.data.image)
            navigate('/hoje')
        })
        promisse.catch((err) => {
            alert(err.response.data.message)
            setLoad(false)
        })
    }

    return (
        <LoginInterface>
            <img src={Logo} alt="Logo TrackIt" />
            <Form onSubmit={logon} load={load}>
                <input
                    type="email"
                    placeholder="e-mail"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={load}
                    data-test="email-input" 
                />
                <input
                    type="password"
                    placeholder="senha"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={load}
                    data-test="password-input"
                />
                <button
                    disabled={load}
                    type="submit"
                    data-test="login-btn"
                >
                    {load ? <ThreeDots width="50" /> : 'Entrar'}
                </button>
            </Form>
            <Link to="/cadastro" data-test="signup-link">
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
        background-color: ${prop => prop.load ? '#F2F2F2' : '#FFFFFF'};
        padding-left: 10px;
        box-sizing: border-box
        
    }

    input::placeholder{
        color: ${prop => prop.load ? '#AFAFAF' : '#DBDBDB'};
    }

    button{
        width: 300px;
        height: 45px;
        border-radius: 5px;
        font-size: 21px;
        line-height:27px;
        background-color: #52B6FF;
        color:#FFFFFF;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        opacity: ${prop => prop.load ? 0.7 : 1}
    }
` 