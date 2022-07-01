import Logo from '../../assets/Logo.svg';
import Hamburguer from '../../assets/hamburguer.svg';

function Header() {
  return (
    <header className="">
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
  )
}

export default Header;