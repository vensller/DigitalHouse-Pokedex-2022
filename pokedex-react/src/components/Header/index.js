import Logo from "../../assets/Logo.svg";
import Hamburguer from "../../assets/hamburguer.svg";
import { useDarkMode } from "../../Context/DarkModeContext";

function Header() {
  const { darkMode } = useDarkMode();

  return (
    <header className={darkMode ? "dark-mode-main" : ""}>
      <img src={Logo} alt="Logo" />
      <button type="button" className="hamburguer-menu">
        <img src={Hamburguer} alt="Botão Hamburguer" />
      </button>
      <nav className="navbar">
        <a href="#"> Home </a>
        <a href="#"> Pokedex </a>
        <a href="#"> Legendaries </a>
        <a href="#"> Documentation </a>
      </nav>
    </header>
  );
}

export default Header;
