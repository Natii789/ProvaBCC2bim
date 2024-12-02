const initialState = {
    usuarios: [],
  };
  
  const usuarioReducer = (state = initialState, action) => {
    switch (action.type) {
      case "CADASTRAR_USUARIO":
        return { ...state, usuarios: [...state.usuarios, action.payload] };
  
      case "EDITAR_USUARIO":
        return {
          ...state,
          usuarios: state.usuarios.map((usuario) =>
            usuario.id === action.payload.id ? action.payload : usuario
          ),
        };
  
      case "EXCLUIR_USUARIO":
        return {
          ...state,
          usuarios: state.usuarios.filter((usuario) => usuario.id !== action.payload),
        };
  
      default:
        return state;
    }
  };
  
  export default usuarioReducer;
  