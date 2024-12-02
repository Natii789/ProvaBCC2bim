import { useState, useContext } from "react";
import { ContextoUsuario } from "../../App";

export default function TelaBatePapo() {
  const { usuario } = useContext(ContextoUsuario);
  const [mensagem, setMensagem] = useState("");
  const [mensagens, setMensagens] = useState([]);

  const handlePostMessage = () => {
    if (mensagem.trim()) {
      setMensagens([...mensagens, { texto: mensagem, autor: usuario.nickname }]);
      setMensagem("");  
    } else {
      alert("A mensagem não pode ser vazia.");
    }
  };

  return (
    <div>
      <h2>Bate-Papo - Bem-vindo, {usuario.nickname}!</h2>
      <div>
        <input
          type="text"
          placeholder="Digite sua mensagem"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
        />
        <button onClick={handlePostMessage}>Enviar</button>
      </div>

      <h3>Mensagens</h3>
      <ul>
        {mensagens.map((msg, index) => (
          <li key={index}>
            <strong>{msg.autor}:</strong> {msg.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}
