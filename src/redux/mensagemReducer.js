const initialState = {
    mensagens: [],
  };
  
  const mensagemReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ENVIAR_MENSAGEM":
        return { ...state, mensagens: [...state.mensagens, action.payload] };
  
      case "MARCAR_MENSAGEM_LIDA":
        return {
          ...state,
          mensagens: state.mensagens.map((msg) =>
            msg.id === action.payload ? { ...msg, lida: true } : msg
          ),
        };
  
      case "EXCLUIR_MENSAGEM":
        return {
          ...state,
          mensagens: state.mensagens.filter((msg) => msg.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default mensagemReducer;
  