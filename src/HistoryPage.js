import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function HistoryPage(){
    return(
        <Historico>
            <Header/>
            <Corpo>
                <h1>Histórico</h1>

                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
            </Corpo>
            <Footer/>
        </Historico>
    )
}

const Historico = styled.div`
    background-color: #f2f2f2;
    width:100%;
    min-height: calc(100vh - 220px);
    padding-top: 90px;
    padding-bottom: 120px;
`

const Corpo = styled.div`
    padding: 0 20px;

    h1{
        font-size: 23px;
        line-height: 29px;
        color: #126BA5;
        padding-bottom: 20px;
    }

    p{
        font-size: 18px;
        line-height: 23px;
        color: #666666;
    }
`

