import { Link } from "react-router-dom";

export default function TelaMenu() {
  return (
    <div>
      <h2>Menu</h2>
      <Link to="/cadastro">
        <button>Cadastrar-se</button>
      </Link>
      <br />
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}
