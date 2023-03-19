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
  const [listaHabitos, setListaHabitos] = useState([])
  const [tasksFeitas, setTasksFeitas] = useState([])
  const [total, setTotal] = useState(0)

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
        setListaHabitos, 
        tasksFeitas, 
        setTasksFeitas, 
        total, 
        setTotal
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

