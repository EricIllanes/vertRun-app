import logo from "../assets/logo.png";
import "../styles/navBar.css";
import { useLocation } from "react-router-dom";

export default function NavBar() {
  const { pathname } = useLocation();
  return (
    <header className="navbar">
      <a href="/">
      <img src={logo} alt="vert-run logo" className="logo"></img>
      </a>

      {pathname === "/" ? (
        <a href="/month" className="anchor-nav">Mensual</a>
      ) : (
        <a href="/" className="anchor-nav">Actividades</a>
      )}
    </header>
  );
}
