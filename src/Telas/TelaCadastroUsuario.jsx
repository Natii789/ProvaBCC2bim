import { useState, useContext } from "react";
import { ContextoUsuario } from "../../App";

export default function TelaCadastroUsuario() {
  const { setUsuario } = useContext(ContextoUsuario); 
  const [nickname, setNickname] = useState(""); 
  const [senha, setSenha] = useState(""); 
  const [usuarios, setUsuarios] = useState([]); 

  const handleCadastro = () => {
    if (!nickname || !senha) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    if (usuarios.some((usuario) => usuario.nickname === nickname)) {
      alert("Este nickname já está registrado.");
      return;
    }

    setUsuarios([...usuarios, { nickname, senha }]);
    setUsuario({ nickname, senha, logado: true });
    alert("Usuário cadastrado com sucesso!");
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
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
}
