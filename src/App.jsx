import React, { useState, createContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaMenu from "./componentes/Telas/TelaMenu";
import TelaLogin from "./componentes/Telas/TelaLogin";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaBatePapo from "./componentes/Telas/TelaBatePapo";

export const ContextoUsuario = createContext();

function App() {
  const [usuarios, setUsuarios] = useState([]);  // Lista de usuários cadastrados
  const [usuario, setUsuario] = useState({ nickname: "", logado: false });

  return (
    <ContextoUsuario.Provider value={{ usuario, setUsuario }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaMenu />} />
          <Route path="/login" element={<TelaLogin usuarios={usuarios} />} />
          <Route path="/cadastro" element={<TelaCadastroUsuario setUsuarios={setUsuarios} />} />
          <Route path="/batepapo" element={usuario.logado ? <TelaBatePapo /> : <TelaLogin usuarios={usuarios} />} />
        </Routes>
      </BrowserRouter>
    </ContextoUsuario.Provider>
  );
}

export default App;
