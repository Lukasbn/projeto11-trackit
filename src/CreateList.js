import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { BsTrash } from "react-icons/bs"
import axios from "axios"


export default function CreateList({ listaHabitos, token, setChange, change }) {

    const weekdays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    function deletar(idHab) {
        const verificar = window.confirm("Tem certeza que deseja excluir esse hábito ?")
        if (verificar) {
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${idHab}`
            const autorização = {
                headers: { Authorization: `Bearer ${token}` }
            }

            const promise = axios.delete(URL, autorização)

            promise.then((res) => setChange(!change))
            promise.catch((err) => alert(err.response.data))

        }
    }

    if (listaHabitos.length === 0) {
        return (
            <TextoAlternativo>
                Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
            </TextoAlternativo>
        )
    }
    return (
        <div>
            {listaHabitos.map((habitos) => (
                <CardHabit key={habitos.id} data-test="habit-container">
                    <p data-test="habit-name">{habitos.name}</p>
                    <BoxDays>{weekdays.map((dias, index) =>
                        <CardDay key={index} verificar={habitos.days.includes(index)} data-test="habit-day">{dias}</CardDay>
                    )}
                    </BoxDays>
                    <div onClick={() => deletar(habitos.id)} data-test="habit-delete-btn">
                        <BsTrash color="#666666" />
                    </div>
                </CardHabit>
            ))}
        </div>
    )
}

const TextoAlternativo = styled.p`
    padding: 0 20px;
    font-size: 18px;
    line-height: 23px;
    color: #666666;
`

const CardHabit = styled.div`
    width: 340px;
    height: 90px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 13px 0;
    padding-left: 15px;
    p{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
    }

    >div:last-child{
        position: absolute;
        right:30px;
    }
`
const BoxDays = styled.div`
    display: flex;
    gap: 5px;
`

const CardDay = styled.div`
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
