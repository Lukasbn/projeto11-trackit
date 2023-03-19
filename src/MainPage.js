import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import TrackItData from "./Context/TrackItData"
import axios from "axios"
import HomeList from "./HomeList"
import dayjs from "dayjs"

export default function MainPage() {
    const weekdays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    
    const [listaHome, setListaHome] = useState([])
    const [change, setChange] = useState(false)

    const { token, setTotal, tasksFeitas, total, progresso} = useContext(TrackItData)


    console.log(tasksFeitas)
    useEffect(()=>{
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const autorização = {
            headers: { Authorization: `Bearer ${token}` }
        }

        const promise = axios.get(URL,autorização)

        promise.then((res)=>{
            setListaHome(res.data)
            setTotal(res.data.length)
        })
        promise.catch((err)=>{
            console.log(err.response.data)
        })
    },[token,change, setTotal])

    return (
        <TodayPage>
            <Header />
            <Data progresso={progresso}>
                <h1 data-test="today">{weekdays[dayjs().day()]}, {dayjs().date()}/{(dayjs().month())+1}</h1>
                <p data-test="today-counter" >{progresso === 0 ?  'Nenhum hábito concluído ainda' : `${progresso}% dos hábitos concluídos`}</p>
            </Data>
            <HomeList listaHome={listaHome} setChange={setChange} change={change}/>
            <Footer />
        </TodayPage>
    )
}

const TodayPage = styled.div`
    background-color: #f2f2f2;
    width:100%;
    min-height: calc(100vh - 220px);
    padding-top: 90px;
    padding-bottom: 120px;
`

const Data = styled.div`
    padding: 0 20px;
    padding-bottom: 25px;

    h1{
        font-size: 23px;
        line-height: 29px;
        color:#126BA5;
    }

    p{
        font-size: 18px;
        line-height: 23px;
        color: ${prop=> prop.progresso === 0 ? '#BABABA' : '#8FC549' };
    }
`



