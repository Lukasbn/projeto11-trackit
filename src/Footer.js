import { useContext } from "react";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom"
import styled from "styled-components"

import TrackItData from "./Context/TrackItData";

export default function Footer() {

    const {progresso} = useContext(TrackItData)

    return (
        <Rodapé data-test="menu">
            <Texto>
                <Link to={"/habitos"} data-test="habit-link">
                    <p>Hábitos</p>
                </Link>
                <Link to={'/hoje'} data-test="today-link">
                    <Circulo>
                        <CircularProgressbar
                            value={progresso}
                            text='Home'
                            background
                            backgroundPadding={6}
                            styles={buildStyles({
                                backgroundColor: "#52B6FF",
                                textColor: "#FFFFFF",
                                pathColor: "#FFFFFF",
                                trailColor: "transparent"
                            })}
                        />
                    </Circulo>
                </Link>
                <Link to={"/historico"} data-test="history-link">
                    <p>Histórico</p>
                </Link>
            </Texto>
        </Rodapé>
    )
}

const Rodapé = styled.footer`
    position: fixed;
    bottom: 0px;
    height: 100px;
    width: 100%;
    display: flex;
`

const Texto = styled.div`
    width: 100%;
    height: 70px;
    background-color: #FFFFFF;
    align-self: flex-end;
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    p{
        font-size: 18px;
        line-height: 22px;
        color: #52B6FF;
    }

    a{
        text-decoration: none;
    }
`

const Circulo = styled.div`
    width: 90px;
    height: 90px;
    margin-bottom: 37px
`