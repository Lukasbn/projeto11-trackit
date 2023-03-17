import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import MainPage from "./MainPage";
import RegisterPage from "./RegisterPage";



export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/cadastro" element={<RegisterPage />} />
          <Route path="/hoje" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

