import axios from "axios"
import { useContext, useState } from "react"
import styled from "styled-components"
import TrackItData from "./Context/TrackItData"

export default function FormHabPg({ setFormulario, name, setName, days, setDays }) {

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const [load, setLoad] = useState(false)

    const { token } = useContext(TrackItData)

    function selecionarDias(dia) {
        if (!days.includes(dia)) {
            const newDay = [...days, dia]
            setDays(newDay)
        }
        else if (days.includes(dia)) {
            const newArray = days.filter(item => item !== dia)
            setDays(newArray)
        }
    }

    function enviar(e) {
        e.preventDefault()
        setLoad(true)
        const URL = 'https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits'
        const body = { name, days }
        const autorização = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const promise = axios.post(URL, body, autorização)

        promise.then(() => {
            setName('')
            setDays([])
            setFormulario(false)
        })
        promise.catch((err) => {
            alert(err.response.data)
            setLoad(false)
        })
    }

    function fechar() {
        setFormulario(false)
    }

    return (
        <Form onSubmit={enviar} data-test="habit-create-container">
            <input
                data-test="habit-name-input"
                placeholder="nome do hábito"
                type="text"
                required
                value={name}
                disabled={load}
                onChange={(e) => setName(e.target.value)}
            />
            <BoxDays>{weekdays.map((dias, index) =>
                <CardDay data-test="habit-day" key={index} type="button" disabled={load} verificar={days.includes(index)} onClick={() => selecionarDias(index)}>{dias}</CardDay>
            )}
            </BoxDays>
            <Buttons>
                <button data-test="habit-create-cancel-btn" disabled={load} onClick={fechar} type="button">
                    Cancelar
                </button>
                <button data-test="habit-create-save-btn" disabled={load} type="submit">
                    Salvar
                </button>
            </Buttons>
        </Form>
    )
}

const Buttons = styled.div`
    height: 35px;
    position: absolute;
    bottom: 15px;
    right: 15px;

    button:last-child{
        width: 85px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;
        color: #FFFFFF;
        font-size: 16px;
        line-height: 20px;
    }
    button:first-child{
        width: 85px;
        height: 35px;
        border-radius: 5px;
        background-color: #FFFFFF;
        border: none;
        color: #52B6FF;
        font-size: 16px;
        line-height: 20px;
    }
`

const BoxDays = styled.div`
    display: flex;
    gap: 5px;
    padding-top: 10px;
`

const CardDay = styled.button`
    width: 30px;
    height: 30px;
    border-radius:5px;
    border: 1px solid #D4D4D4;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${prop => prop.verificar ? '#FFFFFF' : '#DBDBDB'} ;
    background-color: ${prop => prop.verificar ? '#CFCFCF' : '#FFFFFF'} ;
`

const Form = styled.form`
    z-index:1;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 30px;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;

    input {
        width: 300px;
        height: 45px;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        padding-left: 10px;
        box-sizing: border-box
    }

    input::placeholder{
        font-size: 20px;
        line-height: 25px;
        color: #DBDBDB;
    }
`