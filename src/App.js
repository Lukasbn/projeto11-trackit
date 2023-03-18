import { BrowserRouter, Route, Routes } from "react-router-dom";
import HabitsPage from "./HabitsPage";
import HistoryPage from "./HistoryPage";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";
import TrackItData from "./Context/TrackItData"
import { useState } from "react";


export default function App() {
  const [token, setToken] = useState('')
  const [fotoPerfil, setFotoPerfil] = useState('')
  const [progresso, setProgresso] = useState(55)
  const [listaHabitos, setListaHabitos] = useState([
    {
      id: 1,
      name: "Nome do hábito",
      days: [1, 3, 5]
    },
    {
      id: 2,
      name: "Nome do hábito 2",
      days: [1, 3, 4, 6]
    }
  ])

  return (
    <TrackItData.Provider
      value={{
        token,
        setToken,
        fotoPerfil,
        setFotoPerfil,
        progresso,
        setProgresso,
        listaHabitos, 
        setListaHabitos
      }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<MainPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/historico" element={<HistoryPage />} />
        </Routes>
      </BrowserRouter>
    </TrackItData.Provider>
  );
}

