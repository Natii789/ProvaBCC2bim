import { useState, useContext } from "react";
import { ContextoUsuario } from "../../App";

export default function TelaBatePapo() {
  const { usuario } = useContext(ContextoUsuario); 
  const [mensagem, setMensagem] = useState(""); 
  const [mensagens, setMensagens] = useState([]); 
  const [destinatario, setDestinatario] = useState(""); 

  const handleEnviarMensagem = () => {
    if (!mensagem.trim()) {
      alert("A mensagem não pode ser vazia!");
      return;
    }

    if (!destinatario) {
      alert("Por favor, escolha um destinatário.");
      return;
    }

    const novaMensagem = {
      texto: mensagem,
      autor: usuario.nickname,
      destinatario: destinatario,
      timestamp: Date.now(),
    };

    setMensagens([...mensagens, novaMensagem]);
    setMensagem(""); 
  };

  return (
    <div>
      <h2>Bate-papo</h2>

      <div>
        <input
          type="text"
          placeholder="Digite o nickname do destinatário"
          value={destinatario}
          onChange={(e) => setDestinatario(e.target.value)}
        />
      </div>

      
      <div>
        <input
          type="text"
          value={mensagem}
          onChange={(e) => setMensagem(e.target.value)}
          placeholder="Digite sua mensagem"
        />
        <button onClick={handleEnviarMensagem}>Enviar</button>
      </div>

      
      <div>
        <h3>Mensagens:</h3>
        <ul>
          {mensagens
            .filter((msg) => msg.destinatario === usuario.nickname || msg.autor === usuario.nickname)
            .map((msg, index) => (
              <li key={index}>
                <strong>{msg.autor}</strong> para <strong>{msg.destinatario}</strong>: {msg.texto}
                <span> ({new Date(msg.timestamp).toLocaleString()})</span>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
