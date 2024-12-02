export const enviarMensagem = (mensagem) => ({
    type: "ENVIAR_MENSAGEM",
    payload: mensagem,
  });
  
  export const marcarMensagemComoLida = (mensagemId) => ({
    type: "MARCAR_MENSAGEM_LIDA",
    payload: mensagemId,
  });
  
  export const excluirMensagem = (mensagemId) => ({
    type: "EXCLUIR_MENSAGEM",
    payload: mensagemId,
  });
  