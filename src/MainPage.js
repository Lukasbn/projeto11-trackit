import styled from "styled-components"
import Footer from "./Footer"
import Header from "./Header"

export default function MainPage() {
    return (
        <TodayPage>
            <Header />
            <Footer />
        </TodayPage>
    )
}

const TodayPage = styled.div`
    background-color: #f2f2f2;
    width:100%;
    min-height: 100vh;
    padding-top: 90px;
    padding-bottom: 120px;
`



