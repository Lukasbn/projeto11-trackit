import styled from "styled-components"
import { BsCheck } from "react-icons/bs"
import TrackItData from "./Context/TrackItData"
import axios from "axios"
import { useContext } from "react"

export default function HomeList({ listaHome, change, setChange}) {

    const { token,setTasksFeitas,tasksFeitas } = useContext(TrackItData)

    function toggleActive(id, feito){
        if(feito){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`
            const autorização = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const body = {}

            const promisse = axios.post(URL,body,autorização)

            promisse.then((res)=>{
                const newarray = tasksFeitas.filter(item => item !== id )
                setTasksFeitas(newarray)
                setChange(!change)
            })
            promisse.catch((err)=>{
                alert(err.response.data)
            })
        }
        else if(!feito){
            const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
            const autorização = {
                headers: { Authorization: `Bearer ${token}` }
            }
            const body = {}

            const promisse = axios.post(URL,body,autorização)

            promisse.then((res)=>{
                const newarray = [...tasksFeitas, id]
                setTasksFeitas(newarray)
                setChange(!change)
            })
            promisse.catch((err)=>{
                alert(err.response.data)
            })
        }
    }


    if (listaHome.length === 0) {
        return (
            <TextoAlternativo>
                Você não tem nenhum hábito para hoje. Adicione um hábito para começar a trackear!
            </TextoAlternativo>
        )
    }
    return (
        <div>
            {listaHome.map((data) => (
                <CardTask key={data.id}>
                    <div>
                        <h1>{data.name}</h1>
                        <div>
                            <p>Sequência atual: {data.currentSequence} dias</p>
                            <p>Seu recorde: {data.highestSequence} dias</p>
                        </div>
                    </div>
                    <button onClick={()=>toggleActive(data.id,data.done)}>
                        <BsCheck size='55px' color="#FFFFFF"></BsCheck>
                    </button>
                </CardTask>
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
const CardTask = styled.div`
    width: 340px;
    height: 100px;
    border-radius: 5px;
    background-color: #FFFFFF;
    margin: 0 auto;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding: 12px;
    display: flex;
    justify-content: space-between;

    button{
        width: 70px;
        height: 70px;
        border-radius: 5px;
        border: 1px solid #E7E7E7;
        background-color: #EBEBEB;
    }

    h1{
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        padding-bottom: 10px;
    }

    p{
        font-size: 13px;
        line-height: 17px;
        color: #666666;
    }

`


