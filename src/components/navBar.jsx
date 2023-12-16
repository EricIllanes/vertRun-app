import logo from "../assets/logo.png";
import "../styles/navBar.css";
import { useLocation, Link } from "react-router-dom";

export default function NavBar(props) {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <Link to="/" className="anchor-nav">
        <img src={logo} alt="vert-run logo" className="logo"></img>
      </Link>

      {pathname === "/" ? (
        <Link to="/month" className="anchor-nav">
          Mensual
        </Link>
      ) : (
        <Link to="/" className="anchor-nav">
          Actividades
        </Link>
      )}
    </header>
  );
}
