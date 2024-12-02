import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { enviarMensagem, marcarMensagemComoLida, excluirMensagem } from '../redux/actions/mensagemActions';
import { ListGroup, Form, Button } from 'react-bootstrap';

const BatePapo = ({ usuarioAutenticado }) => {
  const [textoMensagem, setTextoMensagem] = useState('');
  const dispatch = useDispatch();
  const mensagens = useSelector((state) => state.mensagens.mensagens);

  const handleEnviarMensagem = () => {
    if (textoMensagem.trim() !== '') {
      const mensagem = {
        id: Date.now(),
        texto: textoMensagem,
        autor: usuarioAutenticado.nickname,
        lida: false,
        timestamp: new Date().toISOString(),
      };
      dispatch(enviarMensagem(mensagem));
      setTextoMensagem('');
    }
  };

  const handleMarcarComoLida = (id) => {
    dispatch(marcarMensagemComoLida(id));
  };

  const handleExcluirMensagem = (id) => {
    dispatch(excluirMensagem(id));
  };

  return (
    <div>
      <h3>Bate-papo</h3>
      <Form>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Digite uma mensagem..."
            value={textoMensagem}
            onChange={(e) => setTextoMensagem(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleEnviarMensagem}>
          Enviar
        </Button>
      </Form>

      <ListGroup>
        {mensagens.map((mensagem) => (
          <ListGroup.Item key={mensagem.id}>
            <strong>{mensagem.autor}</strong>: {mensagem.texto} 
            <Button variant="link" onClick={() => handleMarcarComoLida(mensagem.id)}>
              {mensagem.lida ? 'Lida' : 'Não lida'}
            </Button>
            <Button variant="link" onClick={() => handleExcluirMensagem(mensagem.id)}>
              Excluir
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default BatePapo;
