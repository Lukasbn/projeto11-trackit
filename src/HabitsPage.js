import { useContext, useEffect } from "react"
import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"
import axios from "axios"
import TrackItData from "./Context/TrackItData"
import CreateList from "./CreateList"


export default function HabitsPage(){

    const{ token, setListaHabitos} = useContext(TrackItData)
    
    useEffect(()=>{
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const autorização = {
            headers: {Authorization: `Bearer ${token}` }
        }
        
        const promisse = axios.get(URL,autorização)

        promisse.then((res) => setListaHabitos(res.data))
        promisse.catch((err) => console.log(err))
    },[])

    return(
        <Habitos>
            <Header/>
            <CreateHabit>
                <p>Meus hábitos</p>
                <button data-test="habit-create-btn">+</button>
            </CreateHabit>
            <CreateList/>
            <Footer/>
        </Habitos>
    )
}
const Habitos = styled.div`
    background-color: #f2f2f2;
    width:100%;
    min-height: 100vh;
    padding-top: 100px;
    padding-bottom: 120px;
`
const CreateHabit = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 30px;

    p{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
    }

    button{
        width: 40px;
        height: 35px;
        border-radius: 5px;
        background-color: #52B6FF;
        border: none;
        font-size: 27px;
        line-height: 34px;
        color: #FFFFFF;
    }
`

