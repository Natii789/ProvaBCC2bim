import { combineReducers } from 'redux';
import usuarioReducer from './reducers/usuarioReducer';
import mensagemReducer from './reducers/mensagemReducer';

const rootReducer = combineReducers({
  usuarios: usuarioReducer,
  mensagens: mensagemReducer,
});

export default rootReducer;
