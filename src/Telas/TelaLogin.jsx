import { useState, useContext } from "react";
import { ContextoUsuario } from "../../App";
import { useNavigate } from "react-router-dom";

export default function TelaLogin({ usuarios }) {
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const { setUsuario } = useContext(ContextoUsuario);
  const navigate = useNavigate();

  const handleLogin = () => {
    
    const usuarioEncontrado = usuarios.find(
      (user) => user.nickname === nickname && user.senha === senha
    );

    if (usuarioEncontrado) {
      setUsuario({ nickname: usuarioEncontrado.nickname, logado: true });
      navigate("/batepapo"); 
    } else {
      alert("Nickname ou senha incorretos!");
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
