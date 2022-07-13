import Pokebola from "../../assets/pokebola.svg";
import { useDarkMode } from "../../Context/DarkModeContext";

function DarkModeButton({ onClick }) {
  const { onClickDarkMode } = useDarkMode();

  return (
    <a className="botao-flutuante" onClick={onClickDarkMode}>
      <img src={Pokebola} alt="Pokebola" />
    </a>
  );
}

export default DarkModeButton;
