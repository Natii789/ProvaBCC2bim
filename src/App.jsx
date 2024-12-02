import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TelaMenu from "./componentes/Telas/TelaMenu";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaLogin from "./componentes/Telas/TelaLogin";
import TelaBatePapo from "./componentes/Telas/TelaBatePapo";
import { ContextoUsuario } from "./App";

function App() {
  const [usuario, setUsuario] = useState({
    nickname: "",
    senha: "",
    logado: false,
  });

  return (
    <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaMenu />} />
          <Route path="/cadastro" element={<TelaCadastroUsuario />} />
          <Route path="/login" element={<TelaLogin />} />
          <Route path="/chat" element={<TelaBatePapo />} />
        </Routes>
      </BrowserRouter>
    </ContextoUsuario.Provider>
  );
}

export default App;
