import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <Link to="/">Início</Link>
      <Link to="/informatica">Informática</Link>
      <Link to="/alimentos">Alimentos</Link>
      <Link to="/apicultura">Apicultura</Link>
    </nav>
  );
}

export default Menu;