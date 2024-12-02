import { Link } from "react-router-dom";

export default function TelaMenu() {
  return (
    <div>
      <h1>Bem-vindo ao Sistema de Bate-Papo</h1>
      <div>
        <Link to="/login">
          <button>Login</button>
        </Link>
      </div>
      <div>
        <Link to="/cadastro">
          <button>Cadastrar-se</button>
        </Link>
      </div>
    </div>
  );
}
