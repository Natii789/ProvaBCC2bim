import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TelaCadastroUsuario({ setUsuarios }) {
  const [nickname, setNickname] = useState("");
  const [senha, setSenha] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  const handleCadastro = () => {
    if (nickname && senha && avatar) {
      setUsuarios((prevUsuarios) => [
        ...prevUsuarios,
        { nickname, senha, avatar },
      ]);
      alert("Cadastro realizado com sucesso!");
      navigate("/login");  
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
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
      <input
        type="text"
        placeholder="URL do Avatar"
        value={avatar}
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}
