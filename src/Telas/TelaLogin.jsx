import { useState, useContext } from "react";
import { ContextoUsuario } from "../../App";
import { useNavigate } from "react-router-dom";

export default function TelaLogin() {
  const { setUsuario } = useContext(ContextoUsuario);
  const [nickname, setNickname] = useState(""); 
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!nickname || !senha) {
      alert("Por favor, preencha o nickname e a senha.");
      return;
    }

    const usuario = usuarios.find(
      (user) => user.nickname === nickname && user.senha === senha
    );

    if (usuario) {
      setUsuario({ nickname, senha, logado: true });
      navigate("/chat"); 
    } else {
      alert("Credenciais inválidas.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button onClick={handleLogin}>Entrar</button>
    </div>
  );
}
