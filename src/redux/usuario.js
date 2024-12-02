export const cadastrarUsuario = (usuario) => ({
    type: "CADASTRAR_USUARIO",
    payload: usuario,
  });
  
  export const editarUsuario = (usuario) => ({
    type: "EDITAR_USUARIO",
    payload: usuario,
  });
  
  export const excluirUsuario = (usuarioId) => ({
    type: "EXCLUIR_USUARIO",
    payload: usuarioId,
  });
  